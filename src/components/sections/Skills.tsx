import { motion } from "framer-motion";
import { Code, Cpu, Palette, Layers, Terminal, Zap } from "lucide-react";

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
    name: "Logo Design",
    category: "Brand Identity",
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
  {
    icon: Zap,
    name: "Performance Optimization",
    category: "Web Vitals, SEO",
    level: "Advanced",
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="section-padding relative bg-muted/20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A powerful combination of modern development tools and AI capabilities
            to deliver exceptional results.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card p-6 text-center h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(200_100%_50%_/_0.2)] cursor-default">
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
