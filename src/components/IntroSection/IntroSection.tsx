'use client';

import { ScrollReveal } from '@/components';

export const IntroSection = () => {
  return (
    <ScrollReveal>
      <div className="relative flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-5xl">No somos solo un</h2>
        <div className="relative mb-6 h-16 overflow-hidden md:h-24">
          <div className="flex flex-col items-center justify-center">
            <h2 className="flex h-16 items-center text-3xl font-bold text-[color:var(--sicofe-purple)] md:h-24 md:text-5xl">
              despacho contable.
            </h2>
          </div>
        </div>
        <h2 className="mt-6 text-3xl font-bold md:text-5xl">Somos todo eso y más.</h2>
      </div>
    </ScrollReveal>
  );
};
