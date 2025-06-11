import React from "react";

const Love = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4 text-red-500">
        Саша, я тебя люблю!
      </h1>
      <p className="text-base mt-4">Ты — самое важное, что есть в моей жизни.</p>
      <p className="text-base mt-4">
        Спасибо за твою поддержку, улыбку и любовь.
      </p>

      {/* Сетка с одной большой и двумя маленькими картинками */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2 mx-auto mt-6 items-center">
        {/* Главная большая картинка */}
        <img
          src="/assets/images/love.jpg"
          alt="Александра"
          className="row-span-2 col-span-2 w-full h-64 object-cover rounded-xl shadow-lg"
        />
        {/* Маленькая 1 */}
        <img
          src="/assets/images/love2.jpg"
          alt="Маленькая 1"
          className="w-full h-28 object-cover rounded-xl shadow"
        />
        {/* Маленькая 2 */}
        <img
          src="/assets/images/love3.jpg"
          alt="Маленькая 2"
          className="w-full h-28 object-cover rounded-xl shadow"
        />
      </div>

      <p className="text-base mt-4">
        Этот сайт — не только о моих проектах, но и о том, как сильно я ценю тебя.
      </p>
      <p className="text-base mt-4">
        Ты вдохновляешь меня каждый день становиться лучше. Я счастлив, что ты рядом.
      </p>

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