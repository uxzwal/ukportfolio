import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Sparkles } from "lucide-react";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import { ROADMAP_LEVELS } from "@/lib/constants";

const statusConfig = {
  learning: { icon: Sparkles, color: "text-primary", bg: "bg-primary/20", label: "Currently Learning" },
  intermediate: { icon: CheckCircle2, color: "text-accent", bg: "bg-accent/20", label: "Intermediate" },
  beginner: { icon: Circle, color: "text-secondary", bg: "bg-secondary/20", label: "Beginner" },
  upcoming: { icon: Clock, color: "text-muted-foreground", bg: "bg-muted", label: "Upcoming" },
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-4">
              My Learning Journey
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              DevOps <span className="text-gradient">Roadmap</span>
            </h2>
          </TextReveal>
          <FadeInUp delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured learning path from fundamentals to advanced DevOps practices.
              Each level clearly indicates my current learning stage.
            </p>
          </FadeInUp>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - visible on md and up */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary -translate-x-1/2" />

          {/* Levels */}
          <div className="space-y-12 md:space-y-24">
            {ROADMAP_LEVELS.map((level, index) => {
              const isLeft = index % 2 === 0;
              const StatusIcon = statusConfig[level.status]?.icon || Circle;
              
              return (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      className="timeline-node text-white"
                      whileHover={{ scale: 1.1 }}
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {level.level}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group">
                      {/* Mobile Level Badge */}
                      <div className="md:hidden flex items-center gap-2 mb-4">
                        <div className="timeline-node w-10 h-10 text-sm text-white">
                          {level.level}
                        </div>
                        <span className="font-mono text-muted-foreground">Level {level.level}</span>
                      </div>

                      {/* Level Title */}
                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                        <h3 className="text-xl md:text-2xl font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                          {level.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4">{level.description}</p>

                      {/* Topics */}
                      <div className="space-y-2">
                        {level.topics.map((topic, topicIndex) => {
                          const TopicIcon = statusConfig[topic.status]?.icon || Circle;
                          return (
                            <motion.div
                              key={topic.name}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * topicIndex }}
                              className={`flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}
                            >
                              <TopicIcon className={`w-4 h-4 ${statusConfig[topic.status]?.color}`} />
                              <span className="text-sm text-foreground/80">{topic.name}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${statusConfig[topic.status]?.bg} ${statusConfig[topic.status]?.color}`}>
                                {statusConfig[topic.status]?.label}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;