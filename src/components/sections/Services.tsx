import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, Layout, Rocket, Palette, Cloud, ArrowRight } from "lucide-react";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Web Applications",
    description:
      "Intelligent chatbots, dashboards, and automation tools built with cutting-edge AI integration for smarter user experiences.",
    features: ["Chatbots", "Dashboards", "AI Tools"],
    color: "primary",
  },
  {
    icon: Layout,
    title: "No-Code Websites & Landing Pages",
    description:
      "Beautiful, responsive, and conversion-optimized websites built rapidly using modern no-code platforms.",
    features: ["Responsive Design", "Modern UI", "Fast Delivery"],
    color: "accent",
  },
  {
    icon: Rocket,
    title: "SaaS MVP Development",
    description:
      "Turn your startup idea into a working product. Perfect for founders who need to validate ideas quickly and efficiently.",
    features: ["For Startups", "Quick Launch", "Scalable"],
    color: "secondary",
  },
  {
    icon: Palette,
    title: "Frontend UI Design",
    description:
      "Clean, user-friendly interfaces that look professional and convert visitors into customers.",
    features: ["Clean Design", "User-Friendly", "Conversion Focus"],
    color: "primary",
  },
  {
    icon: Cloud,
    title: "Deployment & Hosting",
    description:
      "Complete deployment setup with GitHub and Netlify. Get your project live with custom domains and SSL certificates.",
    features: ["GitHub Setup", "Netlify Deploy", "Live Product"],
    color: "accent",
  },
];

const Services = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          icon: "text-primary bg-primary/10 border-primary/30",
          glow: "hover:shadow-[0_0_40px_hsl(200_100%_50%_/_0.2)]",
          badge: "bg-primary/10 text-primary border-primary/30",
        };
      case "accent":
        return {
          icon: "text-accent bg-accent/10 border-accent/30",
          glow: "hover:shadow-[0_0_40px_hsl(150_100%_45%_/_0.2)]",
          badge: "bg-accent/10 text-accent border-accent/30",
        };
      case "secondary":
        return {
          icon: "text-secondary bg-secondary/10 border-secondary/30",
          glow: "hover:shadow-[0_0_40px_hsl(270_80%_60%_/_0.2)]",
          badge: "bg-secondary/10 text-secondary border-secondary/30",
        };
      default:
        return {
          icon: "text-primary bg-primary/10 border-primary/30",
          glow: "hover:shadow-[0_0_40px_hsl(200_100%_50%_/_0.2)]",
          badge: "bg-primary/10 text-primary border-primary/30",
        };
    }
  };

  return (
    <section id="services" className="section-padding relative bg-[hsl(0_0%_2%)]">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
              Services
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-gradient">What I Offer</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              End-to-end web development services using no-code platforms and AI tools.
              Fast delivery, professional quality.
            </p>
          </TextReveal>
        </FadeInUp>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <NeonCard 
                  className={`p-6 h-full transition-all duration-500 hover:-translate-y-3 ${colors.glow}`}
                  variant={service.color as "primary" | "accent" | "secondary"}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${colors.icon} transition-transform duration-500 group-hover:scale-110`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-mono font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full border ${colors.badge}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </NeonCard>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Let's Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
