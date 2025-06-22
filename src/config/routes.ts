/**
 * Application routes configuration
 * Centralized route definitions to avoid magic strings throughout the codebase
 */

export const PUBLIC_ROUTES = {
  HOME: '/',
  ABOUT_US: '/about-us',
  SERVICES: '/services',
  CONTACT: '/contact'
} as const;

export const API_ROUTES = {
  CONTACT: '/api/contact'
} as const;

export type PublicRoutePath = (typeof PUBLIC_ROUTES)[keyof typeof PUBLIC_ROUTES];
export type ApiRoutePath = (typeof API_ROUTES)[keyof typeof API_ROUTES];
export type AppRoutePath = PublicRoutePath | ApiRoutePath;

export interface NavItem {
  name: string;
  link: AppRoutePath;
  highlighted?: boolean;
}

export const BASE_NAV_ITEMS: NavItem[] = [
  {
    name: 'Nosotros',
    link: PUBLIC_ROUTES.ABOUT_US
  },
  {
    name: 'Servicios',
    link: PUBLIC_ROUTES.SERVICES
  },
  {
    name: 'Contacto',
    link: PUBLIC_ROUTES.CONTACT,
    highlighted: true
  }
];
