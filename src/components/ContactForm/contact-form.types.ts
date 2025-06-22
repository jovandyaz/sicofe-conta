import { contactFormSchema } from './contact-form.schema';
import { z } from 'zod';

export type ContactFormData = z.infer<typeof contactFormSchema>;

type ApiError =
  | {
      message?: string;
      details?: string;
    }
  | string;

export interface ContactApiResponse {
  success: boolean;
  error?: ApiError;
}

export interface ContactApiError {
  error?: ApiError;
}
