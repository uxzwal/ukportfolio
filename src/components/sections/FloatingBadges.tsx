import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import DevOpsToolCard from "@/components/DevOpsToolCard";
import { DEVOPS_TOOLS } from "@/lib/constants";

/**
 * Scroll-driven 3D floating DevOps badges.
 * Each badge gets its own parallax depth, rotation and float trajectory
 * driven by the user's scroll position — feels handcrafted, not templated.
 */

interface BadgeProps {
  name: string;
  color: string;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
}

const FloatingBadge = ({ name, color, index, total, scrollProgress }: BadgeProps) => {
  // Deterministic but varied trajectory per badge
  const seed = (index * 9301 + 49297) % 233280;
  const rand = (offset: number) => {
    const v = ((seed + offset * 1373) % 233280) / 233280;
    return v;
  };

  const depth = 0.3 + rand(1) * 0.9; // parallax depth multiplier
  const driftX = (rand(2) - 0.5) * 80; // horizontal drift in px
  const driftY = (rand(3) - 0.5) * 60; // vertical extra drift
  const rotateRange = (rand(4) - 0.5) * 30; // tilt range
  const startRotate = (rand(5) - 0.5) * 20;

  // Map scroll progress to motion. Smooth springs avoid jitter.
  const yRaw = useTransform(scrollProgress, [0, 1], [120 * depth, -120 * depth]);
  const xRaw = useTransform(scrollProgress, [0, 0.5, 1], [0, driftX, 0]);
  const yExtra = useTransform(scrollProgress, [0, 0.5, 1], [0, driftY, 0]);
  const rotate = useTransform(scrollProgress, [0, 1], [startRotate, startRotate + rotateRange]);
  const scale = useTransform(
    scrollProgress,
    [0, 0.15, 0.85, 1],
    [0.85, 1, 1, 0.92]
  );
  const opacity = useTransform(
    scrollProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0.4]
  );

  // Spring smoothing
  const springConfig = { stiffness: 80, damping: 20, mass: 0.4 };
  const ySpring = useSpring(yRaw, springConfig);
  const xSpring = useSpring(xRaw, springConfig);
  const yExtraSpring = useSpring(yExtra, springConfig);
  const rotateSpring = useSpring(rotate, springConfig);

  // Combine y values using a transform
  const y = useTransform([ySpring, yExtraSpring], ([a, b]) => (a as number) + (b as number));

  return (
    <motion.div
      style={{
        x: xSpring,
        y,
        rotate: rotateSpring,
        scale,
        opacity,
        zIndex: Math.round(depth * 10),
      }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        {/* Soft color halo */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl blur-2xl"
          style={{
            background: `radial-gradient(circle at center, ${color}55, transparent 70%)`,
            transform: "scale(1.4)",
          }}
        />
        <div className="relative">
          <DevOpsToolCard name={name} color={color} />
        </div>
      </div>
      <span className="mt-3 text-xs font-mono text-foreground/70 tracking-wide">
        {name}
      </span>
    </motion.div>
  );
};

const FloatingBadges = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth global scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 18,
    mass: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      id="badges"
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Subtle background depth */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.06), transparent 70%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <FadeInUp className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
              Toolchain in Motion
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              The <span className="text-gradient">Stack I Live In</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Scroll through the tools shaping how I think about systems —
              each badge floats with its own depth, like a real workshop wall.
            </p>
          </TextReveal>
        </FadeInUp>

        {/* Floating badge grid */}
        <div
          className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-12 md:gap-y-16 max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          {DEVOPS_TOOLS.map((tool, i) => (
            <FloatingBadge
              key={tool.name}
              name={tool.name}
              color={tool.color}
              index={i}
              total={DEVOPS_TOOLS.length}
              scrollProgress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingBadges;
