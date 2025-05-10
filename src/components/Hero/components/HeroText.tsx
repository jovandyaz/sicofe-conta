'use client';

import { motion } from 'motion/react';

export const HeroText = () => {
  return (
    <div className="relative z-10 mx-auto max-w-xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="text-center text-lg leading-relaxed text-gray-700 md:my-6 md:text-xl lg:text-2xl dark:text-gray-300"
      >
        Transformamos la contabilidad tradicional con soluciones
        <motion.span
          className="relative mx-2 inline-block px-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="absolute inset-0 -rotate-1 transform rounded bg-[color:var(--sicofe-blue)]/10 dark:bg-[color:var(--sicofe-blue)]/15"></span>
          <motion.span
            className="relative text-[color:var(--sicofe-blue-dark)] dark:text-[color:var(--sicofe-blue)]"
            animate={{
              textShadow: [
                '0 0 5px rgba(var(--sicofe-blue-light), 0.1)',
                '0 0 8px rgba(var(--sicofe-blue-light), 0.3)',
                '0 0 5px rgba(var(--sicofe-blue-light), 0.1)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            financieras innovadoras
          </motion.span>
        </motion.span>
        para empresas con visión de futuro.
      </motion.p>

      {/* Visual separator */}
      <motion.div
        className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[color:var(--sicofe-purple)]/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      />
    </div>
  );
};
