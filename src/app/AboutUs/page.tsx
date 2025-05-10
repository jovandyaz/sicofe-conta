'use client';

import { HeroLogo } from '@/components/Hero/components';
import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7fd] to-[#f0f0f8] pt-24 dark:from-[#0f0f19] dark:to-[#16162a]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="flex flex-col items-start justify-between gap-20 lg:flex-row">
          {/* Left side - Hero Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex w-full max-w-md flex-col items-center justify-center lg:h-[calc(100vh-250px)] lg:w-2/5"
          >
            <div className="flex flex-col items-center">
              <HeroLogo />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 border-l-2 border-[color:var(--sicofe-purple)] pl-6 dark:border-[color:var(--sicofe-purple-light)]"
              >
                <p className="text-lg font-light text-gray-600 italic dark:text-gray-400">
                  &ldquo;Excelencia financiera con innovación para el mundo moderno&rdquo;
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full space-y-16 lg:w-3/5"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-xl bg-white/50 p-8 shadow-sm backdrop-blur-sm dark:bg-[#1a1a2e]/30 dark:shadow-[0_0_15px_rgba(138,43,226,0.1)]"
            >
              <h2 className="mb-4 text-xl font-normal tracking-wide text-[color:var(--sicofe-blue)] md:text-2xl dark:text-[color:var(--sicofe-blue-light)]">
                Nuestra Historia
              </h2>
              <p className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
                Desde 2016, combinamos experiencia contable tradicional con innovación tecnológica,
                ofreciendo servicios financieros de excelencia para empresas modernas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="rounded-xl bg-white/50 p-8 shadow-sm backdrop-blur-sm dark:bg-[#1a1a2e]/30 dark:shadow-[0_0_15px_rgba(138,43,226,0.1)]"
            >
              <h2 className="mb-4 text-xl font-normal tracking-wide text-[color:var(--sicofe-blue)] md:text-2xl dark:text-[color:var(--sicofe-blue-light)]">
                Nuestra Misión
              </h2>
              <p className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
                Simplificar la gestión financiera de nuestros clientes, permitiéndoles enfocarse en
                el crecimiento mientras mantenemos sus finanzas en perfecto orden.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="rounded-xl bg-white/50 p-8 shadow-sm backdrop-blur-sm dark:bg-[#1a1a2e]/30 dark:shadow-[0_0_15px_rgba(138,43,226,0.1)]"
            >
              <h2 className="mb-4 text-xl font-normal tracking-wide text-[color:var(--sicofe-blue)] md:text-2xl dark:text-[color:var(--sicofe-blue-light)]">
                Nuestra Visión
              </h2>
              <p className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
                Ser la firma contable de referencia en innovación y calidad, estableciendo nuevos
                estándares y expandiendo nuestro alcance nacional e internacional.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
