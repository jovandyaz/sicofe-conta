'use client';

import { useState } from 'react';
import { ContactForm, ContactInfo, ContactSuccess, ScrollReveal } from '@/components';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <ContactSuccess onReset={handleReset} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f7fd] to-[#f0f0f8] dark:from-[#0f0f19] dark:to-[#16162a]">
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-3xl leading-tight font-bold text-gray-800 md:text-4xl lg:text-5xl dark:text-gray-100">
                Hablemos de tu{' '}
                <span className="bg-gradient-to-r from-[color:var(--sicofe-purple)] to-[color:var(--sicofe-blue)] bg-clip-text text-transparent">
                  Proyecto
                </span>
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <ContactForm onSubmitSuccess={handleSubmitSuccess} />
            </ScrollReveal>

            <ScrollReveal>
              <ContactInfo />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
