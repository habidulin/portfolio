import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const timelineData = [
  { id: 1, year: 2025 },
  { id: 2, year: 2024 },
  { id: 3, year: 2023 },
  { id: 4, year: 2022 },
  { id: 5, year: 2021 },
  { id: 6, year: 2020 },
  { id: 7, year: 2019 },
  { id: 8, year: 2018 },
  { id: 9, year: 2017 },
  { id: 10, year: 2016 },
  { id: 11, year: 2015 },
];

const Timeline = ({ isCompact = false }) => {
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState(null);
  const timelineRef = useRef(null);
  const yearRefs = useRef({});

  // Если в компактном режиме, показываем только ключевые годы
  const displayData = isCompact 
    ? timelineData.filter(item => [2025, 2023, 2021, 2019, 2017, 2015].includes(item.year))
    : timelineData;

  useEffect(() => {
    const options = {
      threshold: 0.5,
      rootMargin: isCompact ? "-20% 0px -20% 0px" : "-40% 0px -40% 0px"
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
  }, [isCompact]);

  return (
    <div className={`relative ${isCompact ? 'max-h-96 overflow-y-auto' : 'min-h-screen'} max-w-2xl mx-auto ${isCompact ? 'py-4' : 'py-8'} overflow-y-auto`} ref={timelineRef}>
      {/* Вертикальная линия */}
      <div className="absolute left-8 top-0 bottom-0 border-l-2 border-black" 
           style={{ borderDasharray: "6 8" }}></div>

      {/* Годы и события */}
      <div className="relative">
        {displayData.map((item) => (
          <div
            key={item.id}
            className={`${isCompact ? 'mb-8' : 'mb-16'} relative`}
            ref={(el) => (yearRefs.current[item.id] = el)}
            data-year={item.year}
          >
            {/* Год и точка */}
            <div className="flex items-center">              
              {/* Год справа от точки в прямоугольнике */}
              <div 
                className={`absolute left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 px-2 py-1 rounded-md z-10
                          ${activeYear === item.year 
                            ? 'text-white bg-blue-600 border-2 border-black transform scale-110' 
                            : 'text-gray-700 bg-white border-2 border-black'}`}
                style={{
                  boxShadow: '5px 7px 0 0 gold',
                  transition: 'all 0.5s ease',
                }}  
              >
                {item.year}
              </div>
            </div>

            <div className="absolute left-8 top-1/2 w-16 border-t-2 z-5"
              style={{ 
                marginTop: '-1px',
                borderColor: 'gold'
              }}>
            </div>
            
            {/* Содержимое */}
            <div className="pl-24 pr-4 -mt-2">
              <div className="flex pt-4">
                <div className="flex-1 p-3 border-2 bg-white"
                      style={{
                        borderColor: 'gold',
                        boxShadow: '5px 7px 0 0 black',
                        transition: 'all 0.5s ease'
                      }}>
                  <h3 className={`text-base font-bold transition-all duration-300
                                ${activeYear === item.year ? 'text-blue-600' : 'text-gray-800'}`}>
                    {t(`timeline.year_${item.year}_title`)}
                  </h3>
                  {!isCompact && (
                    <p className="text-gray-600 mt-1 text-base">
                      {t(`timeline.year_${item.year}_desc`)}
                    </p>
                  )}
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