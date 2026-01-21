import { motion } from "framer-motion";
import { BookOpen, Beaker, FileText, Globe } from "lucide-react";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";

const philosophyPoints = [
  {
    icon: BookOpen,
    title: "Fundamentals First",
    description: "Building strong foundations in Linux, networking, and core DevOps concepts before jumping to advanced tools.",
    color: "text-primary",
  },
  {
    icon: Beaker,
    title: "Hands-on Labs",
    description: "Learning through practical experimentation in local environments and cloud sandboxes.",
    color: "text-accent",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Reading official docs, understanding architecture, and taking structured notes.",
    color: "text-secondary",
  },
  {
    icon: Globe,
    title: "Real-World Concepts",
    description: "Understanding how enterprises use DevOps tools before production-level work.",
    color: "text-primary",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-mono text-sm mb-4">
              My Approach
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              Learning <span className="text-gradient">Philosophy</span>
            </h2>
          </TextReveal>
          <FadeInUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My DevOps learning focuses on <span className="text-foreground font-medium">fundamentals</span>, 
              hands-on labs, documentation, and real-world concepts before production-level work.
            </p>
          </FadeInUp>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className={`p-3 rounded-xl bg-muted ${point.color}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <point.icon className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-mono font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Card */}
        <FadeInUp delay={0.4}>
          <motion.div
            className="mt-12 glass-card p-8 rounded-2xl border border-primary/30 text-center"
            whileHover={{ scale: 1.01 }}
          >
            <blockquote className="text-xl md:text-2xl font-mono text-foreground/90 italic">
              "I am learning DevOps the right way —{" "}
              <span className="text-gradient font-semibold not-italic">fundamentals first.</span>"
            </blockquote>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Philosophy;