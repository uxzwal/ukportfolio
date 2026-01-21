import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Send, 
  Instagram, 
  MessageCircle,
  BookOpen,
  Facebook,
  HelpCircle,
  Code2
} from "lucide-react";

type Platform = 
  | "github" 
  | "linkedin" 
  | "twitter" 
  | "email" 
  | "telegram" 
  | "discord" 
  | "instagram"
  | "medium"
  | "reddit"
  | "tumblr"
  | "quora"
  | "devto"
  | "facebook";

interface SocialIcon3DProps {
  platform: Platform;
  href: string;
  size?: "sm" | "md" | "lg";
}

const platformConfig: Record<Platform, { icon: React.ElementType; color: string; label: string }> = {
  github: { icon: Github, color: "#ffffff", label: "GitHub" },
  linkedin: { icon: Linkedin, color: "#0A66C2", label: "LinkedIn" },
  twitter: { icon: Twitter, color: "#1DA1F2", label: "X (Twitter)" },
  email: { icon: Mail, color: "#EA4335", label: "Email" },
  telegram: { icon: Send, color: "#0088cc", label: "Telegram" },
  discord: { icon: MessageCircle, color: "#5865F2", label: "Discord" },
  instagram: { icon: Instagram, color: "#E4405F", label: "Instagram" },
  medium: { icon: BookOpen, color: "#00ab6c", label: "Medium" },
  reddit: { icon: MessageCircle, color: "#FF4500", label: "Reddit" },
  tumblr: { icon: BookOpen, color: "#36465D", label: "Tumblr" },
  quora: { icon: HelpCircle, color: "#B92B27", label: "Quora" },
  devto: { icon: Code2, color: "#0A0A0A", label: "Dev.to" },
  facebook: { icon: Facebook, color: "#1877F2", label: "Facebook" },
};

const SocialIcon3D = ({ platform, href, size = "md" }: SocialIcon3DProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);
  
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  };

  return (
    <motion.a
      ref={cardRef}
      href={href}
      target={platform === "email" ? undefined : "_blank"}
      rel={platform === "email" ? undefined : "noopener noreferrer"}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={config.label}
    >
      <motion.div
        className={`${sizeClasses[size]} rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center backdrop-blur-sm`}
        animate={{
          rotateX: isHovered ? mousePos.y * -15 : 0,
          rotateY: isHovered ? mousePos.x * 15 : 0,
          borderColor: isHovered ? `${config.color}60` : "rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Animated glow ring */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at center, ${config.color}30, transparent 70%)`,
            filter: "blur(12px)",
          }}
        />

        {/* Breathing animation when idle */}
        <motion.div
          className={`${iconSizes[size]} relative z-10`}
          animate={{
            color: isHovered ? config.color : "rgba(255,255,255,0.6)",
            scale: isHovered ? 1.1 : [1, 1.05, 1],
            rotateZ: isHovered ? mousePos.x * 8 : 0,
          }}
          transition={{
            color: { duration: 0.2 },
            scale: isHovered 
              ? { duration: 0.2 } 
              : { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 0.2 },
          }}
        >
          <Icon className="w-full h-full" strokeWidth={1.5} />
        </motion.div>

        {/* Inner highlight */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          style={{
            background: `linear-gradient(135deg, ${config.color}40 0%, transparent 50%)`,
          }}
        />
      </motion.div>
      
      {/* Tooltip */}
      <motion.span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/50 whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
        transition={{ duration: 0.2 }}
      >
        {config.label}
      </motion.span>
    </motion.a>
  );
};

export { type SocialIcon3DProps, type Platform };
export default SocialIcon3D;