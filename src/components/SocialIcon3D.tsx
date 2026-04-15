import { motion } from "framer-motion";
import { 
  Github, Linkedin, Twitter, Mail, Instagram, 
  Facebook, MessageCircle, BookOpen, HelpCircle, Code2 
} from "lucide-react";

type Platform = 
  | "github" | "linkedin" | "twitter" | "email" 
  | "instagram" | "reddit" | "tumblr" | "quora" 
  | "devto" | "facebook";

interface SocialIcon3DProps {
  platform: Platform;
  href: string;
  size?: "sm" | "md" | "lg";
}

const platformConfig: Record<Platform, { icon: React.ElementType; color: string; label: string }> = {
  github: { icon: Github, color: "var(--foreground)", label: "GitHub" },
  linkedin: { icon: Linkedin, color: "#0A66C2", label: "LinkedIn" },
  twitter: { icon: Twitter, color: "#1DA1F2", label: "X" },
  email: { icon: Mail, color: "#EA4335", label: "Email" },
  instagram: { icon: Instagram, color: "#E4405F", label: "Instagram" },
  reddit: { icon: MessageCircle, color: "#FF4500", label: "Reddit" },
  tumblr: { icon: BookOpen, color: "#36465D", label: "Tumblr" },
  quora: { icon: HelpCircle, color: "#B92B27", label: "Quora" },
  devto: { icon: Code2, color: "var(--foreground)", label: "Dev.to" },
  facebook: { icon: Facebook, color: "#1877F2", label: "Facebook" },
};

const SocialIcon3D = ({ platform, href, size = "md" }: SocialIcon3DProps) => {
  const config = platformConfig[platform];
  const Icon = config.icon;

  const sizeClasses = { sm: "w-9 h-9", md: "w-10 h-10", lg: "w-12 h-12" };
  const iconSizes = { sm: "w-4 h-4", md: "w-4.5 h-4.5", lg: "w-5 h-5" };

  return (
    <motion.a
      href={href}
      target={platform === "email" ? undefined : "_blank"}
      rel={platform === "email" ? undefined : "noopener noreferrer"}
      className={`${sizeClasses[size]} rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200`}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={config.label}
    >
      <Icon className={iconSizes[size]} strokeWidth={1.5} />
    </motion.a>
  );
};

export { type SocialIcon3DProps, type Platform };
export default SocialIcon3D;
