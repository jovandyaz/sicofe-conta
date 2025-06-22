'use client';

import { Button, Card } from '@/components/ui';
import { PUBLIC_URLS } from '@/lib/constants';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    content: PUBLIC_URLS.email,
    description: 'Envíanos un email y te responderemos pronto'
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Teléfono',
    content: PUBLIC_URLS.phone,
    description: 'Llámanos para resolver tus dudas'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Ubicación',
    content: 'Apan, Hidalgo, México',
    description: 'Oficinas principales'
  }
];

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="rounded-xl bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-[#1a1a2e]/30 dark:shadow-[0_0_15px_rgba(138,43,226,0.1)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--sicofe-blue)]/10 text-[color:var(--sicofe-blue)]">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-medium text-[color:var(--sicofe-blue)] dark:text-[color:var(--sicofe-blue-light)]">
                    {info.title}
                  </h3>
                  <p className="mb-1 font-semibold text-gray-800 dark:text-gray-200">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="rounded-xl bg-gradient-to-r from-[color:var(--sicofe-purple)]/10 to-[color:var(--sicofe-blue)]/10 p-6 shadow-sm backdrop-blur-sm dark:from-[color:var(--sicofe-purple)]/20 dark:to-[color:var(--sicofe-blue)]/20">
        <div className="text-center">
          <h3 className="mb-2 text-lg font-medium text-[color:var(--sicofe-blue)] dark:text-[color:var(--sicofe-blue-light)]">
            ¿Necesitas ayuda inmediata?
          </h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Agenda una consulta gratuita de 30 minutos
          </p>
          <Button
            variant="outline"
            className="rounded-full border-[color:var(--sicofe-purple)] px-6 py-2 text-sm font-medium text-[color:var(--sicofe-purple)] hover:bg-[color:var(--sicofe-purple)] hover:text-white"
          >
            Agendar consulta
          </Button>
        </div>
      </Card>
    </div>
  );
};
