'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LearnPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "화장품 산업에 대한 기본 이해",
      description: "화장품 산업은 제품을 기획하고 제조하여 유통하는 복잡한 가치사슬로 구성됩니다. 이 산업이 어떤 식으로 작동하는지 개괄적으로 알아봅니다.",
      content: [
        { text: "산업 구조: 브랜드 → 제조사(ODM/OEM) → 패키지 공급사 → 유통" },
        { text: "시장 규모: 2023년 글로벌 화장품 시장 규모는 약 5,600억 달러로, 연 5% 이상 성장 중" },
        { text: "산업 분류: 스킨케어, 메이크업, 바디케어, 헤어케어 등" }
      ]
    },
    {
      title: "OEM과 ODM, 무엇이 다를까요?",
      description: "자체 공장을 운영하지 않아도 화장품을 만들 수 있는 방법, 바로 OEM/ODM 방식입니다.",
      content: [
        { text: "OEM (Original Equipment Manufacturer): 브랜드가 기획한 제품을 제조사가 생산" },
        { text: "ODM (Original Development Manufacturer): 제조사가 제품까지 기획하여 브랜드에 제공" },
        { text: "예시: 브랜드 A가 기초 화장품 라인을 ODM에 맡겨 트렌디한 포뮬러를 공급받음" }
      ],
      tip: "ODM은 제품 기획 역량이 부족한 브랜드에게 적합"
    },
    {
      title: "화장품은 어떤 카테고리로 나뉘나요?",
      description: "각 제품은 목적과 사용 방식에 따라 분류됩니다.",
      content: [
        { text: "스킨케어: 토너, 에센스, 크림 등 피부 개선 중심" },
        { text: "메이크업: 파운데이션, 립스틱, 아이섀도우 등" },
        { text: "바디케어/헤어케어: 바디워시, 샴푸, 트리트먼트 등" },
        { text: "선케어/기능성: SPF, 미백, 주름개선 기능 포함" }
      ]
    },
    {
      title: "제품은 어떻게 고객에게 전달될까요?",
      description: "브랜드가 만든 제품은 다양한 경로로 소비자에게 전달됩니다.",
      content: [
        { text: "D2C (Direct to Consumer): 자사몰, 브랜드 SNS" },
        { text: "리테일 입점: 올리브영, 세포라, 드럭스토어" },
        { text: "글로벌 플랫폼: 아마존, 쇼피, 큐텐 등" }
      ],
      trend: "글로벌 수출의 경우 K-뷰티 플랫폼 및 온라인 중심 유통 증가"
    },
    {
      title: "요즘 주목받는 화장품 트렌드는?",
      description: "최근 소비자는 성분과 가치관 중심의 선택을 하고 있어요.",
      content: [
        { text: "클린 뷰티: 유해 성분 배제, 투명한 성분 공개" },
        { text: "기능성 성분 집중: 레티놀, 비타민C, 펩타이드" },
        { text: "AI/테크 뷰티: AI 피부 분석, 맞춤 제품 추천" },
        { text: "지속 가능성: 리필용 패키지, 탄소 중립 생산" }
      ]
    },
    {
      title: "이제 어떤 방향으로 가볼까요?",
      description: "다음 단계를 선택해주세요.",
      content: [
        { text: "나만의 브랜드 만들기" },
        { text: "제품 샘플 찾아보기" },
        { text: "제조사 연결 받기" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F6] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light text-center mb-2 tracking-wide">화장품 산업 알아보기</h1>
          <p className="text-gray-500 text-center mb-16 font-light">단계별로 화장품 산업에 대해 알아보세요</p>

          {/* Progress Bar */}
          <div className="mb-16">
            <div className="flex justify-between mb-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                    index <= currentStep 
                      ? 'border-[#9F8772] bg-[#9F8772] text-white' 
                      : 'border-[#D2C3B6] text-[#D2C3B6]'
                  } transition-all duration-300`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="h-[2px] bg-[#D2C3B6]">
              <div
                className="h-[2px] bg-[#9F8772] transition-all duration-300"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Step Content */}
          <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-8">
            <h2 className="text-2xl font-light mb-3 tracking-wide">{steps[currentStep].title}</h2>
            <p className="text-gray-600 mb-10 font-light">{steps[currentStep].description}</p>
            
            {/* Content Cards */}
            <div className="space-y-4 mb-10">
              {steps[currentStep].content.map((item, index) => (
                <div key={index} className="bg-[#FAF8F6] p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-800 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Additional Info (Tip or Trend) */}
            {steps[currentStep].tip && (
              <div className="bg-[#F6F1E9] p-6 rounded-xl mb-10">
                <p className="text-[#9F8772] font-light">TIP: {steps[currentStep].tip}</p>
              </div>
            )}
            {steps[currentStep].trend && (
              <div className="bg-[#F6F1E9] p-6 rounded-xl mb-10">
                <p className="text-[#9F8772] font-light">TREND: {steps[currentStep].trend}</p>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-[#F6F1E9] text-[#9F8772] hover:bg-[#EFE8E0]'
                }`}
                disabled={currentStep === 0}
              >
                이전
              </button>
              
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  className="px-8 py-3 bg-[#9F8772] text-white rounded-full hover:bg-[#8B7563] transition-all duration-300"
                >
                  다음
                </button>
              ) : (
                <Link
                  href="/journey"
                  className="px-8 py-3 bg-[#9F8772] text-white rounded-full hover:bg-[#8B7563] transition-all duration-300"
                >
                  여정 시작하기
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 