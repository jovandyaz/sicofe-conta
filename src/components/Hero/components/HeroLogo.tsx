'use client';

import { motion } from 'motion/react';

export const HeroLogo = () => {
  return (
    <div className="relative mx-auto mb-10 w-full max-w-md lg:max-w-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {/* Top Horizontal Line with EST. 2016 */}
        <div className="relative mb-8 flex items-center justify-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-[color:var(--sicofe-purple)] to-transparent"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10 bg-[#0f0f19] px-4 text-center font-mono text-sm font-medium tracking-widest text-[color:var(--sicofe-purple-light)] dark:bg-gray-950 dark:text-purple-400"
          >
            EST. 2016
          </motion.span>
        </div>

        {/* SICOFE Main Logo with 3D Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 text-center"
        >
          <div className="perspective relative inline-block">
            {/* Animated SICOFE Text with 3D Effect */}
            <div className="flex justify-center">
              {'SICOFE'.split('').map((letter, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20, rotateX: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    z: [0, 10, 0]
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.1,
                    ease: 'easeOut',
                    z: {
                      repeat: Infinity,
                      duration: 6,
                      delay: index * 0.5,
                      ease: 'easeInOut'
                    }
                  }}
                >
                  <span className="inline-block text-7xl font-bold text-[color:var(--sicofe-purple)] drop-shadow-[0_5px_15px_rgba(var(--sicofe-purple-light),0.4)] sm:text-8xl md:text-9xl">
                    {letter}
                  </span>
                  {/* Static shadow effect instead of animated */}
                  <span className="absolute top-0 left-0 -z-10 inline-block text-7xl font-bold text-[color:var(--sicofe-purple-dark)]/10 blur-sm sm:text-8xl md:text-9xl">
                    {letter}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Horizontal Line with CONTABILIDAD */}
        <div className="relative mb-8 flex items-center justify-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 1 }}
            className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-[color:var(--sicofe-purple)] to-transparent"
          />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative z-10 bg-[#0f0f19] px-4 text-center text-sm font-medium tracking-[0.3em] text-[color:var(--sicofe-purple-light)] dark:bg-gray-950 dark:text-purple-400"
          >
            CONTABILIDAD
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};
