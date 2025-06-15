import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SkillsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const skills = [
    {
      title: t("skills.skill_frontend_title"),
      details: [
        t("skills.skill_frontend_1"),
        t("skills.skill_frontend_2"),
        t("skills.skill_frontend_3"),
      ],
    },
    {
      title: t("skills.skill_apple_title"),
      details: [
        t("skills.skill_apple_1"),
        t("skills.skill_apple_2"),
        t("skills.skill_apple_3"),
      ],
    },
    {
      title: t("skills.skill_marketing_title"),
      details: [
        t("skills.skill_marketing_1"),
        t("skills.skill_marketing_2"),
        t("skills.skill_marketing_3"),
      ],
    },
    {
      title: t("skills.skill_uiux_title"),
      details: [
        t("skills.skill_uiux_1"),
        t("skills.skill_uiux_2"),
        t("skills.skill_uiux_3"),
      ],
    },
    {
      title: t("skills.skill_business_title"),
      details: [
        t("skills.skill_business_1"),
        t("skills.skill_business_2"),
        t("skills.skill_business_3"),
      ],
    },
    {
      title: t("skills.skill_team_title"),
      details: [
        t("skills.skill_team_1"),
        t("skills.skill_team_2"),
        t("skills.skill_team_3"),
      ],
    },
    {
      title: t("skills.skill_process_title"),
      details: [
        t("skills.skill_process_1"),
        t("skills.skill_process_2"),
        t("skills.skill_process_3"),
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t("menu.skills")}</h1>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md"
          >
            <button
              className="w-full text-left p-2 md:p-4 text-lg font-bold flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="flex-1">{skill.title}</span>
              <span
                className={
                  activeIndex === index
                    ? "text-red-600 text-2xl font-bold ml-2 select-none flex items-center leading-none relative -top-0.5"
                    : "text-blue-600 text-2xl font-bold ml-2 cursor-pointer select-none flex items-center leading-none relative -top-0.5"
                }
                style={{ lineHeight: 1 }}
              >
                {activeIndex === index ? "×" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <ul className="list-disc list-inside p-2 md:p-4 text-gray-700 space-y-2">
                {skill.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
                <li>
                  <Link to="/projects" className="text-blue-500 underline">
                    👉 {t("common.watch_projects")}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAccordion;