'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';

const HeroSection = () => {
  return (
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
          Servicios contables profesionales desde 2016. Ofrecemos soluciones financieras y contables
          personalizadas para empresas y particulares.
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
  );
};

const ServiceSection = ({
  title,
  description,
  isLeft
}: {
  title: string;
  description: string;
  isLeft: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative my-16 flex min-h-[50vh] w-full flex-col items-center justify-center px-8 py-16"
    >
      <div className="absolute inset-0 -z-10 bg-[color:var(--sicofe-purple)] opacity-[0.02]"></div>

      <div
        className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} mx-auto w-full max-w-7xl items-center justify-between gap-8`}
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[color:var(--sicofe-purple)] md:text-3xl">
            {title}
          </h3>
          <div className="my-4 h-1 w-16 bg-[color:var(--sicofe-purple)]"></div>
          <p className="max-w-lg text-lg">{description}</p>

          <Button
            className="mt-6 border-[color:var(--sicofe-purple)] text-[color:var(--sicofe-purple)] hover:bg-[color:var(--sicofe-purple)] hover:text-white"
            variant="outline"
          >
            Más información
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="h-64 w-64 rounded-lg bg-[color:var(--sicofe-purple)] opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

// ComponenteScrollReveal
const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

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

      {/* Services Sections with Parallax */}
      <ServiceSection
        title="CONTABILIDAD"
        description="Ofrecemos servicios contables completos que incluyen registro de transacciones, conciliaciones bancarias, elaboración de estados financieros y reportes personalizados para la toma de decisiones."
        isLeft={true}
      />

      <ServiceSection
        title="IMPUESTOS"
        description="Nuestro equipo de expertos fiscales te ayuda a cumplir con todas tus obligaciones tributarias, maximizando beneficios y evitando sanciones a través de una planificación fiscal estratégica."
        isLeft={false}
      />

      <ServiceSection
        title="ASESORÍA FINANCIERA"
        description="Proporcionamos orientación financiera personalizada para optimizar tus recursos, mejorar la rentabilidad y crear estrategias sólidas para el crecimiento de tu negocio."
        isLeft={true}
      />

      {/* Brands Section */}
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-8 py-20">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
            Tenemos el <span className="text-[color:var(--sicofe-purple)]">orgullo</span> de
            trabajar con las{' '}
            <span className="text-[color:var(--sicofe-purple)]">mejores empresas</span> del país
          </h2>
          <div className="grid grid-cols-2 gap-8 opacity-50 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="h-16 rounded-md bg-gray-300"></div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <div className="bg-opacity-5 px-8 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[color:var(--sicofe-purple)] md:text-4xl">
              Encuentra la solución adecuada para tu{' '}
              <span className="border-b-2 border-[color:var(--sicofe-purple)]">negocio</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Cada negocio es único, y tus necesidades financieras también lo son. Te ayudamos a
              encontrar la solución perfecta para tu empresa.
            </p>
            <Button
              size="lg"
              className="bg-[color:var(--sicofe-purple)] text-white hover:bg-[color:var(--sicofe-purple-dark)]"
            >
              Contáctanos hoy
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* Footer Padding */}
      <div className="h-16"></div>
    </div>
  );
}
