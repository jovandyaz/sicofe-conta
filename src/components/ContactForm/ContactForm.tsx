'use client';

import { useContactForm } from './useContactForm';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea
} from '@/components/ui';
import { Building, Mail, MessageCircle, Phone, Send, User } from 'lucide-react';

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

export const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const { form, isSubmitting, onSubmit } = useContactForm({ onSubmitSuccess });

  return (
    <Card className="rounded-xl bg-white/50 shadow-sm backdrop-blur-sm dark:bg-[#1a1a2e]/30 dark:shadow-[0_0_15px_rgba(138,43,226,0.1)]">
      <CardHeader>
        <CardTitle className="text-xl font-normal tracking-wide text-[color:var(--sicofe-blue)] md:text-2xl dark:text-[color:var(--sicofe-blue-light)]">
          Envíanos un mensaje
        </CardTitle>
        <CardDescription className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
          Completa el formulario y nos pondremos en contacto contigo pronto.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      <User className="mr-2 inline h-4 w-4" />
                      Nombre
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tu nombre completo"
                        className="h-12 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-[color:var(--sicofe-purple)] dark:border-gray-700 dark:bg-gray-800/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Mail className="mr-2 inline h-4 w-4" />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tu@email.com"
                        type="email"
                        className="h-12 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-[color:var(--sicofe-purple)] dark:border-gray-700 dark:bg-gray-800/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Phone className="mr-2 inline h-4 w-4" />
                      Teléfono
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="5512345678"
                        className="h-12 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-[color:var(--sicofe-purple)] dark:border-gray-700 dark:bg-gray-800/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Building className="mr-2 inline h-4 w-4" />
                      Empresa
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nombre de tu empresa (opcional)"
                        className="h-12 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-[color:var(--sicofe-purple)] dark:border-gray-700 dark:bg-gray-800/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <MessageCircle className="mr-2 inline h-4 w-4" />
                    Mensaje
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Cuéntanos sobre los servicios que necesitas..."
                      className="min-h-[120px] rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:border-[color:var(--sicofe-purple)] dark:border-gray-700 dark:bg-gray-800/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-gradient-to-r from-[color:var(--sicofe-purple)] to-[color:var(--sicofe-purple-dark)] px-6 py-7 text-lg font-medium shadow-lg transition-all hover:shadow-xl disabled:opacity-50 dark:from-[color:var(--sicofe-purple)] dark:to-[color:var(--sicofe-purple-light)]"
            >
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
