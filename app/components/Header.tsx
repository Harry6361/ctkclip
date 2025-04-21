'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Formula', label: 'FORMULA', href: '/formula' },
    { name: 'Package', label: 'PACKAGE', href: '/package' },
    { name: 'LogoAndGo', label: 'LOGO&GO', href: '/logo-and-go' },
    { name: 'Inspiration', label: 'INSPIRATION', href: '/inspiration' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white border-b border-[#E8E2D7]">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo_b.png" 
              alt="CTKCLIP" 
              width={120} 
              height={40} 
              className="h-8 w-auto" 
              priority 
            />
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wider font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#9F8772]'
                    : 'text-gray-800 hover:text-[#9F8772]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-sm text-gray-800 hover:text-[#9F8772] transition-colors duration-200">
              로그인
            </button>
            <button className="text-sm bg-[#9F8772] text-white px-6 py-2.5 rounded-full hover:bg-[#8B7563] transition-all duration-200">
              시작하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-[#9F8772] font-medium'
                      : 'text-gray-800 hover:text-[#9F8772]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#E8E2D7]">
                <button className="text-sm text-gray-800 hover:text-[#9F8772] transition-colors duration-200 w-full text-left py-2">
                  로그인
                </button>
                <button className="text-sm bg-[#9F8772] text-white px-6 py-2.5 rounded-full hover:bg-[#8B7563] transition-all duration-200 w-full mt-4">
                  시작하기
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 