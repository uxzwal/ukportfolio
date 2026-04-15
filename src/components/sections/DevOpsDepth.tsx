import { motion } from "framer-motion";
import { FadeInUp, TextReveal } from "@/components/ScrollReveal";
import NeonCard from "@/components/NeonCard";

// Animated pipeline flow step
const PipelineStep = ({
  label,
  icon,
  index,
  color,
}: {
  label: string;
  icon: string;
  index: number;
  color: string;
}) => (
  <div className="flex flex-col items-center gap-2">
    <motion.div
      className={`w-14 h-14 rounded-xl border flex items-center justify-center text-xl font-mono font-bold ${color}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
    >
      {icon}
    </motion.div>
    <motion.span
      className="text-xs font-mono text-muted-foreground text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 + 0.1 }}
    >
      {label}
    </motion.span>
  </div>
);

// Animated arrow between steps
const FlowArrow = ({ index }: { index: number }) => (
  <div className="flex items-center justify-center pb-5">
    <motion.div
      className="relative w-10 h-0.5 bg-primary/30 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 + 0.05 }}
    >
      <motion.div
        className="absolute inset-y-0 left-0 bg-primary"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear", repeatDelay: 0.4 }}
        style={{ width: "50%" }}
      />
    </motion.div>
    <motion.svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      className="text-primary/60 -ml-px"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 + 0.1 }}
    >
      <polygon points="0,0 8,4 0,8" fill="currentColor" />
    </motion.svg>
  </div>
);

// Architecture node
const ArchNode = ({
  label,
  sub,
  color,
  index,
}: {
  label: string;
  sub: string;
  color: string;
  index: number;
}) => (
  <motion.div
    className={`px-4 py-3 rounded-lg border text-center ${color}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.4 }}
    whileHover={{ scale: 1.04 }}
  >
    <p className="font-mono font-bold text-sm">{label}</p>
    <p className="font-mono text-xs opacity-70 mt-0.5">{sub}</p>
  </motion.div>
);

// Vertical connector
const VertConnector = ({ index }: { index: number }) => (
  <div className="flex justify-center">
    <motion.div
      className="relative w-0.5 h-8 bg-primary/20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 + 0.05 }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 bg-primary"
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.3 }}
        style={{ height: "40%" }}
      />
    </motion.div>
  </div>
);

// Monitoring metric card
const MetricCard = ({
  label,
  value,
  color,
  index,
}: {
  label: string;
  value: string;
  color: string;
  index: number;
}) => (
  <motion.div
    className={`p-3 rounded-lg border text-center ${color}`}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
  >
    <p className={`font-mono font-bold text-lg`}>{value}</p>
    <p className="font-mono text-xs opacity-70 mt-0.5">{label}</p>
  </motion.div>
);

const DevOpsDepth = () => {
  const cicdSteps = [
    { label: "Code", icon: "</>", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
    { label: "Build", icon: "⚙", color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" },
    { label: "Test", icon: "✓", color: "bg-purple-500/10 border-purple-500/30 text-purple-400" },
    { label: "Deploy", icon: "🚀", color: "bg-green-500/10 border-green-500/30 text-green-400" },
  ];

  const archLayers = [
    { label: "Frontend", sub: "React / Nginx", color: "bg-primary/10 border-primary/30 text-primary" },
    { label: "Backend", sub: "Node / Python API", color: "bg-accent/10 border-accent/30 text-accent" },
    { label: "Database", sub: "PostgreSQL / Redis", color: "bg-secondary/10 border-secondary/30 text-secondary" },
  ];

  const metrics = [
    { label: "CPU / Memory", value: "Metrics", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
    { label: "App & System", value: "Logs", color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" },
    { label: "Thresholds", value: "Alerts", color: "bg-red-500/10 border-red-500/30 text-red-400" },
  ];

  return (
    <section id="systems" className="section-padding relative bg-background">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <TextReveal>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4">
              Infrastructure Thinking
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
              Systems &amp; <span className="text-gradient">Infrastructure Thinking</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              How I think about system design, pipelines, and observability.
              Mental models I apply when building and automating.
            </p>
          </TextReveal>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* 1. CI/CD Pipeline Flow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <NeonCard className="p-6 h-full" variant="primary">
              <div className="mb-6">
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Pipeline</span>
                <h3 className="text-lg font-mono font-bold text-foreground mt-1">
                  CI/CD Flow
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Automated path from code commit to production deployment.
                </p>
              </div>

              {/* Pipeline steps */}
              <div className="flex items-start gap-1">
                {cicdSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-1">
                    <PipelineStep label={step.label} icon={step.icon} index={i} color={step.color} />
                    {i < cicdSteps.length - 1 && <FlowArrow index={i} />}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3 rounded-lg bg-card border border-border/30">
                <p className="text-xs font-mono text-muted-foreground">
                  <span className="text-primary">Tools:</span> GitHub Actions, Jenkins, GitLab CI
                </p>
              </div>
            </NeonCard>
          </motion.div>

          {/* 2. Deployment Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <NeonCard className="p-6 h-full" variant="accent">
              <div className="mb-6">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">Architecture</span>
                <h3 className="text-lg font-mono font-bold text-foreground mt-1">
                  Deployment Layers
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Containerized three-tier architecture with isolated concerns.
                </p>
              </div>

              {/* Architecture layers */}
              <div className="space-y-0">
                {archLayers.map((layer, i) => (
                  <div key={layer.label}>
                    <ArchNode label={layer.label} sub={layer.sub} color={layer.color} index={i} />
                    {i < archLayers.length - 1 && <VertConnector index={i} />}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3 rounded-lg bg-card border border-border/30">
                <p className="text-xs font-mono text-muted-foreground">
                  <span className="text-accent">Stack:</span> Docker, docker-compose, AWS ECS
                </p>
              </div>
            </NeonCard>
          </motion.div>

          {/* 3. Monitoring Concept */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <NeonCard className="p-6 h-full" variant="secondary">
              <div className="mb-6">
                <span className="text-xs font-mono text-secondary uppercase tracking-wider">Observability</span>
                <h3 className="text-lg font-mono font-bold text-foreground mt-1">
                  Monitoring Stack
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Visibility into system health through metrics, logs, and alerts.
                </p>
              </div>

              {/* Monitoring pillars */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {metrics.map((m, i) => (
                  <MetricCard key={m.label} label={m.label} value={m.value} color={m.color} index={i} />
                ))}
              </div>

              {/* Flow line: Metrics → Dashboard */}
              <div className="p-3 rounded-lg bg-card border border-border/30 mb-3">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-xs font-mono text-muted-foreground shrink-0">Flows to:</span>
                  <div className="relative flex-1 h-0.5 bg-border/30 overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-secondary"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                      style={{ width: "40%" }}
                    />
                  </div>
                  <span className="text-xs font-mono text-secondary shrink-0">Dashboard</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-card border border-border/30">
                <p className="text-xs font-mono text-muted-foreground">
                  <span className="text-secondary">Tools:</span> Prometheus, Grafana, Loki
                </p>
              </div>
            </NeonCard>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <NeonCard className="max-w-2xl mx-auto p-5" variant="primary">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-primary font-bold">System Thinking:</span> These are mental models I actively study and apply.
              I believe understanding how systems fail is as important as knowing how to build them.
            </p>
          </NeonCard>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsDepth;
