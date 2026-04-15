import { motion } from "framer-motion";
import { ROADMAP_LEVELS } from "@/lib/constants";

const statusStyles: Record<string, { color: string; label: string }> = {
  learning: { color: "hsl(160 84% 39%)", label: "Learning" },
  intermediate: { color: "hsl(270 60% 55%)", label: "Intermediate" },
  beginner: { color: "hsl(200 70% 50%)", label: "Beginner" },
  upcoming: { color: "hsl(0 0% 45%)", label: "Upcoming" },
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative bg-background overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">
            04 — Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            DevOps <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg text-lg">
            A structured path from fundamentals to advanced practices.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          <div className="space-y-12">
            {ROADMAP_LEVELS.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline node */}
                <motion.div
                  className="absolute left-3 md:left-5 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                  style={{
                    borderColor: statusStyles[level.status]?.color || "hsl(0 0% 45%)",
                    color: statusStyles[level.status]?.color || "hsl(0 0% 45%)",
                    backgroundColor: `color-mix(in srgb, ${statusStyles[level.status]?.color || "gray"} 10%, transparent)`,
                  }}
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {level.level}
                </motion.div>

                {/* Content */}
                <div className="bg-card border border-border/50 rounded-2xl p-6 hover:border-border transition-all duration-300">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {level.title}
                    </h3>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${statusStyles[level.status]?.color || "gray"} 15%, transparent)`,
                        color: statusStyles[level.status]?.color || "gray",
                      }}
                    >
                      {statusStyles[level.status]?.label}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{level.description}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {level.topics.map((topic) => {
                      const style = statusStyles[topic.status];
                      return (
                        <motion.span
                          key={topic.name}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground font-mono"
                          whileHover={{ scale: 1.03 }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: style?.color || "gray" }}
                          />
                          {topic.name}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
