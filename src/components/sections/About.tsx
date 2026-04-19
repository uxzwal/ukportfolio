import { motion } from "framer-motion";
import { Terminal, BookOpen, Target, Lightbulb, GraduationCap, Server } from "lucide-react";
import { FadeInUp, SlideInLeft, SlideInRight, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";
import SocialIcon3D from "@/components/SocialIcon3D";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Current Focus",
      description: "Docker, AWS, CI/CD pipelines",
      color: "accent",
    },
    {
      icon: Target,
      title: "Goal",
      description: "Internships & entry-level DevOps roles",
      color: "secondary",
    },
  ];

  const strengths = [
    { icon: Lightbulb, text: "Systems thinking — how things connect" },
    { icon: BookOpen, text: "Self-directed learning from documentation" },
    { icon: Target, text: "Consistency — building habits over sprints" },
  ];

  return (
    <section id="about" className="section-padding relative bg-background">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <FadeInUp className="text-center mb-12">
            <TextReveal>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
                About Me
              </span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
                <span className="text-gradient">{PERSONAL_INFO.name}</span>
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-xl text-muted-foreground font-mono">
                Intermediate DevOps Engineer
              </p>
            </TextReveal>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <NeonCard className="p-8 h-full" variant="primary">
                <SlideInRight className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-mono font-bold text-foreground">
                        My Story
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">
                        Fundamentals First Approach
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      I'm <span className="text-foreground font-semibold">Ujjwal Kumar</span>, a DevOps-focused developer building strong foundations in{" "}
                      <span className="text-devops-linux font-semibold">Linux</span>,{" "}
                      <span className="text-devops-aws font-semibold">Cloud</span>, and{" "}
                      <span className="text-devops-docker font-semibold">containerized systems</span>.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      I focus on understanding systems deeply and applying them through practical projects.
                      My learning philosophy centers around grasping core concepts before reaching for
                      advanced tooling — fundamentals over flashy keywords.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      Currently working toward my first internship or entry-level DevOps role,
                      where I can contribute real value while continuing to grow.
                    </motion.p>
                  </div>
                </SlideInRight>

                {/* Education */}
                <motion.div
                  className="p-4 rounded-lg bg-card border border-border/30 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-mono font-bold text-foreground">Education</p>
                      <p className="text-sm text-muted-foreground">
                        BCA ({PERSONAL_INFO.education.replace("BCA (", "").replace(")", "")})
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Strengths */}
                <div className="space-y-3">
                  <p className="font-mono text-sm text-muted-foreground mb-2">Core Traits:</p>
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <strength.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm text-foreground font-mono">{strength.text}</span>
                    </motion.div>
                  ))}
                </div>
              </NeonCard>
            </motion.div>

            {/* Right Column - Highlights & Socials */}
            <div className="space-y-6">
              {/* Highlights Grid */}
              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <SlideInLeft key={index} delay={0.1 * (index + 1)}>
                    <NeonCard className="p-5" variant={item.color as "primary" | "accent" | "secondary"}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-${item.color}/10 flex items-center justify-center shrink-0`}>
                          <item.icon className={`w-6 h-6 text-${item.color}`} />
                        </div>
                        <div>
                          <p className="font-mono font-bold text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </NeonCard>
                  </SlideInLeft>
                ))}
              </div>

              {/* Interests */}
              <NeonCard className="p-6" variant="accent">
                <h4 className="font-mono font-bold text-foreground mb-4">Areas of Interest</h4>
                <div className="flex flex-wrap gap-2">
                  {["DevOps Culture", "Cloud Infrastructure", "Automation", "Open Source", "Linux", "Infrastructure as Code", "Observability"].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </NeonCard>

              {/* Social Links */}
              <NeonCard className="p-6" variant="secondary">
                <h4 className="font-mono font-bold text-foreground mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-3">
                  <SocialIcon3D platform="github" href={SOCIAL_LINKS.github} />
                  <SocialIcon3D platform="linkedin" href={SOCIAL_LINKS.linkedin} />
                  <SocialIcon3D platform="twitter" href={SOCIAL_LINKS.twitter} />
                  <SocialIcon3D platform="email" href={`mailto:${SOCIAL_LINKS.email}`} />
                </div>
              </NeonCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
