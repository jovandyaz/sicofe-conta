import type { ContactApiError } from '@/components/ContactForm/contact-form.types';
import { isHttpError } from '@jovandyaz/http-client';

export const ERROR_MESSAGES = {
  DEFAULT: 'No se pudo completar la operación. Por favor intenta nuevamente.',
  CONTACT_DEFAULT: 'No se pudo enviar el mensaje. Por favor intenta nuevamente.',
  SERVER_ERROR: 'Error del servidor. Por favor intenta nuevamente.',
  NETWORK_ERROR: 'Error de conexión. Verifica tu conexión a internet.'
} as const;

/**
 * Extracts a user-friendly error message from API response errors
 * @param error - The API response error object
 * @param fallback - Fallback message if no specific error found
 * @returns A user-friendly error message
 */
export const extractApiErrorMessage = (
  error: ContactApiError['error'],
  fallback: string = ERROR_MESSAGES.SERVER_ERROR
): string => {
  if (!error) return fallback;

  if (typeof error === 'string') {
    return error;
  }

  return error.message || error.details || fallback;
};

/**
 * Extracts a user-friendly error message from any error type
 * Handles HttpError, Error, and unknown error types
 * @param error - The error object (can be HttpError, Error, or unknown)
 * @param fallback - Fallback message if no specific error found
 * @returns A user-friendly error message
 */
export const extractErrorMessage = (
  error: unknown,
  fallback: string = ERROR_MESSAGES.DEFAULT
): string => {
  if (isHttpError(error)) {
    const serverError = error.response?.data as ContactApiError;
    return serverError?.error ? extractApiErrorMessage(serverError.error, fallback) : error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
};

/**
 * Specific error handler for contact form submissions
 * @param error - The error from contact form submission
 * @returns A user-friendly error message for contact forms
 */
export const extractContactFormError = (error: unknown): string => {
  return extractErrorMessage(error, ERROR_MESSAGES.CONTACT_DEFAULT);
};
