import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send, Instagram, MessageCircle } from "lucide-react";

type Platform = "github" | "linkedin" | "twitter" | "email" | "telegram" | "discord" | "instagram";

interface SocialIcon3DProps {
  platform: Platform;
  href: string;
  size?: "sm" | "md" | "lg";
}

const platformConfig: Record<Platform, { icon: React.ElementType; color: string; label: string }> = {
  github: { icon: Github, color: "#ffffff", label: "GitHub" },
  linkedin: { icon: Linkedin, color: "#0A66C2", label: "LinkedIn" },
  twitter: { icon: Twitter, color: "#1DA1F2", label: "Twitter" },
  email: { icon: Mail, color: "#EA4335", label: "Email" },
  telegram: { icon: Send, color: "#0088cc", label: "Telegram" },
  discord: { icon: MessageCircle, color: "#5865F2", label: "Discord" },
  instagram: { icon: Instagram, color: "#E4405F", label: "Instagram" },
};

const SocialIcon3D = ({ platform, href, size = "md" }: SocialIcon3DProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const config = platformConfig[platform];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <motion.a
      href={href}
      target={platform === "email" ? undefined : "_blank"}
      rel={platform === "email" ? undefined : "noopener noreferrer"}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={config.label}
    >
      <motion.div
        className={`social-icon-3d ${sizeClasses[size]} rounded-xl bg-card border border-border/50 flex items-center justify-center`}
        animate={{
          rotateX: isHovered ? 10 : 0,
          rotateY: isHovered ? -10 : 0,
          borderColor: isHovered ? config.color : undefined,
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
            scale: isHovered ? 1.3 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle, ${config.color}40, transparent 70%)`,
            filter: "blur(15px)",
          }}
        />
        
        {/* Icon */}
        <motion.div
          className={iconSizes[size]}
          animate={{
            color: isHovered ? config.color : "hsl(var(--muted-foreground))",
            rotateZ: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-full h-full" />
        </motion.div>
      </motion.div>
      
      {/* Label tooltip */}
      <motion.span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground whitespace-nowrap"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
        transition={{ duration: 0.2 }}
      >
        {config.label}
      </motion.span>
    </motion.a>
  );
};

export { type SocialIcon3DProps };
export default SocialIcon3D;
