'use client';

import Image from 'next/image';
import { Button, ScrollReveal } from '@/components';

export const Hero = () => {
  return (
    <ScrollReveal>
      <section className="relative flex min-h-screen flex-col items-center overflow-hidden pt-16 md:flex-row md:pt-20">
        {/* Gradient Background */}
        <div className="bg-gradient-hero animate-gradient-slow absolute inset-0 z-0"></div>

        {/* Decorative circles */}
        <div className="hero-circle top-[10vh] -left-[20vh] h-[40vh] w-[40vh]"></div>
        <div className="hero-circle top-[60vh] -right-[15vh] h-[30vh] w-[30vh]"></div>
        <div className="hero-circle bottom-[5vh] left-[10vh] h-[25vh] w-[25vh]"></div>

        {/* Left Content */}
        <div className="relative z-10 order-2 flex w-full flex-1 flex-col justify-center p-8 md:order-1 md:p-16">
          <div className="mb-10 space-y-2">
            <h1 className="text-5xl font-bold text-[color:var(--sicofe-purple)] md:text-7xl">
              SICOFE
            </h1>
            <div className="h-1 w-20 bg-[color:var(--sicofe-purple)]" />
            <h2 className="text-2xl font-light text-[color:var(--sicofe-purple)] md:text-3xl">
              CONTABILIDAD
            </h2>
          </div>

          <p className="text-foreground mb-10 max-w-md text-lg leading-relaxed font-light md:text-xl">
            Servicios contables profesionales desde 2016. Ofrecemos soluciones financieras y
            contables personalizadas para empresas y particulares.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:space-x-4">
            <Button
              size="lg"
              className="rounded-full bg-[color:var(--sicofe-purple)] px-8 text-white shadow-md transition-all hover:bg-[color:var(--sicofe-purple-dark)] hover:shadow-lg"
            >
              Contáctanos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-[color:var(--sicofe-purple)] px-8 text-[color:var(--sicofe-purple)] transition-all hover:bg-[color:var(--sicofe-purple)] hover:text-white"
            >
              Nuestros Servicios
            </Button>
          </div>
        </div>

        {/* Right Content - Logo */}
        <div className="relative z-10 order-1 flex flex-1 items-center justify-center p-8 md:order-2">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              src="/sicofe_logo.png"
              alt="SICOFE Contabilidad"
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="drop-shadow-md"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
