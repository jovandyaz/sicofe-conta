'use client';

import Image from 'next/image';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden pt-16 md:flex-row md:pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 h-16 w-full bg-[color:var(--sicofe-purple-dark)] opacity-5"></div>
      <div className="absolute right-0 bottom-0 h-16 w-full bg-[color:var(--sicofe-purple-dark)] opacity-5"></div>
      <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-[color:var(--sicofe-purple)] opacity-5"></div>
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-[color:var(--sicofe-purple)] opacity-5 md:-right-16"></div>

      {/* Content */}
      <div className="relative z-10 order-2 flex flex-1 flex-col justify-center p-8 md:order-1 md:p-16">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-[color:var(--sicofe-purple)] md:text-6xl">
            SICOFE
          </h1>
          <div className="h-1 w-20 bg-[color:var(--sicofe-purple)]"></div>
          <h2 className="mt-4 text-2xl text-[color:var(--sicofe-purple)] md:text-3xl">
            CONTABILIDAD
          </h2>
        </div>

        <p className="mb-8 max-w-xl text-lg md:text-xl">
          Servicios contables profesionales desde 2016. Ofrecemos soluciones financieras y contables
          personalizadas para empresas y particulares.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:space-x-4">
          <Button
            size="lg"
            className="bg-[color:var(--sicofe-purple)] hover:bg-[color:var(--sicofe-purple-dark)] text-white"
          >
            Contáctanos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[color:var(--sicofe-purple)] text-[color:var(--sicofe-purple)] hover:bg-[color:var(--sicofe-purple)] hover:text-white"
          >
            Nuestros Servicios
          </Button>
        </div>

        <div className="mt-12 flex items-center">
          <div className="text-xl font-semibold text-[color:var(--sicofe-purple)]">EST. 2016</div>
          <div className="ml-4 h-px w-16 bg-[color:var(--sicofe-purple)] opacity-50"></div>
        </div>
      </div>

      {/* Right Content - Logo */}
      <div className="relative z-10 order-1 flex flex-1 items-center justify-center p-8 md:order-2">
        <div className="relative aspect-square w-full max-w-md">
          <div className="absolute inset-0 scale-90 transform rounded-full bg-[color:var(--sicofe-purple)] opacity-5"></div>
          <Image
            src="/sicofe_conta.png"
            alt="SICOFE Contabilidad"
            fill
            style={{ objectFit: 'contain' }}
            priority
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
