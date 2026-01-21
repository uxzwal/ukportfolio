import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Send, Terminal, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FadeInUp, SlideInLeft, SlideInRight, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";
import SocialIcon3D from "@/components/SocialIcon3D";
import { supabase } from "@/integrations/supabase/client";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding relative bg-background">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono mb-4">
              Contact
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-gradient">Let's Connect</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Looking for internships, entry-level DevOps roles, or just want to connect?
              I'd love to hear from you.
            </p>
          </TextReveal>
        </FadeInUp>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <SlideInLeft>
            <NeonCard className="p-8 h-full" variant="primary">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-foreground">
                    Get in Touch
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Available for opportunities
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <motion.a
                href={`mailto:${SOCIAL_LINKS.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/30 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.1)] cursor-pointer group mb-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <span className="text-foreground group-hover:text-primary transition-colors font-mono">
                    {SOCIAL_LINKS.email}
                  </span>
                </div>
              </motion.a>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <p className="text-sm text-muted-foreground font-mono mb-4">Connect on socials:</p>
                <div className="flex flex-wrap gap-3">
                  <SocialIcon3D platform="github" href={SOCIAL_LINKS.github} />
                  <SocialIcon3D platform="linkedin" href={SOCIAL_LINKS.linkedin} />
                  <SocialIcon3D platform="twitter" href={SOCIAL_LINKS.twitter} />
                  <SocialIcon3D platform="instagram" href={SOCIAL_LINKS.instagram} />
                  <SocialIcon3D platform="facebook" href={SOCIAL_LINKS.facebook} />
                  <SocialIcon3D platform="devto" href={SOCIAL_LINKS.devto} />
                  <SocialIcon3D platform="reddit" href={SOCIAL_LINKS.reddit} />
                  <SocialIcon3D platform="tumblr" href={SOCIAL_LINKS.tumblr} />
                  <SocialIcon3D platform="quora" href={SOCIAL_LINKS.quora} />
                </div>
              </motion.div>

              {/* Status Card */}
              <motion.div 
                className="p-5 rounded-lg bg-gradient-to-br from-green-500/10 to-accent/5 border border-green-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <h4 className="font-mono font-semibold text-foreground">
                    Open to Opportunities
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently seeking internships and entry-level DevOps/Cloud Engineer positions.
                </p>
              </motion.div>
            </NeonCard>
          </SlideInLeft>

          {/* Contact Form */}
          <SlideInRight delay={0.2}>
            <NeonCard className="p-8" variant="accent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I'll respond within 24 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <div className="relative neon-input rounded-lg">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none font-mono text-sm relative z-10"
                      placeholder="Your name"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <div className="relative neon-input rounded-lg">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none font-mono text-sm relative z-10"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <div className="relative neon-input rounded-lg">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none font-mono text-sm resize-none relative z-10"
                      placeholder="Tell me about the opportunity..."
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </NeonCard>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
