'use client';

import { Services } from '@/components/Services'; // Import the Services component
import { motion } from 'motion/react';

export default function ServicesPage() { // Changed function name
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7fd] to-[#f0f0f8] pt-24 dark:from-[#0f0f19] dark:to-[#16162a]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        {/* Title for the page */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-[color:var(--sicofe-blue)] dark:text-[color:var(--sicofe-blue-light)] md:text-4xl"
        >
          Nuestros Servicios
        </motion.h1>
        
        {/* Render the Services component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Services />
        </motion.div>
      </div>
    </div>
  );
}
