import { motion } from "framer-motion";
import { MapPin, Calendar, Sparkles, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-muted/20">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-gradient">The Developer</span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left - Info Cards */}
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Age</span>
                  </div>
                  <p className="font-mono font-bold text-foreground">18 Years</p>
                </div>

                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">Location</span>
                  </div>
                  <p className="font-mono font-bold text-foreground">Bihar, India</p>
                  <p className="text-xs text-muted-foreground mt-1">851101</p>
                </div>

                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Focus</span>
                  </div>
                  <p className="font-mono font-bold text-foreground">AI + Web Dev</p>
                </div>
              </div>

              {/* Right - Bio */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-mono font-bold text-foreground">
                    Hi, I'm Ujjwal
                  </h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm an 18-year-old developer from Bihar, India, passionate about
                    the intersection of <span className="text-primary font-semibold">artificial intelligence</span> and{" "}
                    <span className="text-accent font-semibold">web development</span>.
                  </p>

                  <p>
                    What started as curiosity about how websites work has evolved into a
                    mission: leveraging cutting-edge AI models to revolutionize how digital
                    experiences are created. I believe AI isn't just a tool—it's a
                    collaborator that amplifies creativity and accelerates delivery.
                  </p>

                  <p>
                    My approach combines the precision of traditional coding with the
                    intelligence of modern AI systems. This means clients get{" "}
                    <span className="text-secondary font-semibold">high-quality, production-ready websites</span>{" "}
                    in a fraction of the traditional timeline, without sacrificing
                    customization or attention to detail.
                  </p>

                  <p>
                    When I'm not coding, I'm exploring new AI models, studying design
                    patterns, and finding ways to push the boundaries of what's possible
                    on the web.
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-6 p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <p className="text-foreground italic font-mono text-sm">
                    "The future belongs to those who embrace AI not as a replacement,
                    but as an enhancement to human creativity."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
