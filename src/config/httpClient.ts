import { APP_URLS } from '@/lib/constants';
import { createHttpClient } from '@jovandyaz/http-client';

export const httpClient = createHttpClient({
  baseURL: process.env.NODE_ENV === 'production' ? APP_URLS.PRODUCTION : APP_URLS.DEVELOPMENT,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});
