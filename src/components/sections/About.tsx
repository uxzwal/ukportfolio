import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";

const About = () => {
  const stats = [
    { label: "Focus Area", value: "DevOps & Cloud" },
    { label: "Education", value: "BCA (2025–2028)" },
    { label: "Approach", value: "Fundamentals First" },
  ];

  return (
    <section id="about" className="section-padding relative bg-background overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">
            01 — About
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Heading */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Building with{" "}
              <span className="text-gradient">purpose</span>,
              <br />
              not just{" "}
              <span className="text-gradient">projects</span>
            </h2>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm {PERSONAL_INFO.name}, an aspiring DevOps Engineer focused on building 
              a solid foundation in Linux, Cloud Computing, and Container technologies. 
              My approach is simple — understand concepts deeply before moving to advanced tools.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in honest progress over impressive-sounding but shallow knowledge. 
              Every skill I claim is backed by hands-on practice, not just tutorials watched.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently learning Docker, AWS, and CI/CD pipelines while strengthening my 
              Linux fundamentals. I'm looking for internships and entry-level roles where 
              I can grow and contribute meaningfully.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-20 bg-border rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-mono tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
