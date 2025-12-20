import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FadeInUp, TextReveal, FadeInScale } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Founder, TechVenture",
    content:
      "Ujjwal transformed our vision into reality with incredible speed. His AI-powered approach delivered a stunning website in half the time we expected. The attention to detail and modern design exceeded our expectations.",
    rating: 5,
    avatar: "AC",
    gradient: "from-primary to-accent",
  },
  {
    name: "Sarah Mitchell",
    role: "CEO, CreativeFlow",
    content:
      "Working with Ujjwal was a game-changer. The AI-enhanced development process meant we could iterate quickly and launch our platform weeks ahead of schedule. Highly recommend for any innovative project.",
    rating: 5,
    avatar: "SM",
    gradient: "from-accent to-secondary",
  },
  {
    name: "David Park",
    role: "Product Manager, InnovateLab",
    content:
      "The combination of cutting-edge AI technology and creative design thinking sets Ujjwal apart. Our e-commerce platform saw a 45% increase in conversions after the redesign. Exceptional work!",
    rating: 5,
    avatar: "DP",
    gradient: "from-secondary to-primary",
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
              <span className="text-gradient">Client Success Stories</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              What clients say about working with AI-powered development
            </p>
          </TextReveal>
        </FadeInUp>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeInScale key={index} delay={index * 0.15}>
              <NeonCard
                className="p-6 h-full flex flex-col"
                variant={index === 0 ? "primary" : index === 1 ? "accent" : "secondary"}
              >
                {/* Quote Icon */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  <Quote className="w-8 h-8 text-primary/40" />
                </motion.div>

                {/* Content */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}
                  >
                    <span className="text-sm font-mono font-bold text-background">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-mono font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </NeonCard>
            </FadeInScale>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
