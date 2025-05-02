import { FloatingNav } from '@/components/ui';

const navItems = [
  {
    name: 'Nosotros',
    link: '/nosotros'
  },
  {
    name: 'Servicios',
    link: '/servicios'
  },
  {
    name: 'Contacto',
    link: '/contacto',
    highlighted: true
  }
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 w-full">
      <FloatingNav navItems={navItems} />
    </nav>
  );
};
