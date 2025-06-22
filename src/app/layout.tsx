import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components';
import { ThemeProvider, figtree } from '@/components/ui';
import { SICOFE_LOGO } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'SICOFE - Contabilidad Profesional',
  description: 'Servicios contables profesionales para empresas y particulares desde 2016',
  icons: {
    icon: SICOFE_LOGO
  },
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(figtree.className, 'flex min-h-screen flex-col antialiased')}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="w-full">
            <Navbar />
          </header>
          <main className="w-full flex-grow">{children}</main>
          <Footer />
          <Analytics />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
