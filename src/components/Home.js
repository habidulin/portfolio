import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectSlider from './ProjectSlider';
import SkillCard from './SkillCard';

// import { projects } from './Projects'; // Импортируем проекты из файла Projects.js

// Временно оставляем Timeline, потом переместим его на страницу About
// import Timeline from "./Timeline";

const Home = () => {
  const { t } = useTranslation();

  // Используем 4 проекта из Projects.js (выбираем первые изображения)
  const featuredProjects = [
    { 
      id: 4,
      // title: t("projects.project_4_title") || "Hotel Booking Platform",
      description: "Fullstack Dev, UI/UX, API Integration, SEO",
      image: "../assets/images/hotel1.jpg"  // Первое изображение из проекта 4
    },
    { 
      id: 5,
      // title: t("projects.project_5_title") || "Digital Marketing System",
      description: "Fullstack Dev, Workflow Design, Internal Tools",
      image: "../assets/images/ev1.jpg"  // Первое изображение из проекта 5
    },
    { 
      id: 7, 
      // title: t("projects.project_7_title") || "Business Automation",
      description: "Business Automation, CRM Systems, Leadership",
      image: "../assets/images/apple4.jpg"  // Первое изображение из проекта 7
    },
    { 
      id: 10, 
      // title: t("projects.project_10_title") || "Bird Tracking App",
      description: "React, API, PostgreSQL",
      image: "../assets/images/lv3.jpg"  // Первое изображение из проекта 10
    },
  ];

  // Временные данные для навыков, позже вынесем в отдельный компонент
  const skills = [
    { 
      icon: "💻", 
      title: "JavaScript & React", 
      description: "Moderne, performante Web-Apps" 
    },
    { 
      icon: "📈", 
      title: "Business-Erfahrung", 
      description: "IT-Unternehmen auf 5 Städte skaliert" 
    },
    { 
      icon: "🎨", 
      title: "UI/UX-Design", 
      description: "Konversionsorientierte Interfaces" 
    },
    { 
      icon: "⚙️", 
      title: "Prozess-Automation", 
      description: "Zeit und Ressourcen sparen" 
    },
    { 
      icon: "👥", 
      title: "Teamleitung", 
      description: "Agile Entwicklungsprozesse" 
    },
    { 
      icon: "📱", 
      title: "Digital Marketing", 
      description: "Google Ads & SEO Optimierung" 
    }
  ];

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {/* Заголовок-призыв */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {t("home.headline") || "Ich baue digitale Lösungen, die Unternehmen wachsen lassen"}
      </h1>
      
      {/* Слайдер проектов (отдельная секция) */}
      <div className="my-12">
        <ProjectSlider projects={featuredProjects} />
      </div>
      
      {/* Краткое представление (отдельная секция) */}
      <div className="my-12">
        <div className="border-2 bg-white p-5 mb-6"
          style={{
            borderColor: 'gold',
            boxShadow: '5px 7px 0 0 black',
            transition: 'all 0.5s ease'
          }}>
          <h2 className="text-2xl font-bold mb-2">Ich heiße Maksym und bin</h2>
          <h3 className="text-xl font-bold mb-3">Full-Stack Developer & Business Optimizer</h3>
          <ul className="mb-4">
            <li className="flex items-center mb-2">
              <span className="text-blue-600 mr-2">🔹</span>
              Automatisierung von Geschäftsprozessen
            </li>
            <li className="flex items-center mb-2">
              <span className="text-blue-600 mr-2">🔹</span>
              Benutzerzentrierte Webentwicklung
            </li>
            <li className="flex items-center mb-2">
              <span className="text-blue-600 mr-2">🔹</span>
              Teamleitung und Skalierung
            </li>
          </ul>
          <Link 
            to="/about" 
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            style={{
              boxShadow: '3px 5px 0 0 gold',
              transition: 'all 0.3s ease'
            }}
          >
            👉 Mehr über mich 
          </Link>
        </div>
      </div>

      {/* Мои преимущества/навыки */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-6">Warum?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;