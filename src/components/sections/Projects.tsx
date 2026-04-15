import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Bot, FileText, Sparkles } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Kontentai",
    subtitle: "AI Content Platform",
    description:
      "An AI-powered content platform with authentication and clean UI. Leverages cutting-edge AI for automated content creation.",
    tags: ["AI-Powered", "No-Code", "Auth"],
    link: "https://kontentai.lovable.app/auth",
    icon: Bot,
    accent: "160 84% 39%",
  },
  {
    title: "RP Bill",
    subtitle: "Billing Web App",
    description:
      "A responsive billing application deployed live. Clean interface for managing bills and invoices efficiently.",
    tags: ["Billing", "Responsive", "Netlify"],
    link: "https://rpbill.netlify.app/",
    icon: FileText,
    accent: "270 60% 55%",
  },
  {
    title: "Invoice Generator",
    subtitle: "Invoice Tool",
    description:
      "A lightweight invoice generation app with a clean frontend. Perfect for freelancers and small businesses.",
    tags: ["Frontend", "Invoice", "Live"],
    link: "https://invoicebill.netlify.app/",
    icon: Sparkles,
    accent: "200 70% 50%",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="group"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative bg-card border border-border/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-border group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
          {/* Hover gradient glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, hsl(${project.accent} / 0.06), transparent 60%)`,
            }}
          />

          <div className="relative z-10 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-mono text-primary tracking-widest uppercase mb-2">
                  Live Project
                </p>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{project.subtitle}</p>
              </div>
              <motion.div
                className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -12 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative bg-background">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">
            02 — Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            Selected <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-4 text-sm">Want something similar?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Let's build together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
