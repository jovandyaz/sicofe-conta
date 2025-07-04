'use client';

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { IconLogo, MenuButton, NavLink, ThemeToggle } from '@/components/ui';
import { SICOFE_LOGO } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    highlighted?: boolean;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    if (!hasScrolled && latest > 0) {
      setHasScrolled(true);
    }

    if (hasScrolled) {
      const previous = scrollY.getPrevious() ?? 0;
      const direction = latest - previous;

      if (latest < 50) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          'fixed z-50 flex w-full items-center justify-between bg-white/80 p-4 backdrop-blur-md dark:bg-[#0f0f19]/80',
          className
        )}
      >
        <Link href="/" className="relative z-10" onClick={handleNavClick}>
          <IconLogo src={SICOFE_LOGO} alt="Sicofe" width={40} height={40} />
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {navItems.map(navItem => (
            <NavLink
              key={`desktop-link-${navItem.name}`}
              href={navItem.link}
              layoutId="desktop-nav"
              highlighted={navItem.highlighted}
            >
              {navItem.name}
            </NavLink>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <MenuButton isOpen={isMenuOpen} toggle={toggleMenu} />
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 right-0 left-0 min-h-screen bg-white/95 px-6 py-20 backdrop-blur-md md:hidden dark:bg-[#0f0f19]/95"
              id="mobile-menu"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map(navItem => (
                  <NavLink
                    key={`mobile-link-${navItem.name}`}
                    href={navItem.link}
                    onClick={handleNavClick}
                    layoutId="mobile-nav"
                    highlighted={navItem.highlighted}
                  >
                    {navItem.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
