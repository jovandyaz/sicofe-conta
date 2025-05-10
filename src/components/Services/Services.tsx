'use client';

import { useRef } from 'react';
import { Button, ScrollReveal } from '@/components';

interface ServiceSectionProps {
  title: string;
  description: string;
  isLeft: boolean;
}

export const ServiceSection = ({ title, description, isLeft }: ServiceSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ScrollReveal>
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
    </ScrollReveal>
  );
};

export const Services = () => {
  return (
    <>
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
    </>
  );
};
