import React, { useState } from "react";

const SkillsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const skills = [
    {
      title: "🧑‍💻 Frontend & Backend Developer",
      details: [
        "Дизайн и разработка сайтов",
        "Вёрстка, настройка серверной логики",
        "Оптимизация, публикация, поддержка",
      ],
    },
    {
      title: "📱 Apple-Reparaturtechniker",
      details: [
        "Диагностика, ремонт, приём клиентов",
        "Управление складом, заказ запчастей",
        "Настройка рабочих мест и оборудования",
      ],
    },
    {
      title: "🎯 Digital Marketing Manager",
      details: [
        "Google Ads: запуск и ведение кампаний",
        "Аналитика, A/B тесты, оптимизация",
        "Работа с UTM-метками, CRM, лендингами",
      ],
    },
    {
      title: "🎨 UI/UX Designer & Visual Branding",
      details: [
        "Прототипы и интерфейсы от руки и в Figma",
        "Полный цикл визуального брендинга",
        "Дизайн визиток, баннеров, листовок",
      ],
    },
    {
      title: "🧩 IT-Business Organizer / Geschäftsführer",
      details: [
        "Построение команды и рабочих процессов",
        "Внедрение CRM, распределение ролей",
        "Управление рекламой, финансами, складом",
      ],
    },
    {
      title: "📋 Projekt- und Teamleiter",
      details: [
        "Набор, обучение и координация сотрудников",
        "Планирование задач и контроль качества",
        "Общение с клиентами, решение нестандартных ситуаций",
      ],
    },
    {
      title: "⚙️ Создатель и интегратор бизнес-процессов",
      details: [
        "Автоматизация процессов: от заказа до учёта",
        "Взаимодействие с подрядчиками и поставщиками",
        "Опыт масштабирования и открытия новых точек",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Мои навыки</h1>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md"
          >
            <button
              className="w-full text-left p-4 text-lg font-bold flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {skill.title}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <ul className="list-disc list-inside p-4 text-gray-700 space-y-2">
                {skill.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAccordion;

/* *** В виде карточек ***

import React from "react";

const SkillsCards = () => {
  const skills = [
    {
      icon: "🧑‍💻",
      title: "Frontend & Backend Developer",
      details: [
        "Дизайн и разработка сайтов",
        "Вёрстка, настройка серверной логики",
        "Оптимизация, публикация, поддержка",
      ],
    },
    {
      icon: "📱",
      title: "Apple-Reparaturtechniker",
      details: [
        "Диагностика, ремонт, приём клиентов",
        "Управление складом, заказ запчастей",
        "Настройка рабочих мест и оборудования",
      ],
    },
    {
      icon: "🎯",
      title: "Digital Marketing Manager",
      details: [
        "Google Ads: запуск и ведение кампаний",
        "Аналитика, A/B тесты, оптимизация",
        "Работа с UTM-метками, CRM, лендингами",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Designer & Visual Branding",
      details: [
        "Прототипы и интерфейсы от руки и в Figma",
        "Полный цикл визуального брендинга",
        "Дизайн визиток, баннеров, листовок",
      ],
    },
    {
      icon: "🧩",
      title: "IT-Business Organizer / Geschäftsführer",
      details: [
        "Построение команды и рабочих процессов",
        "Внедрение CRM, распределение ролей",
        "Управление рекламой, финансами, складом",
      ],
    },
    {
      icon: "📋",
      title: "Projekt- und Teamleiter",
      details: [
        "Набор, обучение и координация сотрудников",
        "Планирование задач и контроль качества",
        "Общение с клиентами, решение нестандартных ситуаций",
      ],
    },
    {
      icon: "⚙️",
      title: "Создатель и интегратор бизнес-процессов",
      details: [
        "Автоматизация процессов: от заказа до учёта",
        "Взаимодействие с подрядчиками и поставщиками",
        "Опыт масштабирования и открытия новых точек",
      ],
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Мои навыки</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md p-4"
          >
            <h2 className="text-xl font-bold mb-2 flex items-center">
              <span className="text-2xl mr-2">{skill.icon}</span>
              {skill.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {skill.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCards;

*/