import React from "react";

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Обо мне</h1>
      <p className="text-lg">
        Привет! Меня зовут Maksym, и я разработчик с опытом работы в создании
        современных веб-приложений. Я специализируюсь на React, Tailwind CSS и
        других современных технологиях.
      </p>
      <p className="text-lg mt-4">
        В этом портфолио вы найдёте мои проекты, навыки и контактную информацию.
        Спасибо, что посетили мой сайт!
      </p>

      {/* Секция навыков */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Мои навыки и больше</h2>
      <ul className="list-disc list-inside text-lg">
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>Node.js</li>
        <li>Git и управление версиями</li>
      </ul>

      {/* Секция с изображением (опционально) */}
      <div className="mt-8">
        <img
          src="/assets/images/avatar.jpeg"
          alt="Maksym"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <p className="text-center text-sm mt-4 text-gray-500">
          Это я! Спасибо, что посетили мой сайт.
        </p>
      </div>
    </div>
  );
};

export default About;
