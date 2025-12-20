import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, message: message.substring(0, 50) + "..." });

    // Validate inputs
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to Ujjwal
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["iamkashyup@gmail.com"],
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: 'JetBrains Mono', monospace; background: #050505; color: #fff; padding: 40px;">
          <div style="max-width: 600px; margin: 0 auto; border: 1px solid #333; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #0ea5e9, #22c55e); padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; color: #050505;">New Portfolio Contact</h1>
            </div>
            <div style="padding: 32px;">
              <div style="margin-bottom: 24px;">
                <p style="color: #888; font-size: 12px; text-transform: uppercase; margin: 0 0 8px 0;">From</p>
                <p style="color: #fff; font-size: 18px; margin: 0;">${name}</p>
              </div>
              <div style="margin-bottom: 24px;">
                <p style="color: #888; font-size: 12px; text-transform: uppercase; margin: 0 0 8px 0;">Email</p>
                <a href="mailto:${email}" style="color: #0ea5e9; font-size: 16px; text-decoration: none;">${email}</a>
              </div>
              <div style="margin-bottom: 24px;">
                <p style="color: #888; font-size: 12px; text-transform: uppercase; margin: 0 0 8px 0;">Message</p>
                <div style="background: #111; border: 1px solid #333; border-radius: 8px; padding: 16px;">
                  <p style="color: #ddd; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              <div style="text-align: center; padding-top: 24px; border-top: 1px solid #333;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #22c55e); color: #050505; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Reply to ${name}</a>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
