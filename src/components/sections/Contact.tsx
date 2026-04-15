import { motion } from "framer-motion";
import { Send, Mail, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SOCIAL_LINKS } from "@/lib/constants";
import SocialIcon3D from "@/components/SocialIcon3D";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length > MAX_NAME_LENGTH) newErrors.name = "Name too long";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!EMAIL_REGEX.test(formData.email.trim())) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length > MAX_MESSAGE_LENGTH) newErrors.message = "Message too long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          message: formData.message.trim(),
          website: formData.website,
        },
      });
      if (error) throw error;
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "", website: "" });
      setErrors({});
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send. Please try email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputClasses = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl bg-card border text-foreground placeholder:text-muted-foreground/50 text-sm transition-all duration-300 outline-none ${
      errors[field]
        ? "border-destructive"
        : focusedField === field
        ? "border-primary shadow-[0_0_0_3px_hsl(160_84%_39%_/_0.08)]"
        : "border-border hover:border-border/80"
    }`;

  return (
    <section id="contact" className="section-padding relative bg-background">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto relative z-10 max-w-3xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">
            05 — Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Looking for internships, entry-level roles, or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Honeypot */}
          <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
            <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                maxLength={MAX_NAME_LENGTH}
                className={inputClasses("name")}
                placeholder="Your name"
              />
              {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted-foreground mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                maxLength={MAX_EMAIL_LENGTH}
                className={inputClasses("email")}
                placeholder="you@email.com"
              />
              {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-muted-foreground mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              maxLength={MAX_MESSAGE_LENGTH}
              rows={5}
              className={`${inputClasses("message")} resize-none`}
              placeholder="Tell me about the opportunity..."
            />
            {errors.message && <p className="text-destructive text-xs mt-1.5">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
              isSuccess
                ? "bg-primary text-primary-foreground"
                : "bg-foreground text-background hover:opacity-90"
            } disabled:opacity-60`}
            whileTap={{ scale: 0.98 }}
          >
            {isSuccess ? (
              <>
                <Check className="w-4 h-4" />
                Message Sent!
              </>
            ) : isSubmitting ? (
              <motion.div
                className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Divider */}
        <div className="line-separator my-12" />

        {/* Alternative contact */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            {SOCIAL_LINKS.email}
          </a>

          <div className="flex justify-center flex-wrap gap-3">
            <SocialIcon3D platform="github" href={SOCIAL_LINKS.github} size="sm" />
            <SocialIcon3D platform="linkedin" href={SOCIAL_LINKS.linkedin} size="sm" />
            <SocialIcon3D platform="twitter" href={SOCIAL_LINKS.twitter} size="sm" />
            <SocialIcon3D platform="instagram" href={SOCIAL_LINKS.instagram} size="sm" />
            <SocialIcon3D platform="devto" href={SOCIAL_LINKS.devto} size="sm" />
            <SocialIcon3D platform="facebook" href={SOCIAL_LINKS.facebook} size="sm" />
            <SocialIcon3D platform="reddit" href={SOCIAL_LINKS.reddit} size="sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
