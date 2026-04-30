import { motion } from "framer-motion";

/**
 * Brief page-load curtain reveal. Plays once on mount and unmounts itself
 * via pointer-events-none so it never blocks interaction afterwards.
 */
const PageCurtain = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.4, duration: 0.4, ease: "easeOut" }}
    >
      {/* Top panel */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-background"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ delay: 0.9, duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
      />
      {/* Bottom panel */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-background"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ delay: 0.9, duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
      />
      {/* Center mark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.2, times: [0, 0.25, 0.7, 1], ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Initializing
          </div>
          <div className="relative w-32 h-px bg-border overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PageCurtain;
