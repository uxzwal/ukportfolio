import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FadeInUp, TextReveal, FadeInScale } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";

const testimonials = [
  {
    name: "Happy Client",
    role: "Startup Founder",
    content:
      "Ujjwal delivered the project quickly with clean UI and smooth deployment. Very professional and easy to work with. Would definitely recommend!",
    rating: 5,
    avatar: "HC",
    gradient: "from-primary to-accent",
  },
  {
    name: "Satisfied Customer",
    role: "Business Owner",
    content:
      "Very responsive, professional, and easy to work with. The final product exceeded my expectations. Great communication throughout the project.",
    rating: 5,
    avatar: "SC",
    gradient: "from-accent to-secondary",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative bg-[hsl(0_0%_2%)]">
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
              Testimonials
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-gradient">What Clients Say</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Feedback from people I've worked with
            </p>
          </TextReveal>
        </FadeInUp>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeInScale key={index} delay={index * 0.15}>
              <NeonCard
                className="p-8 h-full flex flex-col"
                variant={index === 0 ? "primary" : "accent"}
              >
                {/* Quote Icon */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  <Quote className="w-10 h-10 text-primary/40" />
                </motion.div>

                {/* Content */}
                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}
                  >
                    <span className="text-sm font-mono font-bold text-background">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-mono font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </NeonCard>
            </FadeInScale>
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground font-mono">
            More reviews coming as I work with more clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
