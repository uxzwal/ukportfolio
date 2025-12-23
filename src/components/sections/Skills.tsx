import { motion } from "framer-motion";
import { Code, Bot, Palette, Rocket, Github } from "lucide-react";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";

const skills = [
  {
    icon: Code,
    name: "No-Code Development",
    description: "Building apps without traditional coding",
    color: "primary",
  },
  {
    icon: Bot,
    name: "AI Integration",
    description: "Implementing AI tools & chatbots",
    color: "accent",
  },
  {
    icon: Palette,
    name: "Frontend UI/UX",
    description: "Clean, responsive interfaces",
    color: "secondary",
  },
  {
    icon: Rocket,
    name: "Web App Deployment",
    description: "Live hosting & production setup",
    color: "primary",
  },
  {
    icon: Github,
    name: "GitHub & Netlify",
    description: "Version control & deployment",
    color: "accent",
  },
];

const Skills = () => {
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
              <span className="text-gradient">What I Do Best</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Focused skills for delivering complete web solutions.
            </p>
          </TextReveal>
        </FadeInUp>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
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
                className="p-6 text-center h-full transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(200_100%_50%_/_0.15)] hover:-translate-y-2"
                variant={skill.color as "primary" | "accent" | "secondary"}
              >
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-${skill.color}/10 border border-${skill.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <skill.icon className={`w-7 h-7 text-${skill.color}`} />
                </div>

                {/* Name */}
                <h3 className="font-mono font-semibold text-sm mb-2 text-foreground">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">+</span> Always learning new tools to deliver better results
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
