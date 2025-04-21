'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo_b.png" alt="CTKCLIP" width={120} height={40} className="h-8 w-auto" priority />
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/learn" className="text-gray-700 hover:text-primary">
              학습하기
            </Link>
            <Link href="/start-brand" className="text-gray-700 hover:text-primary">
              브랜드 시작하기
            </Link>
            <Link href="/professional" className="text-gray-700 hover:text-primary">
              전문가
            </Link>
            <Link href="/operator" className="text-gray-700 hover:text-primary">
              브랜드 운영
            </Link>
            <Link href="/partner" className="text-gray-700 hover:text-primary">
              파트너십
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary">
              로그인
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              시작하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/learn" className="text-gray-700">
                학습하기
              </Link>
              <Link href="/start-brand" className="text-gray-700">
                브랜드 시작하기
              </Link>
              <Link href="/professional" className="text-gray-700">
                전문가
              </Link>
              <Link href="/operator" className="text-gray-700">
                브랜드 운영
              </Link>
              <Link href="/partner" className="text-gray-700">
                파트너십
              </Link>
              <button className="text-gray-700">
                로그인
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                시작하기
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 