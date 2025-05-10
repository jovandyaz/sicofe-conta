'use client';

import Link from 'next/link';
import { Button, ScrollReveal } from '@/components';

export const ContactSection = () => {
  return (
    <ScrollReveal>
      <div className="mx-auto max-w-7xl">
        <div className="from-secondary to-background dark:from-secondary/20 dark:to-background mb-16 rounded-xl bg-gradient-to-r p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-[color:var(--sicofe-purple)] md:text-3xl">
                Encuentra soluciones para tu{' '}
                <span className="border-b-2 border-[color:var(--sicofe-purple)]">negocio</span>
              </h3>
              <p className="text-foreground/80 mt-2 text-lg md:max-w-md">
                Contacta con nuestro equipo y descubre cómo podemos ayudarte.
              </p>
            </div>
            <div>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-md bg-[color:var(--sicofe-purple)] px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-[color:var(--sicofe-purple-dark)] hover:shadow-md"
              >
                Trabajemos juntos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
