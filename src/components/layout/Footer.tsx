import SocialIcon3D from "@/components/SocialIcon3D";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 bg-[#000000]">
      <div className="container mx-auto px-4">
        {/* Social Icons Row */}
        <div className="flex justify-center flex-wrap gap-3 mb-6">
          <SocialIcon3D platform="github" href={SOCIAL_LINKS.github} size="sm" />
          <SocialIcon3D platform="linkedin" href={SOCIAL_LINKS.linkedin} size="sm" />
          <SocialIcon3D platform="twitter" href={SOCIAL_LINKS.twitter} size="sm" />
          <SocialIcon3D platform="instagram" href={SOCIAL_LINKS.instagram} size="sm" />
          <SocialIcon3D platform="facebook" href={SOCIAL_LINKS.facebook} size="sm" />
          <SocialIcon3D platform="devto" href={SOCIAL_LINKS.devto} size="sm" />
          <SocialIcon3D platform="reddit" href={SOCIAL_LINKS.reddit} size="sm" />
          <SocialIcon3D platform="tumblr" href={SOCIAL_LINKS.tumblr} size="sm" />
          <SocialIcon3D platform="quora" href={SOCIAL_LINKS.quora} size="sm" />
          <SocialIcon3D platform="email" href={`mailto:${SOCIAL_LINKS.email}`} size="sm" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs font-mono text-white/40 tracking-wide">
            © {currentYear} {PERSONAL_INFO.name} · Intermediate DevOps Engineer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;