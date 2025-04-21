'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                혁신적인 화장품 개발 및<br />
                생산 플랫폼
              </h1>
              <p className="text-lg mb-6">
                CTKCLIP과 함께 당신만의 브랜드를 시작하세요
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
                시작하기
              </button>
            </div>
            <div className="md:w-1/2 flex justify-end space-x-4">
              <img src="/foundation.jpg" alt="Foundation" className="w-40 h-40 rounded-lg object-cover" />
              <img src="/powder.jpg" alt="Powder" className="w-40 h-40 rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">CTKCLIP.COM과 함께 여행을 떠나보세요</h2>
          <div className="text-center mt-8">
            <Link 
              href="/journey"
              className="inline-block bg-gradient-to-r from-[#1B5A7D] via-[#2980b9] to-[#3498db] text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 animate-pulse hover:animate-none border-2 border-white/20"
            >
              여행을 시작해 볼까요?
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">주요 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/product-dev.jpg" alt="제품 개발" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">제품 개발</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/production.jpg" alt="생산 관리" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">생산 관리</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/brand.jpg" alt="브랜드 운영" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">브랜드 운영</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 