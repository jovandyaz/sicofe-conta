'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components';
import { motion } from 'motion/react';

export const ContactSection = () => {
  return (
    <ScrollReveal>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-16 rounded-xl bg-white/50 p-8 shadow-sm backdrop-blur-sm dark:bg-[#1a1a2e]/30 dark:shadow-[0_0_15px_rgba(138,43,226,0.1)]"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-[color:var(--sicofe-blue)] md:text-3xl">
                Encuentra soluciones para tu negocio
              </h3>
              <p className="text-foreground/80 mt-2 text-lg md:max-w-md">
                Contacta con nuestro equipo y descubre cómo podemos ayudarte.
              </p>
            </div>
            <Link
              href="/contac"
              className="inline-flex items-center justify-center rounded-md bg-[color:var(--sicofe-purple)] px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-[color:var(--sicofe-purple-dark)] hover:shadow-md"
            >
              Trabajemos juntos
            </Link>
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
};
