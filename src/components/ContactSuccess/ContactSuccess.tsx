'use client';

import { Button, Card, CardContent } from '@/components/ui';
import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSuccessProps {
  onReset: () => void;
}

export const ContactSuccess = ({ onReset }: ContactSuccessProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7fd] to-[#f0f0f8] pt-24 dark:from-[#0f0f19] dark:to-[#16162a]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md text-center"
        >
          <Card className="rounded-xl bg-white/50 p-8 shadow-sm backdrop-blur-sm dark:bg-[#1a1a2e]/30 dark:shadow-[0_0_15px_rgba(138,43,226,0.1)]">
            <CardContent className="pt-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-[color:var(--sicofe-blue)] md:text-2xl dark:text-[color:var(--sicofe-blue-light)]">
                ¡Mensaje Enviado!
              </h2>
              <p className="mb-6 text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
                Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas.
              </p>
              <Button
                onClick={onReset}
                className="w-full rounded-full bg-gradient-to-r from-[color:var(--sicofe-purple)] to-[color:var(--sicofe-purple-dark)] px-6 py-3 text-base font-medium shadow-lg transition-all hover:shadow-xl dark:from-[color:var(--sicofe-purple)] dark:to-[color:var(--sicofe-purple-light)]"
              >
                Enviar otro mensaje
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
