'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CTKCLIP.COM과 함께 여행을 떠나보세요
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            여행을 시작해 볼까요?
          </p>
          <Link 
            href="/journey"
            className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 animate-pulse"
          >
            시작하기
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="https://www.ctkclip.com/ko/plp-attribute/325?category=1&low_moq=1"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-4 text-sky-900">상품 개발</h3>
            <p className="text-sky-800 mb-6">
              트렌드를 선도하는 혁신적인 제품을 개발하세요. 전문가들이 함께합니다.
            </p>
            <div className="relative w-full h-64">
              <Image
                src="/images/product-development.png"
                alt="화장품 개발 및 연구"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </a>
          <a 
            href="https://www.ctkclip.com/ko/branding" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-4 text-rose-900">브랜드 개발</h3>
            <p className="text-rose-800 mb-6">
              당신만의 독특한 브랜드 아이덴티티를 만들어보세요. 로고부터 패키지 디자인까지 모든 것을 지원합니다.
            </p>
            <div className="relative w-full h-64">
              <Image
                src="/images/brand-flower.png"
                alt="브랜드 개발 일러스트레이션"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </a>
          <a 
            href="https://www.ctkclip.com/ko/fulfillment" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-900">Fulfillment</h3>
            <p className="text-amber-800 mb-6">
              CTK USA 풀필먼트와 함께라면, 언어 장벽 없이 미국 전역으로 빠르고 효율적인 물류 운영이 가능합니다.
            </p>
            <div className="relative w-full h-64">
              <Image
                src="/images/delivery-truck.png"
                alt="CTK Delivery Truck"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
} 