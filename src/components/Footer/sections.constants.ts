export const sections = {
  services: {
    title: 'Servicios',
    items: [
      { label: 'Contabilidad', href: '/servicios/contabilidad' },
      { label: 'Impuestos', href: '/servicios/impuestos' },
      { label: 'Asesoría Financiera', href: '/servicios/asesoria' }
    ]
  },
  company: {
    title: 'Empresa',
    items: [
      { label: 'Nosotros', href: '/AboutUs' }, // Updated href
      { label: 'Servicios', href: '/Services' }, // Added new Services link
      { label: 'Equipo', href: '/equipo' },
      { label: 'Contacto', href: '/Contact' } // Updated href
    ]
  },
  resources: {
    title: 'Legal',
    items: [
      { label: 'Términos y Condiciones', href: '/terminos' },
      { label: 'Política de Privacidad', href: '/privacidad' }
    ]
  }
};
