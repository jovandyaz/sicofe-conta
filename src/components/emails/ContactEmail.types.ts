export interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export type EmailStyleProperty = {
  [key: string]: string | number | undefined;
};
