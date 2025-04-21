'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CreatePage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Entry Page",
      content: "브랜드 기획 시작",
      description: "당신만의 특별한 브랜드를 만들어보세요."
    },
    {
      title: "Info Selection",
      content: "브랜드 정보 입력",
      description: "브랜드 이름, 컨셉, 타겟 고객층을 설정하세요."
    },
    {
      title: "Development Steps",
      content: "개발 단계 설정",
      description: "제품 개발을 위한 단계별 계획을 수립하세요."
    },
    {
      title: "Formula",
      content: "제품 포뮬러 선택",
      description: "제품의 주요 성분과 효과를 선택하세요."
    },
    {
      title: "List",
      content: "제품 라인업",
      description: "출시할 제품 라인업을 구성해보세요."
    },
    {
      title: "Report",
      content: "기획 보고서",
      description: "지금까지의 기획 내용을 정리해보세요."
    },
    {
      title: "Goal",
      content: "브랜드 완성",
      description: "축하합니다! 브랜드 기획이 완성되었습니다."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">나만의 브랜드 만들기</h1>
          <p className="text-gray-600 text-center mb-12">단계별로 브랜드를 만들어보세요</p>

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