import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components';
import { figtree } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'SICOFE - Contabilidad Profesional',
  description: 'Servicios contables profesionales para empresas y particulares desde 2016',
  icons: {
    icon: '/sicofe_logo.png'
  },
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(figtree.className, 'flex min-h-screen flex-col antialiased')}
        suppressHydrationWarning
      >
        <header className="w-full">
          <Navbar />
        </header>
        <main className="w-full flex-grow">{children}</main>
        <Analytics />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
