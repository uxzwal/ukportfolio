import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";

const clientProjects = [
  {
    title: "Nexus Dynamics",
    subtitle: "Launch Case Study",
    description:
      "A complete business intelligence dashboard built for a fintech startup. Leveraged GPT-4 for automated report generation and natural language queries, reducing analytics time by 70%.",
    tags: ["React", "AI Analytics", "Dashboard"],
    type: "client",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Artisan Collective",
    subtitle: "Initial Beta Partnership",
    description:
      "E-commerce platform for handcrafted goods. Implemented AI-powered product descriptions and smart search, increasing conversion rates by 45% in the first month.",
    tags: ["E-commerce", "AI Content", "Next.js"],
    type: "client",
    gradient: "from-accent/20 to-secondary/20",
  },
];

const conceptProjects = [
  {
    title: "Neural Portfolio",
    description:
      "An adaptive portfolio template that learns from visitor behavior to highlight the most relevant work. Built with ML-driven personalization.",
    tags: ["AI/ML", "Personalization", "React"],
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    title: "CodeMind IDE",
    description:
      "A concept web-based IDE with AI pair programming capabilities. Features intelligent code completion, bug detection, and automated documentation.",
    tags: ["Developer Tools", "AI Assistant", "TypeScript"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "Quantum Commerce",
    description:
      "Next-generation e-commerce prototype with predictive inventory, AI pricing optimization, and automated customer service integration.",
    tags: ["E-commerce", "Predictive AI", "Full Stack"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "HealthSync Dashboard",
    description:
      "Medical data visualization platform concept. Uses AI to detect patterns in health metrics and generate actionable insights for practitioners.",
    tags: ["Healthcare", "Data Viz", "AI Insights"],
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    title: "EduFlow LMS",
    description:
      "Learning management system with AI-generated quizzes, personalized learning paths, and intelligent progress tracking for students.",
    tags: ["EdTech", "AI Tutor", "React"],
    gradient: "from-primary/20 to-accent/20",
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
              <span className="text-gradient">Proof of Work</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real client successes and innovative concept projects showcasing
              the power of AI-driven development.
            </p>
          </TextReveal>
        </FadeInUp>

        {/* Client Projects */}
        <div className="mb-16">
          <motion.h3
            className="text-xl font-mono font-semibold mb-8 flex items-center gap-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            Client Case Studies
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {clientProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <NeonCard className="p-6 h-full transition-all duration-500 hover:-translate-y-2" variant="primary">
                  {/* Gradient Header */}
                  <div
                    className={`h-32 rounded-lg mb-6 bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-border/30`}
                  >
                    <span className="text-2xl font-mono font-bold text-foreground/80">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-mono text-accent uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                      <h4 className="text-xl font-mono font-bold text-foreground">
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
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Concept Projects */}
        <div>
          <motion.h3
            className="text-xl font-mono font-semibold mb-8 flex items-center gap-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-5 h-5 text-accent" />
            Concept Projects & Prototypes
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conceptProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <NeonCard 
                  className="p-6 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(150_100%_45%_/_0.15)]"
                  variant="accent"
                >
                  {/* Mini Header */}
                  <div
                    className={`h-20 rounded-lg mb-4 bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-border/30`}
                  >
                    <span className="text-lg font-mono font-bold text-foreground/60">
                      {project.title.split(" ").map((w) => w[0]).join("")}
                    </span>
                  </div>

                  <h4 className="text-lg font-mono font-bold text-foreground mb-2">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
