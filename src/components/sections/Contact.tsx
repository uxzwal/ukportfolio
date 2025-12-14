import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FadeInUp, SlideInLeft, SlideInRight, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";

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

    // Open mailto with pre-filled data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:iamkashyup@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client",
      description: "Your default email app will open with your message.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
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
    <section id="contact" className="section-padding relative bg-[hsl(0_0%_1%)]">
      <div className="absolute inset-0 grid-pattern opacity-5" />

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
              <span className="text-gradient">Let's Build Together</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to transform your vision with AI-powered development?
              Reach out and let's discuss your project.
            </p>
          </TextReveal>
        </FadeInUp>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <SlideInLeft>
            <NeonCard className="p-8" variant="primary">
              <h3 className="text-xl font-mono font-bold mb-6 text-foreground">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-[hsl(0_0%_3%)] border border-border/30 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_hsl(200_100%_50%_/_0.1)] neon-input-wrapper"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:iamkashyup@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-mono text-sm"
                    >
                      iamkashyup@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/youjjwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-[hsl(0_0%_3%)] border border-border/30 transition-all hover:border-[#0A66C2]/50 hover:shadow-[0_0_20px_rgba(10,102,194,0.2)] cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/20 flex items-center justify-center group-hover:bg-[#0A66C2]/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      LinkedIn
                    </p>
                    <span className="text-foreground group-hover:text-[#0A66C2] transition-colors font-mono text-sm">
                      Ujjwal
                    </span>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-[hsl(0_0%_3%)] border border-border/30 transition-all hover:border-accent/50 hover:shadow-[0_0_20px_hsl(150_100%_45%_/_0.1)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-foreground font-mono text-sm">
                      851101, Bihar, India
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div 
                className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="font-mono font-semibold text-foreground mb-2">
                  Ready to Start?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a free consultation for your AI-powered project.
                </p>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="mailto:iamkashyup@gmail.com">
                    Start Your AI-Powered Project
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </NeonCard>
          </SlideInLeft>

          {/* Contact Form */}
          <SlideInRight delay={0.2}>
            <NeonCard className="p-8" variant="accent">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-mono font-bold mb-2 text-foreground">
                  Send a Message
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form below and I'll respond within 24 hours.
                </p>

                <div className="space-y-4">
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
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none font-mono text-sm resize-none relative z-10"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </motion.div>
                </div>

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
