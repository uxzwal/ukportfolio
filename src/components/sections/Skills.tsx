import { motion } from "framer-motion";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";
import DevOpsToolCard from "@/components/DevOpsToolCard";
import { DEVOPS_TOOLS, CORE_SKILLS } from "@/lib/constants";

const getLevelBadge = (level: string) => {
  const badges = {
    intermediate: { text: "Intermediate", class: "bg-green-500/20 text-green-400 border-green-500/30" },
    learning: { text: "Learning", class: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    beginner: { text: "Beginner", class: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
    upcoming: { text: "Upcoming", class: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
  };
  return badges[level as keyof typeof badges] || badges.beginner;
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-background">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-1 rounded-full bg-devops-docker/10 border border-devops-docker/30 text-devops-docker text-sm font-mono mb-4">
              Skills & Tools
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-gradient">DevOps Toolkit</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Technologies I'm learning on my DevOps journey. 
              Honest progress indicators — no fake mastery claims.
            </p>
          </TextReveal>
        </FadeInUp>

        {/* Core Skills with Progress */}
        <div className="mb-16">
          <motion.h3
            className="text-xl font-mono font-bold text-foreground text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Core Competencies
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {CORE_SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <NeonCard className="p-4" variant="primary">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Grid with 3D Cards */}
        <div>
          <motion.h3
            className="text-xl font-mono font-bold text-foreground text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tools & Technologies
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {DEVOPS_TOOLS.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <DevOpsToolCard name={tool.name} color={tool.color} />
                <div className="mt-3 text-center">
                  <span className="font-mono text-sm text-foreground block mb-1">{tool.name}</span>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-mono border ${getLevelBadge(tool.level).class}`}>
                    {getLevelBadge(tool.level).text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <NeonCard className="max-w-2xl mx-auto p-6" variant="accent">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-primary font-bold">📚 Note:</span> These progress indicators reflect my honest learning stage. 
              I believe in transparency over inflated claims.
            </p>
          </NeonCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
