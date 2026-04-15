import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Allowed origins for CORS - restrict to your actual domains
const ALLOWED_ORIGINS = [
  "https://uzwal.netlify.app",
  "https://www.uzwal.netlify.app",
  "http://localhost:8080",
  "http://localhost:5173",
];

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

// Validation constants
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5;

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
  website?: string; // Honeypot field - should always be empty
}

// HTML escape function to prevent XSS in email templates
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Rate limiting check
function checkRateLimit(clientIp: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(clientIp);

  if (!record) {
    rateLimitMap.set(clientIp, { count: 1, timestamp: now });
    return true;
  }

  // Reset if window has passed
  if (now - record.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientIp, { count: 1, timestamp: now });
    return true;
  }

  // Check if limit exceeded
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  // Increment count
  record.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      console.warn("Rate limit exceeded for IP:", clientIp);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const body = await req.json();
    const { name, email, message, website }: ContactEmailRequest = body;

    // Honeypot check - if website field is filled, it's likely a bot
    if (website && website.trim().length > 0) {
      console.warn("Honeypot triggered - potential bot submission");
      // Return success to not reveal detection to bots
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate name
    if (!name || typeof name !== "string") {
      return new Response(
        JSON.stringify({ error: "Name is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
      return new Response(
        JSON.stringify({ error: "Name cannot be empty" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (trimmedName.length > MAX_NAME_LENGTH) {
      return new Response(
        JSON.stringify({ error: `Name must be less than ${MAX_NAME_LENGTH} characters` }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    if (trimmedEmail.length === 0) {
      return new Response(
        JSON.stringify({ error: "Email cannot be empty" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
      return new Response(
        JSON.stringify({ error: `Email must be less than ${MAX_EMAIL_LENGTH} characters` }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate message
    if (!message || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length === 0) {
      return new Response(
        JSON.stringify({ error: "Message cannot be empty" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return new Response(
        JSON.stringify({ error: `Message must be less than ${MAX_MESSAGE_LENGTH} characters` }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all inputs for HTML template
    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage);

    console.log("Processing valid contact form submission from:", safeEmail);

    // Send notification email to Ujjwal
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["iamkashyup@gmail.com"],
      subject: `New Portfolio Contact: ${safeName}`,
      html: `
        <div style="font-family: 'JetBrains Mono', monospace; background: #050505; color: #fff; padding: 40px;">
          <div style="max-width: 600px; margin: 0 auto; border: 1px solid #333; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #0ea5e9, #22c55e); padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; color: #050505;">New Portfolio Contact</h1>
            </div>
            <div style="padding: 32px;">
              <div style="margin-bottom: 24px;">
                <p style="color: #888; font-size: 12px; text-transform: uppercase; margin: 0 0 8px 0;">From</p>
                <p style="color: #fff; font-size: 18px; margin: 0;">${safeName}</p>
              </div>
              <div style="margin-bottom: 24px;">
                <p style="color: #888; font-size: 12px; text-transform: uppercase; margin: 0 0 8px 0;">Email</p>
                <a href="mailto:${safeEmail}" style="color: #0ea5e9; font-size: 16px; text-decoration: none;">${safeEmail}</a>
              </div>
              <div style="margin-bottom: 24px;">
                <p style="color: #888; font-size: 12px; text-transform: uppercase; margin: 0 0 8px 0;">Message</p>
                <div style="background: #111; border: 1px solid #333; border-radius: 8px; padding: 16px;">
                  <p style="color: #ddd; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
                </div>
              </div>
              <div style="text-align: center; padding-top: 24px; border-top: 1px solid #333;">
                <a href="mailto:${safeEmail}" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #22c55e); color: #050505; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Reply to ${safeName}</a>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
