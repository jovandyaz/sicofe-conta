import { FloatingNav } from '@/components/ui';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 w-full">
      <FloatingNav navItems={[]} />
    </nav>
  );
};
