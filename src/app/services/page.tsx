'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollReveal,
  Separator
} from '@/components';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle,
  Mail,
  Phone,
  PieChart,
  Shield,
  Users
} from 'lucide-react';

const mainServices = [
  {
    icon: <PieChart className="h-6 w-6" />,
    title: 'Contabilidad',
    description:
      'Servicios contables completos que incluyen registro de transacciones, conciliaciones bancarias, elaboración de estados financieros.'
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Impuestos',
    description:
      'Cumplimiento de todas tus obligaciones tributarias, maximizando beneficios y evitando sanciones a través de una planificación fiscal estratégica.'
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: 'Asesoría financiera',
    description:
      'Proporcionamos orientación financiera para optimizar tus recursos, mejorar la rentabilidad y crear estrategias sólidas para el crecimiento de tu negocio.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Nóminas y RRHH',
    description: 'Gestión completa de nóminas, cálculo de prestaciones y cumplimiento laboral.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Auditorías',
    description: 'Auditorías internas y externas para garantizar la integridad de tus procesos.'
  },

  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Constitución de Empresas',
    description: 'Asesoría completa para la constitución y formalización de tu empresa.'
  }
];

const benefits = [
  'Más de 8 años de experiencia en el mercado',
  'Equipo de profesionales certificados',
  'Tecnología de vanguardia',
  'Atención personalizada 24/7',
  'Precios competitivos y transparentes',
  'Cumplimiento garantizado'
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7fd] to-[#f0f0f8] dark:from-[#0f0f19] dark:to-[#16162a]">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
        <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-3xl leading-tight font-bold text-gray-800 md:text-4xl lg:text-5xl dark:text-gray-100">
                Nuestros{' '}
                <span className="bg-gradient-to-r from-[color:var(--sicofe-purple)] to-[color:var(--sicofe-blue)] bg-clip-text text-transparent">
                  Servicios
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-700 md:text-2xl lg:text-3xl dark:text-gray-300">
                Ofrecemos una suite completa de servicios contables y fiscales diseñados para
                impulsar el crecimiento y éxito de tu empresa.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-[color:var(--sicofe-purple)] to-[color:var(--sicofe-purple-dark)] px-10 py-7 text-xl font-medium shadow-lg transition-all hover:shadow-xl dark:from-[color:var(--sicofe-purple)] dark:to-[color:var(--sicofe-purple-light)]"
                >
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/contac">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-[color:var(--sicofe-purple)] px-10 py-7 text-xl font-medium text-[color:var(--sicofe-purple)] hover:bg-[color:var(--sicofe-purple)] hover:text-white"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contactar Ahora
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-2xl font-bold text-[color:var(--sicofe-purple)] md:text-3xl">
                Servicios Principales
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Nuestros servicios core están diseñados para cubrir todas las necesidades contables
                y fiscales de tu empresa.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map(service => (
              <ScrollReveal key={service.title}>
                <Card className="group h-full rounded-xl bg-white/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-[#1a1a2e]/30 dark:shadow-[0_0_15px_rgba(138,43,226,0.1)]">
                  <CardHeader>
                    <div className="mb-2 w-fit rounded-lg bg-[color:var(--sicofe-blue)]/10 p-2 text-[color:var(--sicofe-blue)] transition-colors group-hover:bg-[color:var(--sicofe-blue)] group-hover:text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-normal tracking-wide text-[color:var(--sicofe-blue)] dark:text-[color:var(--sicofe-blue-light)]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div>
                <h2 className="mb-4 text-xl font-normal tracking-wide text-[color:var(--sicofe-blue)] md:text-2xl dark:text-[color:var(--sicofe-blue-light)]">
                  ¿Por qué elegir <span className="text-[color:var(--sicofe-purple)]">SICOFE</span>?
                </h2>
                <p className="mb-8 text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
                  Somos tu socio estratégico en el crecimiento de tu empresa. Nuestro compromiso es
                  brindarte servicios de la más alta calidad con un enfoque personalizado.
                </p>

                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[color:var(--sicofe-purple)]" />
                      <span className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="rounded-xl bg-white/50 shadow-sm backdrop-blur-sm dark:bg-[#1a1a2e]/30 dark:shadow-[0_0_15px_rgba(138,43,226,0.1)]">
                <CardHeader>
                  <CardTitle className="text-center text-xl font-normal tracking-wide text-[color:var(--sicofe-blue)] md:text-2xl dark:text-[color:var(--sicofe-blue-light)]">
                    ¿Listo para comenzar?
                  </CardTitle>
                  <CardDescription className="text-center text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
                    Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos
                    empresariales.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/contac">
                    <Button
                      className="w-full rounded-full bg-gradient-to-r from-[color:var(--sicofe-purple)] to-[color:var(--sicofe-purple-dark)] px-10 py-7 text-xl font-medium shadow-lg transition-all hover:shadow-xl dark:from-[color:var(--sicofe-purple)] dark:to-[color:var(--sicofe-purple-light)]"
                      size="lg"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Solicitar Cotización Gratuita
                    </Button>
                  </Link>
                  <Separator />
                  <div className="text-center text-sm text-gray-700 dark:text-gray-300">
                    <p>Respuesta garantizada en menos de 24 horas</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
