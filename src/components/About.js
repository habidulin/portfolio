import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Timeline from "./Timeline"; // Импортируем Timeline компонент

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="p-2">
      {/* Стилизованный заголовок с золотой линией */}
      <h1 className="text-2xl font-bold mb-6 pb-2">
        {t("about.about_me_title")}
      </h1>
      
      {/* Основной блок "Обо мне" */}
      <div className="border-2 bg-white p-5 mb-6 rounded-lg"
        style={{
          borderColor: 'gold',
          boxShadow: '5px 7px 0 0 black',
          transition: 'all 0.5s ease'
        }}>
        <p className="text-base">
          {t("about.about_me_intro")}
        </p>
        <p className="text-base mt-4">
          {t("about.about_me_portfolio")}
        </p>
      </div>

      {/* Секция навыков */}
      <div className="border-2 bg-white p-5 mb-6 rounded-lg"
        style={{
          borderColor: 'gold',
          boxShadow: '5px 7px 0 0 black',
          transition: 'all 0.5s ease'
        }}>
        <h2 className="text-xl font-bold mb-4">🛠️ {t("about.about_skills_title")}</h2>
        <ul className="list-disc list-inside text-base space-y-1">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>Node.js</li>
          <li>Git {t("common.and_version_control")}</li>
        </ul>
        <div className="mt-4">
          <Link 
            to="/skills" 
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            style={{
              boxShadow: '3px 5px 0 0 gold',
              transition: 'all 0.3s ease'
            }}
          >
            👉 {t("common.view_all_skills")}
          </Link>
        </div>
      </div>

      {/* Заголовок для секции Timeline */}
      <h2 className="text-xl font-bold mb-4">📅 {t("about.career_timeline")}</h2>
      <p className="text-base mb-4">
        {t("about.career_summary")}
      </p>
      
      {/* Полная Timeline без кнопки перехода */}
      <div className="mb-8">
        <Timeline isCompact={false} />
      </div>

      {/* Фотография и благодарность */}
      <div className="text-center mt-12 mb-6">
        <img
          src="/assets/images/avatar.jpeg"
          alt="Maksym"
          className="w-32 h-32 rounded-full mx-auto border-2"
          style={{ borderColor: 'gold' }}
        />
        <p className="text-center text-base mt-4 text-gray-700">
          {t("about.about_me_thanks")}
        </p>
      </div>
    </div>
  );
};

export default About;