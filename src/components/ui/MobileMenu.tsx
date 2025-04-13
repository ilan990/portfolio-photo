'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MotionDiv } from './MotionDiv';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  hasScrolled: boolean;
  navigation: { name: string; href: string }[];
  activeSection: string;
}

export default function MobileMenu({ isOpen, onToggle, hasScrolled, navigation, activeSection }: MobileMenuProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className={`md:hidden p-2 rounded-lg transition-colors ${
          hasScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
        }`}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={onToggle}
                  className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </MotionDiv>
    </>
  );
}
