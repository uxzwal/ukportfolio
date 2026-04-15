import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Cloud, GitBranch } from "lucide-react";
import { useState, useEffect } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import SocialIcon3D from "@/components/SocialIcon3D";

const taglines = ["Linux", "Docker", "AWS", "Kubernetes", "CI/CD", "Terraform"];

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [terminalLine, setTerminalLine] = useState("");
  const terminalText = "$ whoami → Intermediate DevOps Engineer";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= terminalText.length) {
        setTerminalLine(terminalText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Terminal Elements */}
      <motion.div
        className="absolute top-1/4 left-[10%] hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-48 h-32 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm p-3 font-mono text-xs">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="text-muted-foreground">
            <span className="text-devops-docker">$</span> docker build -t app .
          </div>
          <div className="text-green-400 mt-1">Successfully built ✓</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-[10%] hidden lg:block"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-44 h-28 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm p-3 font-mono text-xs">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="text-muted-foreground">
            <span className="text-devops-aws">$</span> kubectl get pods
          </div>
          <div className="text-devops-kubernetes mt-1">Running 3/3</div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal intro line */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Terminal className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm font-mono text-primary">
              {terminalLine}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-3.5 bg-primary align-middle ml-0.5"
              />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h2
            className="text-2xl md:text-3xl font-mono font-medium text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm <span className="text-foreground font-bold">{PERSONAL_INFO.name}</span>
          </motion.h2>

          {/* Main Headline */}
          <motion.h1 
            className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-gradient">Intermediate DevOps Engineer</span>
            <br />
            <span className="text-foreground text-xl sm:text-2xl md:text-3xl font-normal mt-2 block">
              building scalable, automated, and reliable systems
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-sm sm:text-base text-muted-foreground font-mono max-w-xl mx-auto mb-6 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            "{PERSONAL_INFO.tagline}"
          </motion.p>

          {/* Animated Tech Stack */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-muted-foreground font-mono">Currently working with:</span>
            <span className="relative inline-block min-w-[120px] h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTagline}
                  className="absolute left-0 right-0 text-primary font-mono font-bold text-xl"
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {taglines[currentTagline]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-mono text-green-400">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <SocialIcon3D platform="github" href={SOCIAL_LINKS.github} size="sm" />
            <SocialIcon3D platform="linkedin" href={SOCIAL_LINKS.linkedin} size="sm" />
            <SocialIcon3D platform="twitter" href={SOCIAL_LINKS.twitter} size="sm" />
            <SocialIcon3D platform="instagram" href={SOCIAL_LINKS.instagram} size="sm" />
            <SocialIcon3D platform="devto" href={SOCIAL_LINKS.devto} size="sm" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#systems">
                <GitBranch className="w-5 h-5" />
                View Systems Thinking
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline-glow" size="lg" asChild>
              <a href="#skills">
                <Cloud className="w-4 h-4 mr-2" />
                Skills & Tools
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {[
              { value: "Linux", label: "Foundation", color: "text-devops-linux" },
              { value: "Cloud", label: "AWS + Docker", color: "text-devops-aws" },
              { value: "CI/CD", label: "Automation", color: "text-devops-docker" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;