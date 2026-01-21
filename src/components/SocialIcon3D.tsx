import { motion } from "framer-motion";
import { useState } from "react";

interface SocialIcon3DProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const SocialIcon3D = ({ href, icon, label, color }: SocialIcon3DProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <motion.div
        className="social-icon-3d"
        animate={{
          rotateX: isHovered ? 10 : 0,
          rotateY: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl -z-10"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle, ${color}40, transparent 70%)`,
            filter: "blur(15px)",
          }}
        />
        
        {/* Icon */}
        <motion.div
          className="text-muted-foreground transition-colors duration-300"
          animate={{
            color: isHovered ? color : undefined,
            rotateZ: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      </motion.div>
      
      {/* Label tooltip */}
      <motion.span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground whitespace-nowrap"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </motion.a>
  );
};

export default SocialIcon3D;