'use client';

import React from 'react';
import Link from 'next/link';

export default function JourneyPage() {
  const journeyPaths = [
    {
      title: "화장품 산업에 대해 알아보고 싶어요",
      description: "화장품 산업의 전반적인 이해와 제조 과정을 알아보세요",
      path: "/learn"
    },
    {
      title: "나만의 화장품 브랜드를 만들고 싶어요",
      description: "브랜드 개발부터 제품 기획까지 함께 만들어봐요",
      path: "/create"
    },
    {
      title: "제품 출시를 준비하고 싶어요",
      description: "트렌디한 제품 출시를 위한 준비 과정을 안내해드려요",
      path: "/launch"
    },
    {
      title: "새로운 제품을 찾아보고 싶어요",
      description: "최신 트렌드의 제품들을 둘러보세요",
      path: "/products"
    },
    {
      title: "제조사 / 파트너 / 해외 바이어를 찾고 싶어요",
      description: "신뢰할 수 있는 파트너를 찾아보세요",
      path: "/partner"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-4">당신에 대해 알려주세요</h1>
        <p className="text-gray-600 text-center mb-12">아래 카테고리 중 하나를 선택하여 시작해보세요</p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {journeyPaths.map((journey, index) => (
            <Link 
              key={index} 
              href={journey.path}
              className="block"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">{journey.title}</h2>
                    <p className="text-gray-600">{journey.description}</p>
                  </div>
                  <div className="text-blue-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 