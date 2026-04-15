import { motion } from "framer-motion";
import { DEVOPS_TOOLS, CORE_SKILLS } from "@/lib/constants";

const levelColors: Record<string, { bg: string; text: string; dot: string }> = {
  intermediate: { bg: "bg-primary/10", text: "text-primary", dot: "bg-primary" },
  learning: { bg: "bg-accent/10", text: "text-accent", dot: "bg-accent" },
  beginner: { bg: "bg-muted", text: "text-muted-foreground", dot: "bg-muted-foreground" },
  upcoming: { bg: "bg-muted/50", text: "text-muted-foreground/60", dot: "bg-muted-foreground/40" },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-background">
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
            03 — Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            Tools & <span className="text-gradient">technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg text-lg">
            Honest progress indicators — no fake mastery claims.
          </p>
        </motion.div>

        {/* Core Skills with Progress */}
        <div className="mb-20">
          <motion.h3
            className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Core Competencies
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {CORE_SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-xs font-mono text-muted-foreground">{skill.progress}%</span>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, hsl(160 84% 39%), hsl(180 70% 45%))`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div>
          <motion.h3
            className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tools & Technologies
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {DEVOPS_TOOLS.map((tool, index) => {
              const level = levelColors[tool.level] || levelColors.beginner;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group cursor-default"
                >
                  <div className="bg-card border border-border/50 rounded-xl p-5 text-center transition-all duration-300 group-hover:border-border group-hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.2)]">
                    {/* Color indicator */}
                    <div
                      className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center text-lg font-bold"
                      style={{
                        backgroundColor: `${tool.color}15`,
                        color: tool.color,
                      }}
                    >
                      {tool.name[0]}
                    </div>
                    <p className="text-sm font-medium text-foreground mb-2">{tool.name}</p>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-mono ${level.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${level.dot}`} />
                      {tool.level.charAt(0).toUpperCase() + tool.level.slice(1)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
