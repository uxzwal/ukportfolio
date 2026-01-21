import { Terminal, Heart } from "lucide-react";
import SocialIcon3D from "@/components/SocialIcon3D";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Roadmap", href: "#roadmap" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 border-t border-border/30 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-mono font-bold text-lg text-foreground block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  Aspiring DevOps Engineer
                </span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Building strong DevOps fundamentals through structured learning. 
              Focused on Linux, Cloud, Containers, and Automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <SocialIcon3D platform="github" href={SOCIAL_LINKS.github} size="sm" />
              <SocialIcon3D platform="linkedin" href={SOCIAL_LINKS.linkedin} size="sm" />
              <SocialIcon3D platform="twitter" href={SOCIAL_LINKS.twitter} size="sm" />
              <SocialIcon3D platform="email" href={`mailto:${SOCIAL_LINKS.email}`} size="sm" />
            </div>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {SOCIAL_LINKS.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500" /> for{" "}
            <span className="text-devops-docker">DevOps</span>,{" "}
            <span className="text-devops-aws">Cloud</span>, and{" "}
            <span className="text-devops-terraform">Automation</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
