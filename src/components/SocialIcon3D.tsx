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

// Brand colors are kept for hover halo only — the icon itself always uses
// foreground tokens so dark-on-dark icons (GitHub, Tumblr, Dev.to) stay legible.
const platformConfig: Record<Platform, { icon: React.ElementType; label: string }> = {
  github: { icon: Github, label: "GitHub" },
  linkedin: { icon: Linkedin, label: "LinkedIn" },
  twitter: { icon: Twitter, label: "X" },
  email: { icon: Mail, label: "Email" },
  instagram: { icon: Instagram, label: "Instagram" },
  reddit: { icon: MessageCircle, label: "Reddit" },
  tumblr: { icon: BookOpen, label: "Tumblr" },
  quora: { icon: HelpCircle, label: "Quora" },
  devto: { icon: Code2, label: "Dev.to" },
  facebook: { icon: Facebook, label: "Facebook" },
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
