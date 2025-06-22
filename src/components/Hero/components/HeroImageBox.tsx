'use client';

import Image from 'next/image';
import { SICOFE_LOGO } from '@/lib/constants';
import { motion } from 'motion/react';

export const HeroImageBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative z-10 flex flex-1 items-center justify-center px-4 sm:px-8 lg:px-0"
    >
      <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-white/20 p-4 shadow-[0_20px_50px_rgba(var(--sicofe-purple),0.10)] backdrop-blur-md sm:max-w-sm md:max-w-md dark:bg-[#1a1a2e]/80 dark:shadow-[0_20px_50px_rgba(var(--sicofe-purple-dark),0.2)]">
        {/* Inner container with gradient background */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-[#f0f0fa]/30 dark:from-[#1a1a2e] dark:to-[#2a2a40]" />

          {/* Animated light effect */}
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(var(--sicofe-purple-light), 0.2) 0%, rgba(var(--sicofe-purple-light), 0) 70%)',
                'radial-gradient(circle at 70% 70%, rgba(var(--sicofe-purple), 0.2) 0%, rgba(var(--sicofe-purple), 0) 70%)',
                'radial-gradient(circle at 30% 70%, rgba(var(--sicofe-purple-light), 0.2) 0%, rgba(var(--sicofe-purple-light), 0) 70%)',
                'radial-gradient(circle at 70% 30%, rgba(var(--sicofe-purple), 0.2) 0%, rgba(var(--sicofe-purple), 0) 70%)',
                'radial-gradient(circle at 30% 30%, rgba(var(--sicofe-purple-light), 0.2) 0%, rgba(var(--sicofe-purple-light), 0) 70%)'
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Smaller grid pattern overlay - 20x20 instead of 40x40 */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM4ODhhZmYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIvPjwvZz48L3N2Zz4=')] opacity-35 dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIvPjwvZz48L3N2Zz4=')] dark:opacity-40" />
        </div>

        {/* Logo container with hover effect */}
        <motion.div
          className="relative z-10 flex h-full w-full items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Logo with glow effect */}
          <motion.div
            className="relative h-4/5 w-4/5"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <Image
              src={SICOFE_LOGO}
              alt="SICOFE Contabilidad"
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="drop-shadow-[0_0_25px_rgba(var(--sicofe-purple),0.5)] transition-all duration-300"
            />
          </motion.div>

          {/* Circular glowing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[color:var(--sicofe-purple)]/20 opacity-80"
            animate={{
              boxShadow: [
                '0 0 20px 0 rgba(var(--sicofe-purple-light), 0.2)',
                '0 0 30px 0 rgba(var(--sicofe-purple), 0.4)',
                '0 0 20px 0 rgba(var(--sicofe-purple-light), 0.2)'
              ],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        {/* Floating accounting elements with enhanced visuals */}
        <motion.div
          className="absolute -top-6 -right-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#f0f0fa]/60 to-white/60 shadow-lg backdrop-blur-md dark:from-[#2a2a40] dark:to-[#1a1a2e]"
          animate={{
            y: [0, 10, 0],
            rotate: [0, 5, 0],
            boxShadow: [
              '0 5px 15px rgba(var(--sicofe-purple-light), 0.2)',
              '0 10px 25px rgba(var(--sicofe-purple), 0.3)',
              '0 5px 15px rgba(var(--sicofe-purple-light), 0.2)'
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <span className="text-2xl font-bold text-[color:var(--sicofe-purple)]">$</span>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 left-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#f0f0fa]/60 to-white/60 shadow-lg backdrop-blur-md dark:from-[#2a2a40] dark:to-[#1a1a2e]"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -3, 0],
            boxShadow: [
              '0 5px 15px rgba(var(--sicofe-purple-light), 0.2)',
              '0 10px 25px rgba(var(--sicofe-purple), 0.3)',
              '0 5px 15px rgba(var(--sicofe-purple-light), 0.2)'
            ]
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <span className="text-xl font-bold text-[color:var(--sicofe-purple)]">%</span>
        </motion.div>

        {/* Additional floating element */}
        <motion.div
          className="absolute -right-4 -bottom-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#f0f0fa]/60 to-white/60 shadow-lg backdrop-blur-md dark:from-[#2a2a40] dark:to-[#1a1a2e]"
          animate={{
            y: [0, 6, 0],
            rotate: [0, 2, 0],
            boxShadow: [
              '0 5px 15px rgba(var(--sicofe-blue-light), 0.2)',
              '0 10px 25px rgba(var(--sicofe-blue), 0.3)',
              '0 5px 15px rgba(var(--sicofe-blue-light), 0.2)'
            ]
          }}
          transition={{
            duration: 4.5,
            delay: 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <span className="text-lg font-bold text-[color:var(--sicofe-blue)]">+</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
