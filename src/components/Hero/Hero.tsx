'use client';

import { useRef } from 'react';
import { HeroBackground, HeroImageBox, HeroText } from './components';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f7f7fd] pt-10 md:pt-6 dark:bg-[#0f0f19]">
      <div
        ref={containerRef}
        className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 md:px-10 lg:flex-row lg:items-center"
      >
        <HeroBackground />

        <div className="z-10 flex flex-1 flex-col items-center justify-center py-10 text-center md:py-16 lg:items-start lg:py-0 lg:text-left">
          <HeroText />
          <div className="mt-12 block w-full lg:hidden">
            <HeroImageBox />
          </div>
        </div>

        <div className="hidden lg:block lg:flex-1">
          <HeroImageBox />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#f0f0fa] to-transparent dark:from-[#0a0a14] dark:to-transparent"></div>
    </section>
  );
};
