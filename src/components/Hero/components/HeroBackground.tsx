'use client';

import { motion } from 'motion/react';

// Predefined positions for particles to avoid hydration errors
const particlePositions = [
  { left: '15%', top: '25%' },
  { left: '75%', top: '30%' },
  { left: '45%', top: '65%' },
  { left: '85%', top: '70%' },
  { left: '25%', top: '85%' },
  { left: '60%', top: '12%' }
];

export const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Enhanced Grid Pattern with secondary color (blue) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxZTQwYWYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvc3ZnPg==')]" />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f19]/60 via-transparent to-[#0f0f19]/80"></div>

      {/* Abstract Shapes with Subtle Animations */}
      <motion.div
        className="absolute top-32 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[color:var(--sicofe-purple-light)]/15 to-[color:var(--sicofe-purple-dark)]/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        className="absolute top-1/2 -left-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[color:var(--sicofe-purple)]/15 to-[color:var(--sicofe-purple-dark)]/10 blur-3xl"
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />

      {/* Additional Animated Elements */}
      <motion.div
        className="absolute right-1/4 bottom-40 h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-[color:var(--sicofe-blue)]/10 to-[color:var(--sicofe-blue-dark)]/5 blur-3xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5
        }}
      />

      {/* Particle-like Effects with fixed positions */}
      <div className="absolute inset-0">
        {particlePositions.map((position, index) => (
          <motion.div
            key={index}
            className="absolute h-1 w-1 rounded-full bg-[color:var(--sicofe-purple-light)]"
            style={{
              left: position.left,
              top: position.top
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + (index % 3) * 2,
              repeat: Infinity,
              delay: index * 0.8,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </div>
  );
};
