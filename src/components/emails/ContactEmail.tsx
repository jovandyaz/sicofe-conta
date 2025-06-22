import { emailStyles } from './ContactEmail.styles';
import type { ContactEmailProps } from './ContactEmail.types';
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text
} from '@react-email/components';

export const ContactEmail = ({ name, email, phone, company, message }: ContactEmailProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>Mensaje de {name} - SICOFE Website</Preview>
      <Body style={emailStyles.main}>
        <Container style={emailStyles.container}>
          <Section style={emailStyles.heroSection}>
            <Text style={emailStyles.heroTitle}>📬 Nuevo Mensaje</Text>
            <Text style={emailStyles.heroSubtitle}>De: {name}</Text>
          </Section>

          <Section style={emailStyles.contentSection}>
            <Section style={emailStyles.infoBox}>
              <Text style={emailStyles.label}>Información del Contacto</Text>
              <Text style={emailStyles.field}>
                <strong>Email:</strong>{' '}
                <Link href={`mailto:${email}`} style={emailStyles.link}>
                  {email}
                </Link>
              </Text>
              <Text style={emailStyles.field}>
                <strong>Teléfono:</strong>{' '}
                <Link href={`tel:${phone}`} style={emailStyles.link}>
                  {phone}
                </Link>
              </Text>
              {company && (
                <Text style={emailStyles.field}>
                  <strong>Empresa:</strong> {company}
                </Text>
              )}
            </Section>

            <Section style={emailStyles.messageBox}>
              <Text style={emailStyles.label}>Mensaje</Text>
              <Text style={emailStyles.message}>{message}</Text>
            </Section>

            <Button style={emailStyles.button} href={`mailto:${email}`}>
              Responder Email
            </Button>
          </Section>

          <Hr style={emailStyles.divider} />

          <Section style={emailStyles.footer}>
            <Text style={emailStyles.footerText}>
              © {currentYear} SICOFE · Todos los derechos reservados
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
