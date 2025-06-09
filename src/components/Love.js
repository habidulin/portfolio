import React from "react";

const Love = () => {
  return (
    <div className="p-4 text-center">
      {/* Заголовок */}
      <h1 className="text-4xl font-bold mb-4 text-red-500">
        Саша, я тебя люблю!
      </h1>

      {/* Текст */}
      <p className="text-lg mt-4">Ты — самое важное, что есть в моей жизни.</p>
      <p className="text-lg mt-4">
        Спасибо за твою поддержку, улыбку и любовь.
      </p>
      <p className="text-lg mt-4">
        Этот сайт — не только о моих проектах, но и о том, как сильно я ценю
        тебя.
      </p>
      <p className="text-lg mt-4">
        Ты вдохновляешь меня каждый день становиться лучше. Я счастлив, что ты
        рядом.
      </p>

      {/* Изображение */}
      <img
        src="/assets/images/love.jpg"
        alt="Александра"
        className="w-64 h-64 rounded-full mx-auto mt-8 shadow-lg"
      />
      {/* Кнопка с алертом для Александры */}
      <button
        onClick={() => alert("Александра, я тебя люблю!")}
        className="bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600 transition duration-300"
      >
        Нажми сюда
      </button>
    </div>
  );
};

export default Love;
