'use client';

import { useState } from 'react';
import { contactFormSchema } from './contact-form.schema';
import { type ContactApiResponse, type ContactFormData } from './contact-form.types';
import { httpClient } from '@/config/httpClient';
import { API_ROUTES } from '@/config/routes';
import { extractApiErrorMessage, extractContactFormError } from '@/lib/errorUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface UseContactFormProps {
  onSubmitSuccess: () => void;
}

interface UseContactFormReturn {
  form: ReturnType<typeof useForm<ContactFormData>>;
  isSubmitting: boolean;
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export const useContactForm = ({ onSubmitSuccess }: UseContactFormProps): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setIsSubmitting(true);
    const loadingToast = toast.loading('Enviando mensaje...');

    try {
      const result = await httpClient.post<ContactApiResponse>(API_ROUTES.CONTACT, data);

      toast.dismiss(loadingToast);

      if (!result.success) {
        const errorMessage = extractApiErrorMessage(result.error);
        throw new Error(errorMessage);
      }

      form.reset();
      onSubmitSuccess();
    } catch (error) {
      toast.dismiss(loadingToast);
      const errorMessage = extractContactFormError(error);

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit
  };
};
