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
    <div className="relative min-h-screen py-8 overflow-y-auto" ref={timelineRef}>
      {/* Вертикальная линия */}
      <div className="absolute left-2 top-0 bottom-0 border-l-2 border-dashed border-gray-300" 
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
              <div 
                className={`ml-2 w-4 h-4 rounded-full border-2 z-10 -translate-x-1/2 transition-all duration-300
                          ${activeYear === item.year 
                            ? 'bg-blue-600 border-white' 
                            : 'bg-white border-gray-400'}`}
              ></div>
              
              {/* Год справа от точки */}
              <div 
                className={`-ml-1 text-base font-bold transition-all duration-300
                          ${activeYear === item.year ? 'text-blue-600' : 'text-gray-700'}`}
              >
                {item.year}
              </div>
              
              {/* Горизонтальная линия */}
              <div className="border-t-2 border-dashed border-gray-300 flex-grow ml-2"></div>
            </div>
            
            {/* Содержимое */}
            <div className="pl-7 pr-4 -mt-2">
              <div className="flex pt-2">
                <div className="flex-1">
                  <h3 className={`text-base font-semibold transition-all duration-300
                                ${activeYear === item.year ? 'text-blue-600' : 'text-gray-800'}`}>
                    {t(`timeline.year_${item.year}_title`)}
                  </h3>
                  <p className="text-gray-600 ml-8">
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