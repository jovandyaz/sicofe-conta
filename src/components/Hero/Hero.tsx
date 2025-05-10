'use client';

import { useRef } from 'react';
import { HeroBackground, HeroImageBox, HeroLogo, HeroText } from './components';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0f0f19] dark:bg-gray-950">
      {/* Main Container */}
      <div
        ref={containerRef}
        className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 md:px-10 lg:flex-row lg:items-center"
      >
        {/* Background Grid Pattern */}
        <HeroBackground />

        {/* Content */}
        <div className="z-10 flex flex-1 flex-col items-center justify-center py-20 text-center md:text-center lg:items-center lg:py-0">
          {/* Logo y texto "SICOFE CONTABILIDAD" */}
          <HeroLogo />

          {/* Texto descriptivo */}
          <HeroText />
        </div>

        {/* Imagen/Logo con animación */}
        <HeroImageBox />
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#0a0a14] to-transparent dark:from-gray-900 dark:to-transparent"></div>
    </section>
  );
};
