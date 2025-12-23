import { motion } from "framer-motion";
import { Bot, Palette, Rocket, Sparkles, Github, Linkedin } from "lucide-react";
import { FadeInUp, SlideInLeft, SlideInRight, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [
    {
      icon: Bot,
      title: "AI Web Apps",
      description: "Chatbots, dashboards & tools",
      color: "primary",
    },
    {
      icon: Palette,
      title: "Frontend UI",
      description: "Clean, responsive interfaces",
      color: "accent",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "GitHub → Netlify live setup",
      color: "secondary",
    },
  ];

  return (
    <section id="about" className="section-padding relative bg-[hsl(0_0%_1%)]">
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <FadeInUp className="text-center mb-12">
            <TextReveal>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
                About Me
              </span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
                <span className="text-gradient">Ujjwal Kashyup</span>
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-xl text-muted-foreground font-mono">
                No-Code & AI Web App Developer
              </p>
            </TextReveal>
          </FadeInUp>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <NeonCard className="p-8 md:p-12" variant="primary">
              {/* Bio */}
              <SlideInRight className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-mono font-bold text-foreground">
                    Hi, I'm Ujjwal
                  </h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg"
                  >
                    I specialize in building <span className="text-primary font-semibold">modern web apps</span>,{" "}
                    <span className="text-accent font-semibold">landing pages</span>, and{" "}
                    <span className="text-secondary font-semibold">SaaS MVPs</span> using no-code platforms and AI tools.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    I also handle complete deployment using GitHub and Netlify — so clients get a fully live, 
                    production-ready product delivered fast.
                  </motion.p>
                </div>
              </SlideInRight>

              {/* Highlights Grid */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <SlideInLeft key={index} delay={0.1 * (index + 1)}>
                    <div className="p-4 rounded-lg bg-[hsl(0_0%_3%)] border border-border/30 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center`}>
                          <item.icon className={`w-5 h-5 text-${item.color}`} />
                        </div>
                      </div>
                      <p className="font-mono font-bold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </SlideInLeft>
                ))}
              </div>

              {/* Social Links */}
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Button variant="outline-glow" size="sm" asChild>
                  <a 
                    href="https://github.com/Youjjwal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline-glow" size="sm" asChild>
                  <a 
                    href="https://linkedin.com/in/youjjwal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </NeonCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
