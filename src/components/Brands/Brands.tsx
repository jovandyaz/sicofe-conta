'use client';

import { ScrollReveal } from '@/components';

export const Brands = () => {
  return (
    <ScrollReveal>
      <div className="mx-auto max-w-7xl px-8 py-20">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          Tenemos el <span className="text-[color:var(--sicofe-purple)]">orgullo</span> de trabajar
          con las <span className="text-[color:var(--sicofe-purple)]">mejores empresas</span> del
          país
        </h2>
        <div className="grid grid-cols-2 gap-8 opacity-50 md:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="h-16 rounded-md bg-gray-300"></div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};
