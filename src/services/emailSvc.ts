import { resend } from '@/config/resend';

interface SendEmailParams {
  from: string;
  to: string;
  subject: string;
  react: React.ReactElement;
  replyTo?: string;
}

export const sendEmail = async ({ from, to, subject, react, replyTo }: SendEmailParams) => {
  try {
    const response = await resend.emails.send({
      from,
      to,
      subject,
      replyTo,
      react
    });
    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
  }
};
