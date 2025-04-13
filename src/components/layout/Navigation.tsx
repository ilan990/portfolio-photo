import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md text-gray-900 shadow-sm' : 'bg-transparent text-white'
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-playfair">
          ML
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative py-2 transition-colors hover:text-accent ${
                  pathname === item.href ? 'text-accent' : ''
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-accent bottom-0"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed inset-0 bg-white z-40"
            >
              <div className="container h-full flex flex-col items-center justify-center">
                <ul className="space-y-8 text-center">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-2xl font-playfair ${
                          pathname === item.href ? 'text-accent' : 'text-gray-900'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
