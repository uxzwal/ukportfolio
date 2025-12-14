import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingCart, Code2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "AI-Powered Portfolio Sites",
    description:
      "Stunning personal and professional portfolios that showcase your work with intelligent design, dynamic animations, and optimized performance. Built to convert visitors into clients.",
    features: ["Smart Layout Generation", "SEO Optimized", "Performance Tuned"],
    color: "primary",
  },
  {
    icon: ShoppingCart,
    title: "Intelligent E-commerce Platforms",
    description:
      "Full-featured online stores powered by AI for personalized shopping experiences, smart inventory predictions, and conversion-optimized checkout flows.",
    features: ["Smart Product Recommendations", "Secure Payments", "Analytics Dashboard"],
    color: "accent",
  },
  {
    icon: Code2,
    title: "Fully Functional Custom Websites",
    description:
      "Bespoke web applications tailored to your exact requirements. From landing pages to complex dashboards, every line of code is crafted with AI precision.",
    features: ["Custom Features", "API Integrations", "Scalable Architecture"],
    color: "secondary",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          icon: "text-primary bg-primary/10 border-primary/30",
          glow: "hover:shadow-[0_0_40px_hsl(200_100%_50%_/_0.3)]",
          badge: "bg-primary/10 text-primary border-primary/30",
        };
      case "accent":
        return {
          icon: "text-accent bg-accent/10 border-accent/30",
          glow: "hover:shadow-[0_0_40px_hsl(150_100%_45%_/_0.3)]",
          badge: "bg-accent/10 text-accent border-accent/30",
        };
      case "secondary":
        return {
          icon: "text-secondary bg-secondary/10 border-secondary/30",
          glow: "hover:shadow-[0_0_40px_hsl(270_80%_60%_/_0.3)]",
          badge: "bg-secondary/10 text-secondary border-secondary/30",
        };
      default:
        return {
          icon: "text-primary bg-primary/10 border-primary/30",
          glow: "hover:shadow-[0_0_40px_hsl(200_100%_50%_/_0.3)]",
          badge: "bg-primary/10 text-primary border-primary/30",
        };
    }
  };

  return (
    <section id="services" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-gradient">Solutions Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive web development services powered by the latest AI technology.
            Every project delivers measurable ROI and exceptional quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`glass-card p-8 transition-all duration-500 hover:-translate-y-2 ${colors.glow}`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${colors.icon}`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-mono font-bold mb-4 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full border ${colors.badge}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Start Your AI-Powered Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
