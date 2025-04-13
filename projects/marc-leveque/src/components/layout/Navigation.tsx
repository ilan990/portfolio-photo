'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isHome ? '' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className={`text-xl tracking-tight ${isHome ? 'text-white' : 'text-black'}`}>
            ML
          </Link>

          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className={`text-sm uppercase tracking-widest hover:opacity-70 transition-opacity ${
                  isHome ? 'text-white' : 'text-black'
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-sm uppercase tracking-widest hover:opacity-70 transition-opacity ${
                  isHome ? 'text-white' : 'text-black'
                }`}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-sm uppercase tracking-widest hover:opacity-70 transition-opacity ${
                  isHome ? 'text-white' : 'text-black'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
