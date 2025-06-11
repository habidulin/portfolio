import React, { useState } from "react";

const images = [
  {
    src: "/assets/images/love.jpg",
    alt: "Александра",
  },
  {
    src: "/assets/images/love2.jpg",
    alt: "Маленькая 1",
  },
  {
    src: "/assets/images/love3.jpg",
    alt: "Маленькая 2",
  },
];

const Love = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openModal = (idx) => {
    setCurrent(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
      <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-6 items-center">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="row-span-2 col-span-2 w-full h-64 object-cover rounded-xl shadow-lg cursor-pointer"
          onClick={() => openModal(0)}
        />
        <img
          src={images[1].src}
          alt={images[1].alt}
          className="w-full h-28 object-cover rounded-xl shadow cursor-pointer"
          onClick={() => openModal(1)}
        />
        <img
          src={images[2].src}
          alt={images[2].alt}
          className="w-full h-28 object-cover rounded-xl shadow cursor-pointer"
          onClick={() => openModal(2)}
        />
      </div>

      {/* Модальное окно для просмотра картинок */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Крестик закрытия */}
          <button
            className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-black text-2xl rounded-full p-2 shadow-lg border-2 border-gray-300 transition"
            onClick={closeModal}
            aria-label="Закрыть"
          >
            &times;
          </button>
          {/* Стрелка влево */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black text-3xl rounded-full p-2 shadow-lg border-2 border-gray-300 transition"
            onClick={prevImage}
            aria-label="Предыдущая"
          >
            &#8592;
          </button>
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Стрелка вправо */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black text-3xl rounded-full p-2 shadow-lg border-2 border-gray-300 transition"
            onClick={nextImage}
            aria-label="Следующая"
          >
            &#8594;
          </button>
        </div>
      )}

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