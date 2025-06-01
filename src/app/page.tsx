'use client';

import { ContactSection, Hero, IntroSection, Services } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <IntroSection />

      <Services />

      <ContactSection />

      <div className="h-16"></div>
    </div>
  );
}
