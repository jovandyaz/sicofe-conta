export const emailStyles = {
  main: {
    backgroundColor: '#f6f9fc',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  container: {
    margin: '0 auto',
    padding: '20px 0 48px'
  },
  heroSection: {
    padding: '32px 48px',
    textAlign: 'center' as const,
    backgroundColor: '#ffffff',
    borderRadius: '8px 8px 0 0'
  },
  heroTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    margin: '0 0 12px'
  },
  heroSubtitle: {
    fontSize: '16px',
    color: '#666666',
    margin: '0'
  },
  contentSection: {
    padding: '24px 48px 32px',
    backgroundColor: '#ffffff',
    borderRadius: '0 0 8px 8px'
  },
  infoBox: {
    marginBottom: '24px',
    padding: '24px',
    backgroundColor: '#f8f9fa',
    borderRadius: '6px'
  },
  messageBox: {
    marginBottom: '24px',
    padding: '24px',
    backgroundColor: '#f8f9fa',
    borderRadius: '6px'
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#666666',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    marginBottom: '12px'
  },
  field: {
    fontSize: '14px',
    color: '#1a1a1a',
    margin: '0 0 8px',
    lineHeight: '1.6'
  },
  message: {
    fontSize: '14px',
    color: '#1a1a1a',
    margin: '0',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap' as const
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none'
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '12px 24px',
    margin: '16px 0 0'
  },
  divider: {
    borderColor: '#e6e6e6',
    margin: '32px 0'
  },
  footer: {
    textAlign: 'center' as const
  },
  footerText: {
    fontSize: '12px',
    color: '#666666'
  }
} as const;
