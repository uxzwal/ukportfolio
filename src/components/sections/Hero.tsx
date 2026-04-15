import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import SocialIcon3D from "@/components/SocialIcon3D";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLElement>(null);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const gradientX = useTransform(springX, [0, 1], [30, 70]);
  const gradientY = useTransform(springY, [0, 1], [30, 70]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Stagger reveal for text lines
  const lineVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Ambient gradient mesh - moves with cursor */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) =>
              `radial-gradient(ellipse 60% 50% at ${x}% ${y}%, hsl(160 84% 39% / 0.15), transparent 70%),
               radial-gradient(ellipse 40% 60% at ${100 - (x as number)}% ${100 - (y as number)}%, hsl(270 60% 55% / 0.1), transparent 60%)`
          ),
        }}
      />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-40 dark:opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="space-y-8">
          {/* Pre-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h2
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-muted-foreground font-light tracking-wide"
          >
            {PERSONAL_INFO.name}
          </motion.h2>

          {/* Main headline */}
          <div className="space-y-2">
            <motion.h1
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Full Stack Developer
            </motion.h1>
            <motion.h1
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              crafting{" "}
              <span className="text-gradient">immersive</span>,
            </motion.h1>
            <motion.h1
              custom={3}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              high-performance{" "}
              <span className="text-gradient">web experiences</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            custom={4}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            I am an intermediate DevOps learner focused on Linux, Cloud, 
            Containers, CI/CD, and Infrastructure as Code — building real 
            skills through hands-on practice.
          </motion.p>

          {/* CTA + Socials row */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            custom={5}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_84%_39%_/_0.3)] hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-medium text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            className="flex items-center gap-3 pt-4"
            custom={6}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          >
            <SocialIcon3D platform="github" href={SOCIAL_LINKS.github} size="sm" />
            <SocialIcon3D platform="linkedin" href={SOCIAL_LINKS.linkedin} size="sm" />
            <SocialIcon3D platform="twitter" href={SOCIAL_LINKS.twitter} size="sm" />
            <SocialIcon3D platform="devto" href={SOCIAL_LINKS.devto} size="sm" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1.5"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1.5 bg-muted-foreground/50 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
