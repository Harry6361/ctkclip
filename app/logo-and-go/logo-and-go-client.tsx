'use client';

import React, { useEffect, useRef } from 'react';

export default function LogoAndGoClient() {
  const hasOpenedWindow = useRef(false);

  useEffect(() => {
    if (!hasOpenedWindow.current) {
      window.open('https://www.ctkclip.com/ko/inspiration', '_blank');
      hasOpenedWindow.current = true;
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-light mb-6 tracking-wide">LOGO&GO</h1>
            <p className="text-xl text-gray-600 font-light mb-12">
              브랜드의 시작, 로고부터 패키지까지
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 font-light">
                새 창이 열리지 않는 경우{' '}
                <a
                  href="https://www.ctkclip.com/ko/inspiration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  여기를 클릭
                </a>
                해 주세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 