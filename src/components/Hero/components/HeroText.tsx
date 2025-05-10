'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { motion } from 'motion/react';

export const HeroText = () => {
  return (
    <div className="relative z-10 mx-auto max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mb-6 text-center text-3xl leading-tight font-bold text-gray-800 md:text-4xl lg:text-5xl dark:text-gray-100"
      >
        Soluciones financieras para la empresa moderna
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="text-center text-xl leading-relaxed text-gray-700 md:my-6 md:text-2xl lg:text-3xl dark:text-gray-300"
      >
        Transformamos la contabilidad tradicional con soluciones
        <motion.span
          className="relative mx-2 inline-block px-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="absolute inset-0 -rotate-1 transform rounded bg-[color:var(--sicofe-blue)]/10 dark:bg-[color:var(--sicofe-blue)]/15"></span>
          <motion.span
            className="relative font-semibold text-[color:var(--sicofe-blue-dark)] dark:text-[color:var(--sicofe-blue)]"
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

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="mt-10 flex justify-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-auto">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-[color:var(--sicofe-purple)] to-[color:var(--sicofe-purple-dark)] px-10 py-7 text-xl font-medium shadow-lg transition-all hover:shadow-xl dark:from-[color:var(--sicofe-purple)] dark:to-[color:var(--sicofe-purple-light)]"
          >
            <Link href="/services">Conoce nuestros servicios</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Visual separator */}
      <motion.div
        className="mx-auto mt-16 h-px w-36 bg-gradient-to-r from-transparent via-[color:var(--sicofe-purple)]/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </div>
  );
};
