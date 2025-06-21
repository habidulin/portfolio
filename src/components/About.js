import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-4">{t("about.about_me_title")}</h1>
      <p className="text-base">
        {t("about.about_me_intro")}
      </p>
      <p className="text-base mt-4">
        {t("about.about_me_portfolio")}
      </p>

      {/* Секция навыков */}
      <h2 className="text-2xl font-bold mt-8 mb-4">{t("about.about_skills_title")}</h2>
      <ul className="list-disc list-inside text-base">
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>Node.js</li>
        <li>Git {t("common.and_version_control")}</li>
      </ul>

      {/* Секция с изображением (опционально) */}
      <div className="mt-8">
        <img
          src="/assets/images/avatar.jpeg"
          alt="Maksym"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <p className="text-center text-base mt-4 text-gray-500">
          {t("about.about_me_thanks")}
        </p>
      </div>
    </div>
  );
};

export default About;