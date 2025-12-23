import { motion } from "framer-motion";
import { ExternalLink, Bot, FileText, Sparkles } from "lucide-react";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Kontentai – AI Content Platform",
    description:
      "An AI-powered content platform built using no-code tools with authentication and a clean UI. Leverages cutting-edge AI for automated content creation.",
    tags: ["AI-Powered", "No-Code", "Authentication"],
    link: "https://kontentai.lovable.app/auth",
    icon: Bot,
    gradient: "from-primary/20 to-accent/20",
    color: "primary",
  },
  {
    title: "RP Bill – Billing Web App",
    description:
      "A simple and responsive billing web application deployed live using Netlify. Clean interface for managing bills and invoices efficiently.",
    tags: ["No-Code", "Billing", "Netlify Deploy"],
    link: "https://rpbill.netlify.app/",
    icon: FileText,
    gradient: "from-accent/20 to-secondary/20",
    color: "accent",
  },
  {
    title: "Invoice Bill Generator",
    description:
      "A lightweight invoice generation web app with a clean frontend UI. Perfect for freelancers and small businesses to create professional invoices.",
    tags: ["Frontend UI", "Invoice Tool", "Netlify Deploy"],
    link: "https://invoicebill.netlify.app/",
    icon: Sparkles,
    gradient: "from-secondary/20 to-primary/20",
    color: "secondary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative bg-[hsl(0_0%_2%)]">
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-mono mb-4">
              Portfolio
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-gradient">My Projects</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real projects built with no-code platforms and AI tools.
              Each one is live and deployed.
            </p>
          </TextReveal>
        </FadeInUp>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <NeonCard 
                className="p-6 h-full transition-all duration-500 hover:-translate-y-3 group" 
                variant={project.color as "primary" | "accent" | "secondary"}
              >
                {/* Gradient Header with Icon */}
                <div
                  className={`h-32 rounded-lg mb-6 bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-border/30 group-hover:scale-105 transition-transform duration-500`}
                >
                  <project.icon className="w-12 h-12 text-foreground/60" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-accent uppercase tracking-wider">
                      Live Project
                    </span>
                    <h4 className="text-xl font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Button */}
                  <div className="pt-4">
                    <Button variant="outline-glow" size="sm" asChild className="w-full">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">Want something similar for your business?</p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Let's Build Together
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
