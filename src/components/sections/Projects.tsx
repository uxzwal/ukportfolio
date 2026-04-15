import { motion } from "framer-motion";
import { ExternalLink, Bot, FileText, Sparkles, Zap } from "lucide-react";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Kontentai",
    subtitle: "AI Content Platform",
    description:
      "AI-powered content system with authentication and automated content workflows. Built with a focus on automation, user experience, and rapid iteration using modern AI-assisted development.",
    tags: ["AI-Powered", "No-Code", "Auth", "Live"],
    link: "https://kontentai.lovable.app/auth",
    icon: Bot,
    gradient: "from-primary/20 to-accent/20",
    color: "primary",
    focus: "Automation + AI workflow",
  },
  {
    title: "RP Bill",
    subtitle: "Billing Web App",
    description:
      "Responsive billing system deployed live, focused on real-world billing workflows. Clean interface for managing bills and invoices with a production-ready deployment pipeline.",
    tags: ["Billing", "Responsive", "Netlify", "Live"],
    link: "https://rpbill.netlify.app/",
    icon: FileText,
    gradient: "from-accent/20 to-secondary/20",
    color: "accent",
    focus: "Real-world billing workflows",
  },
  {
    title: "Invoice Generator",
    subtitle: "Invoice Tool",
    description:
      "Lightweight invoice generation tool focused on simplicity and usability. Enables freelancers and small businesses to create professional invoices instantly without complexity.",
    tags: ["Frontend", "Invoice", "Live"],
    link: "https://invoicebill.netlify.app/",
    icon: Sparkles,
    gradient: "from-secondary/20 to-primary/20",
    color: "secondary",
    focus: "Simplicity + usability",
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
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-mono mb-4">
              <Zap className="w-3.5 h-3.5" />
              Vibe Coded Systems (Lovable.dev)
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-gradient">Vibe Coded Systems</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Built using modern AI-assisted development workflows, focusing on rapid prototyping,
              usability, and deployment. Each project is live and solving real problems.
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
                  className={`h-32 rounded-lg mb-6 bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-border/30 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden`}
                >
                  <project.icon className="w-12 h-12 text-foreground/60 relative z-10" />
                  {/* Subtle pipeline animation line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    style={{ width: "60%" }}
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">
                      {project.focus}
                    </span>
                    <h4 className="text-xl font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
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
                        View Live
                      </a>
                    </Button>
                  </div>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm font-mono">
            These projects demonstrate AI-assisted development workflows and live deployment skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
