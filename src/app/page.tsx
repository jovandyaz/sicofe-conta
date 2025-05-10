'use client';

import { Brands, ContactSection, Hero, IntroSection, Services } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <IntroSection />

      <Services />

      <Brands />

      <ContactSection />

      <div className="h-16"></div>
    </div>
  );
}
