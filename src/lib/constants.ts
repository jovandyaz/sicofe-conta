export const CURRENT_YEAR = new Date().getFullYear();

export const APP_LOCAL_URL = 'http://localhost:3000';
export const SICOFE_LOGO = '/images/sicofe_logo.png';
export const SICOFE_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export const SICOFE_EMAIL_LOGO_URL = process.env.NEXT_PUBLIC_EMAIL_LOGO_URL;
export const SICOFE_INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
export const SICOFE_WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL;
export const SICOFE_PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER;

export const APP_URLS = {
  DEVELOPMENT: APP_LOCAL_URL,
  PRODUCTION: process.env.NEXT_PUBLIC_APP_URL || APP_LOCAL_URL
} as const;

export const PUBLIC_URLS = {
  email: SICOFE_EMAIL,
  instagram: SICOFE_INSTAGRAM_URL,
  whatsapp: SICOFE_WHATSAPP_URL,
  phone: SICOFE_PHONE_NUMBER
} as const;

export const PRIVATE_URLS = {
  emailLogo: SICOFE_EMAIL_LOGO_URL
} as const;
