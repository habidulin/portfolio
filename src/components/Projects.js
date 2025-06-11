import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Engel&Völkers 2023-2025 🗓",
    description: "Внедрил комплексную систему координации, которая способствует организации информации, сотрудничеству и стратегическому планированию в маркетинговой команде.",
    link: "#",
    images: [
      { src: "../assets/images/ev1.jpg", alt: "EV 1" },
      { src: "../assets/images/ev2.jpg", alt: "EV 2" },
      { src: "../assets/images/ev3.jpg", alt: "EV 3" },
    ],
  },
  {
    id: 2,
    title: "🛒 Online Store",
    description: "Интернет-магазин с корзиной, оплатой и панелью администратора. Стек: React, Node.js, MongoDB.",
    link: "#",
  },
  {
    id: 3,
    title: "📱 Mobile App",
    description: "Мобильное приложение для заметок с синхронизацией и push-уведомлениями. Реализовано на React Native.",
    link: "#",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  // Для хранения картинок текущего проекта
  const [modalImages, setModalImages] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Открыть модалку с нужным массивом картинок
  const openModal = (imagesArr, idx) => {
    setModalImages(imagesArr);
    setCurrent(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Мои проекты</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border border-gray-300 rounded-lg shadow-md"
          >
            <button
              className="w-full text-left p-4 text-lg font-bold flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {project.title}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700 space-y-4">
                {/* Только для Engel&Völkers показываем картинки */}
                {project.images && (
                  <div className="grid grid-cols-3 grid-rows-2 gap-2 items-center">
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="row-span-2 col-span-2 w-full h-40 object-cover rounded-xl shadow-lg cursor-pointer"
                      onClick={() => openModal(project.images, 0)}
                    />
                    <img
                      src={project.images[1].src}
                      alt={project.images[1].alt}
                      className="w-full h-20 object-cover rounded-xl shadow cursor-pointer"
                      onClick={() => openModal(project.images, 1)}
                    />
                    <img
                      src={project.images[2].src}
                      alt={project.images[2].alt}
                      className="w-full h-20 object-cover rounded-xl shadow cursor-pointer"
                      onClick={() => openModal(project.images, 2)}
                    />
                  </div>
                )}
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  👉 Перейти к проекту
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Модальное окно для просмотра картинок */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Крестик закрытия */}
          <button
            className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-black text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-gray-300 transition"
            onClick={closeModal}
            aria-label="Закрыть"
          >
            &times;
          </button>
          {/* Стрелка влево */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black text-3xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-gray-300 transition"
            onClick={prevImage}
            aria-label="Предыдущая"
          >
            &#8592;
          </button>
          <img
            src={modalImages[current]?.src}
            alt={modalImages[current]?.alt}
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Стрелка вправо */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black text-3xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-gray-300 transition"
            onClick={nextImage}
            aria-label="Следующая"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;