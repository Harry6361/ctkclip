import React from 'react';

const PackagePage = () => {
  const categories = {
    skincare_makeup: {
      title: '스킨케어 / 메이크업',
      subcategories: [
        { 
          name: '에어리스',
          items: [
            '에어리스 펌프 보틀',
            '이물리케이터 타입',
            '에어리스 자',
            '기타'
          ]
        },
        {
          name: '디퓨저',
          items: []
        },
        {
          name: '거품펌프',
          items: []
        },
        {
          name: '점시펌프',
          items: []
        },
        {
          name: '미스트',
          items: [
            '일반 미스트',
            '파인 미스트',
            '에어리스 / 360° 분사'
          ]
        },
        {
          name: '스포이드',
          items: [
            '고무 타입',
            '버튼 타입',
            '오토 루팅 타입',
            '앰플 타입'
          ]
        }
      ]
    },
    tube: {
      title: '튜브',
      subcategories: [
        { 
          name: '에어리스 펌프 튜브',
          items: []
        },
        {
          name: '일반 단일 튜브',
          items: []
        },
        {
          name: '원터치형 튜브',
          items: []
        },
        {
          name: '이물리케이터 팁 튜브',
          items: []
        }
      ]
    },
    lip: {
      title: '립',
      subcategories: [
        { 
          name: '립스틱',
          items: []
        },
        {
          name: '립글로스 / 립틴트',
          items: []
        },
        {
          name: '립밤',
          items: []
        },
        {
          name: '립라이너',
          items: []
        },
        {
          name: '멀티 타입',
          items: []
        }
      ]
    },
    jar: {
      title: '자',
      subcategories: [
        { 
          name: '플라스틱 단층기',
          items: []
        },
        {
          name: '플라스틱 이중용기',
          items: []
        },
        {
          name: '초자 유리',
          items: []
        },
        {
          name: '금속',
          items: []
        },
        {
          name: '패드 / 패치 용',
          items: []
        },
        {
          name: '기타',
          items: []
        }
      ]
    },
    bottle: {
      title: '보틀',
      subcategories: [
        { 
          name: 'PETG',
          items: []
        },
        {
          name: 'PET',
          items: []
        },
        {
          name: 'PE',
          items: []
        },
        {
          name: '초자 유리',
          items: []
        },
        {
          name: '기타',
          items: []
        }
      ]
    },
    tottle: {
      title: '토틀',
      subcategories: [
        { 
          name: '스틱',
          items: [
            '베이스 / 바디 스틱'
          ]
        }
      ]
    },
    compact: {
      title: '컴팩트',
      subcategories: [
        { 
          name: '쿠션 컴팩트',
          items: []
        },
        {
          name: '에어리스 컴팩트',
          items: []
        },
        {
          name: '1종 펜드',
          items: []
        }
      ]
    },
    multi_palette: {
      title: '멀티홀 팔레트',
      subcategories: [
        { 
          name: '루즈 파우더',
          items: []
        }
      ]
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Package</h1>
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

export default PackagePage; 