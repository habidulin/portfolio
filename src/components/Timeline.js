import React, { useRef, useState, useEffect } from "react";

const timelineData = [
  { 
    year: 2025, 
    title: "Развитие карьеры", 
    description: "Продвижение в карьере фронтенд-разработчика, освоение новых технологий."
  },
  { 
    year: 2024, 
    title: "Запуск портфолио", 
    description: "Создание и публикация персонального портфолио веб-разработчика."
  },
  { 
    year: 2023, 
    title: "Изучение React и Tailwind", 
    description: "Погружение в экосистему React, освоение Tailwind CSS и современных инструментов."
  },
  { 
    year: 2022, 
    title: "Первые достижения", 
    description: "Важные шаги в развитии и образовании."
  },
  { 
    year: 2021, 
    title: "Начало пути", 
    description: "Первые шаги на жизненном пути."
  },
    { 
    year: 2020, 
    title: "Запуск портфолио", 
    description: "Создание и публикация персонального портфолио веб-разработчика."
  },
  { 
    year: 2019, 
    title: "Изучение React и Tailwind", 
    description: "Погружение в экосистему React, освоение Tailwind CSS и современных инструментов."
  },
  { 
    year: 2018, 
    title: "Первые достижения", 
    description: "Важные шаги в развитии и образовании."
  },
  { 
    year: 2017, 
    title: "Начало пути", 
    description: "Первые шаги на жизненном пути."
  },
];

const Timeline = () => {
  const [activeYear, setActiveYear] = useState(null);
  const timelineRef = useRef(null);
  const yearRefs = useRef({});

  // Обновление активного года при прокрутке
  useEffect(() => { 
    const options = {
      threshold: 0.5,
      rootMargin: "-40% 0px -40% 0px" 
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveYear(parseInt(entry.target.getAttribute("data-year"), 10));
          }
        });
      },
      options
    );

    Object.values(yearRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen py-8 overflow-y-auto" ref={timelineRef}>
      {/* Вертикальная линия */}
      <div className="absolute left-2 top-0 bottom-0 border-l-2 border-dashed border-gray-300"></div>

      {/* Годы и события */}
      <div className="relative">
        {timelineData.map((item) => (
          <div
            key={item.year}
            className="mb-16 relative"
            ref={(el) => (yearRefs.current[item.year] = el)}
            data-year={item.year}
          >
            {/* Год и точка */}
            <div className="flex items-center">
              {/* Точка */}
              <div 
                className={`ml-2 w-4 h-4 rounded-full border-2 z-10 -translate-x-1/2
                          ${activeYear === item.year 
                            ? 'bg-blue-600 border-white' 
                            : 'bg-white border-gray-400'}`}
              ></div>
              
              {/* Год справа от точки */}
              <div 
                className={`pl-1 text-base font-bold 
                          ${activeYear === item.year ? 'text-blue-600' : 'text-gray-700'}`}
              >
                {item.year}
              </div>
              
              {/* Горизонтальная линия */}
              <div className="h-0.5 bg-gray-300 flex-grow ml-2"></div>
            </div>
            
            {/* Содержимое */}
            <div className="pl-7 pr-2 -mt-2">
              <div className="flex pt-2">
                <div className="flex-1">
                  <h3 className={`text-base font-semibold 
                                ${activeYear === item.year ? 'text-blue-600' : 'text-gray-800'}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 ml-8">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;