'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LearnPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Entry Page",
      content: "화장품 산업에 대한 기본 이해",
      description: "화장품 산업의 전반적인 구조와 시장 동향을 파악해보세요."
    },
    {
      title: "Info Selection",
      content: "관심 분야 선택",
      description: "스킨케어, 메이크업, 헤어케어 등 관심 있는 분야를 선택하세요."
    },
    {
      title: "Manufacturing Process",
      content: "제조 공정 이해",
      description: "화장품이 만들어지는 과정과 필수 공정을 알아보세요."
    },
    {
      title: "Category",
      content: "제품 카테고리",
      description: "다양한 화장품 카테고리와 각각의 특징을 학습하세요."
    },
    {
      title: "Configuration",
      content: "제품 구성",
      description: "화장품의 주요 성분과 제형에 대해 알아보세요."
    },
    {
      title: "Goal",
      content: "학습 목표 달성",
      description: "화장품 산업에 대한 기초 지식을 완성하세요."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">화장품 산업 알아보기</h1>
          <p className="text-gray-600 text-center mb-12">단계별로 화장품 산업에 대해 알아보세요</p>

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