import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(0_0%_2%)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_2%)]/80 via-[hsl(0_0%_2%)]/95 to-[hsl(0_0%_2%)]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Animated Geometric Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-45"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-24 h-24 border border-accent/20 rounded-full"
        animate={{ y: [-20, 20, -20], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/5 rounded-lg"
        animate={{ rotate: [0, 180, 360], scale: [1, 0.8, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pre-headline Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">AI-Powered Development</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Building the{" "}
            </motion.span>
            <br />
            <motion.span 
              className="text-gradient inline-block"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Future of the Web
            </motion.span>
            <br />
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Powered by{" "}
            </motion.span>
            <motion.span 
              className="text-primary inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              AI
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            I leverage cutting-edge AI models to deliver high-quality, fully functional 
            websites in record time. Transform your vision into reality with next-gen development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#contact">
                Start Your AI-Powered Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline-glow" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            {[
              { value: "2x", label: "Faster Delivery" },
              { value: "100%", label: "Custom Code" },
              { value: "AI", label: "Powered" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-mono font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
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
