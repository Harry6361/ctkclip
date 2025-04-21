'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo_b.png" alt="CTKCLIP" width={120} height={40} className="h-8 w-auto" priority />
            </Link>
            <p className="text-gray-600 mb-4">
              혁신적인 화장품 개발 및 생산 플랫폼
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">연락처: 1234-5678</p>
              <p className="text-gray-600">이메일: contact@ctkclip.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-gray-600 hover:text-primary">
                  학습하기
                </Link>
              </li>
              <li>
                <Link href="/start-brand" className="text-gray-600 hover:text-primary">
                  브랜드 시작하기
                </Link>
              </li>
              <li>
                <Link href="/professional" className="text-gray-600 hover:text-primary">
                  전문가
                </Link>
              </li>
              <li>
                <Link href="/operator" className="text-gray-600 hover:text-primary">
                  브랜드 운영
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">리소스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary">
                  블로그
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-600 hover:text-primary">
                  가이드
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-primary">
                  고객 지원
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">법적 고지</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} CTKCLIP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 