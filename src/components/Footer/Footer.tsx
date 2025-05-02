import Link from 'next/link';
import { IconLogo, SocialLink } from '../ui';
import { sections } from './sections.constants';
import { CURRENT_YEAR, SICOFE_INSTAGRAM_URL, SICOFE_WHATSAPP_URL } from '@/lib/constants';
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri';

export const socialLinks = [
  {
    href: SICOFE_INSTAGRAM_URL || 'https://instagram.com',
    icon: RiInstagramFill,
    label: 'Instagram'
  },
  {
    href: SICOFE_WHATSAPP_URL || 'https://whatsapp.com',
    icon: RiWhatsappFill,
    label: 'WhatsApp'
  },
  {
    href: 'https://facebook.com',
    icon: RiFacebookFill,
    label: 'Facebook'
  },
  {
    href: 'https://linkedin.com',
    icon: RiLinkedinFill,
    label: 'LinkedIn'
  }
];

export const Footer = () => {
  return (
    <footer className="w-full bg-white px-4 pt-16 pb-8 shadow-sm md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* CTA Section */}
        <div className="mb-16 rounded-xl bg-gradient-to-r from-purple-50 to-white p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-[color:var(--sicofe-purple)] md:text-3xl">
                Encuentra soluciones para tu{' '}
                <span className="border-b-2 border-[color:var(--sicofe-purple)]">negocio</span>
              </h3>
              <p className="mt-2 text-lg text-gray-700 md:max-w-md">
                Contacta con nuestro equipo y descubre cómo podemos ayudarte.
              </p>
            </div>
            <div>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-md bg-[color:var(--sicofe-purple)] px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-[color:var(--sicofe-purple-dark)] hover:shadow-md"
              >
                Trabajemos juntos
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="border-t border-purple-100 pt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
            {/* Brand & Social */}
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="mb-6 flex items-center space-x-2">
                <IconLogo
                  src="/sicofe_logo.png"
                  alt="SICOFE Contabilidad"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-[color:var(--sicofe-purple)]">SICOFE</span>
              </Link>

              <p className="mb-6 text-base text-gray-600 md:max-w-md">
                Servicios contables profesionales desde 2016. Ofrecemos soluciones financieras y
                contables personalizadas para empresas y particulares.
              </p>

              <div className="flex space-x-3">
                {socialLinks.map(link => (
                  <SocialLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    className="rounded-full p-2 text-[color:var(--sicofe-purple)] transition-colors duration-200 hover:bg-purple-50 hover:text-[color:var(--sicofe-purple-dark)]"
                  />
                ))}
              </div>
            </div>

            {/* Menu Links */}
            {Object.entries(sections).map(([key, section]) => (
              <div key={key} className="col-span-1">
                <h3 className="mb-4 text-lg font-semibold text-[color:var(--sicofe-purple)]">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map(item => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-600 decoration-purple-300 transition-colors duration-200 hover:text-[color:var(--sicofe-purple)] hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-opacity-20 mt-16 flex flex-col border-t border-purple-100 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <div>&copy; {CURRENT_YEAR} SICOFE Contabilidad. Todos los derechos reservados.</div>
          <div className="mt-2 md:mt-0">Diseñado con ♥️ en México</div>
        </div>
      </div>
    </footer>
  );
};
