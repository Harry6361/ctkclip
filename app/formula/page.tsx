import React from 'react';

const FormulaPage = () => {
  const categories = {
    skincare: {
      title: '스킨케어',
      subcategories: [
        { name: '모이스처라이저', items: ['토너/미스트'] },
        { name: '베이스 모이스처라이저', items: [] },
        { name: '클렌저', items: ['베이스워시/클렌저'] },
        { name: '각질제거제/스크럽제', items: [] },
        { name: '메이크업 리무버', items: [] },
        { name: '트리트먼트/세럼', items: ['세럼/에센스', '베이스 오일', '아이 케어', '립 케어'] },
        { name: '마스크', items: ['베이스 마스크', '시트 마스크', '패드/패치'] },
        { name: '선스크린', items: ['선케어'] }
      ]
    },
    makeup: {
      title: '메이크업',
      subcategories: [
        { name: '페이스', items: ['파운데이션', 'BB/CC', '틴티드모이스처라이저'] },
        { name: '컨실러', items: [] },
        { name: '프라이머/메이크업베이스', items: [] },
        { name: '픽서/세팅 스프레이', items: [] },
        { name: '메이크업 파우더', items: [] },
        { name: '하이라이터/컨투어', items: [] },
        { name: '블러셔', items: [] }
      ]
    },
    bodycare: {
      title: '바디케어',
      subcategories: [
        { name: '샤워/입욕제', items: [] },
        { name: '바디워시', items: [] },
        { name: '바디스크럽', items: [] },
        { name: '핸드워시', items: [] },
        { name: '바디 모이스처라이저', items: [] },
        { name: '바디로션/오일', items: [] },
        { name: '핸드/풋크림', items: [] }
      ]
    },
    haircare: {
      title: '헤어케어',
      subcategories: [
        { name: '샴푸/린스', items: [] },
        { name: '두피 스크럽', items: [] },
        { name: '헤어 에센스', items: [] },
        { name: '헤어 팩/크림', items: [] },
        { name: '토닉/스칼프', items: [] }
      ]
    },
    styling: {
      title: '스타일링',
      subcategories: [
        { name: '왁스/젤', items: [] },
        { name: '헤어 메이크업', items: [] }
      ]
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Formula</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(categories).map(([key, category]) => (
          <div key={key} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
            <ul className="space-y-4">
              {category.subcategories.map((subcat, index) => (
                <li key={index}>
                  <h3 className="font-medium mb-2">{subcat.name}</h3>
                  {subcat.items.length > 0 && (
                    <ul className="pl-4 space-y-1">
                      {subcat.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormulaPage; 