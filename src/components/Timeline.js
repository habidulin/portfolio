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

const Timeline = () => {
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState(null);
  const timelineRef = useRef(null);
  const yearRefs = useRef({});

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
    <div className="relative min-h-screen max-w-2xl mx-auto py-8 overflow-y-auto" ref={timelineRef}>
      {/* Вертикальная линия */}
      <div className="absolute left-8 top-0 bottom-0 border-l-2 border-black" 
           style={{ borderDasharray: "6 8" }}></div>

      {/* Годы и события */}
      <div className="relative">
        {timelineData.map((item) => (
          <div
            key={item.id}
            className="mb-16 relative"
            ref={(el) => (yearRefs.current[item.id] = el)}
            data-year={item.year}
          >
            {/* Год и точка */}
            <div className="flex items-center">
              {/* Точка */}
              {/* <div 
                className={`ml-2 w-4 h-4 rounded-full border-2 z-10 -translate-x-1/2 transition-all duration-300
                          ${activeYear === item.year 
                            ? 'bg-blue-600 border-white' 
                            : 'bg-white border-gray-400'}`}
              ></div> */}
              
              {/* Год справа от точки в прямоугольнике */}
              <div 
                className={`absolute left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 px-2 py-1 rounded-md z-10
                          ${activeYear === item.year 
                            ? 'text-white bg-blue-600 border-2 border-black transform scale-110' 
                            : 'text-gray-700 bg-white border-2 border-black'}`}
                style={{
                  boxShadow: '3px 5px 0 0 gold',
                  transition: 'all 0.5s ease',
                }}  
              >
                {item.year}
              </div>
              
              {/* Горизонтальная линия */}
              {/* <div className="border-t-2 border border-black flex-grow ml-12"></div> */}
            </div>

              {/* Линия от содержимого к году с ромбиком */}
              {/* <div className="absolute left-20 top-1/2 w-3 h-3 transform rotate-45 z-10 border-2 bg-white"
                style={{ 
                  marginTop: '-6px',
                  borderColor: 'gold'
                }}>
              </div> */}
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
                  <p className="text-gray-600 mt-1 text-base">
                    {t(`timeline.year_${item.year}_desc`)}
                  </p>
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