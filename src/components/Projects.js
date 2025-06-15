import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const projects = [
  {
    id: 1,
    images: [
      { src: "../assets/images/ev1.jpg", alt: "EV 1" },
      { src: "../assets/images/ev2.jpg", alt: "EV 2" },
      { src: "../assets/images/ev3.jpg", alt: "EV 3" },
    ],
  },
  {
    id: 2,
    images: [
      { src: "../assets/images/ev1.jpg", alt: "EV 1" },
      { src: "../assets/images/ev2.jpg", alt: "EV 2" },
      { src: "../assets/images/ev3.jpg", alt: "EV 3" },
    ],
  },
  {
    id: 3,
    images: [
      { src: "../assets/images/ev1.jpg", alt: "EV 1" },
      { src: "../assets/images/ev2.jpg", alt: "EV 2" },
      { src: "../assets/images/ev3.jpg", alt: "EV 3" },
    ],
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      <h2 className="text-2xl font-bold mb-4">{t("menu.projects")}</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border border-gray-300 rounded-lg shadow-md"
          >
            <button
              className="w-full text-left p-2 md:p-4 text-lg font-bold flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="flex-1">{t(`projects.project_${project.id}_title`)}</span>
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
              <div className="p-2 md:p-4 text-gray-700 space-y-4">
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
                <p>{t(`projects.project_${project.id}_desc`)}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-blue-500 underline"
                >
                  👉 {t("common.go_to_project")}
                </Link>
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