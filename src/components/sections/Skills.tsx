import { motion } from "framer-motion";
import { Code, Cpu, Palette, Layers, Terminal, Zap, Video, Scissors } from "lucide-react";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";

const skills = [
  {
    icon: Terminal,
    name: "VS Code",
    category: "Development Environment",
    level: "Expert",
  },
  {
    icon: Cpu,
    name: "AI Models & APIs",
    category: "GPT-4, Claude, Gemini",
    level: "Advanced",
  },
  {
    icon: Palette,
    name: "Canva",
    category: "Graphic Design",
    level: "Proficient",
  },
  {
    icon: Palette,
    name: "Adobe Photoshop",
    category: "Photo Editing",
    level: "Proficient",
  },
  {
    icon: Video,
    name: "CapCut",
    category: "Video Editing",
    level: "Proficient",
  },
  {
    icon: Scissors,
    name: "Filmora",
    category: "Video Production",
    level: "Proficient",
  },
  {
    icon: Layers,
    name: "Full Stack Development",
    category: "React, Node.js, TypeScript",
    level: "Expert",
  },
  {
    icon: Code,
    name: "Frontend Frameworks",
    category: "React, Next.js, Tailwind",
    level: "Expert",
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <section id="skills" className="section-padding relative bg-[hsl(0_0%_1%)]">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono mb-4">
              Skills
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-gradient">Technical Expertise</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A powerful combination of modern development tools, design software, and AI capabilities
              to deliver exceptional results.
            </p>
          </TextReveal>
        </FadeInUp>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <NeonCard 
                className="p-6 text-center h-full transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(200_100%_50%_/_0.15)]"
                variant={index % 3 === 0 ? "primary" : index % 3 === 1 ? "accent" : "secondary"}
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Name */}
                <h3 className="font-mono font-semibold text-sm mb-1 text-foreground">
                  {skill.name}
                </h3>

                {/* Category */}
                <p className="text-xs text-muted-foreground mb-2">
                  {skill.category}
                </p>

                {/* Level Badge */}
                <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30 font-mono">
                  {skill.level}
                </span>
              </NeonCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">+</span> Continuously learning and adapting to new AI technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
