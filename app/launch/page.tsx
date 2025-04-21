'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LaunchPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Entry Page",
      content: "제품 출시 준비",
      description: "성공적인 제품 출시를 위한 준비를 시작해보세요."
    },
    {
      title: "Info Selection",
      content: "시장 정보 선택",
      description: "목표 시장과 유통 채널을 선택하세요."
    },
    {
      title: "Trendy Products",
      content: "트렌드 분석",
      description: "현재 시장의 트렌드와 소비자 니즈를 파악하세요."
    },
    {
      title: "Filters",
      content: "제품 필터링",
      description: "시장성과 실현 가능성을 기준으로 제품을 선별하세요."
    },
    {
      title: "Report",
      content: "출시 전략 보고서",
      description: "마케팅 전략과 판매 계획을 수립하세요."
    },
    {
      title: "Goal",
      content: "출시 준비 완료",
      description: "모든 준비가 완료되었습니다. 이제 출시를 시작하세요!"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">제품 출시 준비하기</h1>
          <p className="text-gray-600 text-center mb-12">단계별로 제품 출시를 준비해보세요</p>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Step Content */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">{steps[currentStep].title}</h2>
            <h3 className="text-xl text-gray-800 mb-4">{steps[currentStep].content}</h3>
            <p className="text-gray-600 mb-8">{steps[currentStep].description}</p>
            
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                className={`px-6 py-2 rounded-md ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
                disabled={currentStep === 0}
              >
                이전 단계
              </button>
              
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  다음 단계
                </button>
              ) : (
                <Link
                  href="/journey"
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  완료
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 