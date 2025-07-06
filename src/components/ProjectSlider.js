import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProjectSlider = ({ projects }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Автоматическое переключение слайдов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  // Переключение на предыдущий слайд
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  // Переключение на следующий слайд
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <div 
      className="relative overflow-hidden rounded-lg border-2 bg-white"
      style={{ 
        borderColor: 'gold',
        boxShadow: '5px 7px 0 0 black',
        transition: 'all 0.5s ease'
      }}
    >
      {/* Контейнер слайдера */}
      <div className="relative h-64 md:h-80">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Фоновое изображение проекта */}
            <div 
              className="h-full w-full bg-cover bg-center rounded-lg"
              style={{ 
                backgroundImage: `url(${project.image})`, 
              }}
            >
              {/* Информация о проекте */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-80 text-black">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm mt-1">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block mt-2 text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  style={{
                    boxShadow: '3px 5px 0 0 gold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  👉 Projektdetails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопки переключения */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;