import { motion } from "framer-motion";
import { useState } from "react";

interface DevOpsToolCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: "learning" | "beginner" | "intermediate";
  delay?: number;
}

const DevOpsToolCard = ({ name, icon, color, level, delay = 0 }: DevOpsToolCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const levelLabels = {
    learning: "Learning",
    beginner: "Beginner",
    intermediate: "Intermediate"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="perspective-1000"
    >
      <motion.div
        className="tool-card-3d cursor-pointer group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
        }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(circle at center, ${color}30, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
        
        {/* Icon container */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-300"
            style={{ 
              backgroundColor: `${color}15`,
              color: color,
              boxShadow: `0 0 0 1px ${color}30`,
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: `0 0 30px ${color}50`,
            }}
          >
            {icon}
          </motion.div>
          
          <div className="text-center">
            <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <span className={`level-badge ${level} mt-2`}>
              {levelLabels[level]}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DevOpsToolCard;