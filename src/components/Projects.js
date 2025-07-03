import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const projects = [
  {
    id: 4,
    images: [
      { src: "../assets/images/hotel1.jpg", alt: "Hotel Booking Site" },
      { src: "../assets/images/hotel2.jpg", alt: "Hotel Room View" },
      { src: "../assets/images/hotel3.jpg", alt: "Hotel Dashboard" },
    ],
    skills: ["Fullstack Dev", "UI/UX", "API Integration", "SEO"],
    problem: "устаревший сайт → 0 онлайн-бронирований",
    result: "+45% бронирований за 2 месяца"
  },
  {
    id: 5,
    images: [
      { src: "../assets/images/ev1.jpg", alt: "Digital Marketing System" },
      { src: "../assets/images/ev2.jpg", alt: "Workflow Diagram" },
      { src: "../assets/images/ev3.jpg", alt: "Results Table" },
    ],
    skills: ["Fullstack", "Workflow Design", "Internal Tools"],
    problem: "хаос в коммуникации маркетинга",
    result: "-70% лишней переписки, +80% прозрачности"
  },
  {
    id: 6,
    images: [
      { src: "../assets/images/se2.jpg", alt: "Growth Marketing" },
      { src: "../assets/images/se1.jpg", alt: "Statistics Dashboard" },
      { src: "../assets/images/se3.jpg", alt: "Instagram UI" },
    ],
    skills: ["Digital Marketing", "Content Strategy", "Team Coordination"],
    problem: "застой в росте соцсетей",
    result: "+19K YouTube, +9K Instagram"
  },
  {
    id: 7,
    images: [
      { src: "../assets/images/apple4.jpg", alt: "Office Space" },
      { src: "../assets/images/apple1.jpg", alt: "CRM Dashboard" },
      { src: "../assets/images/apple2.jpg", alt: "Team Motivation" },
    ],
    skills: ["Business Automation", "CRM Systems", "Leadership"],
    problem: "хаос в операциях, текучка персонала",
    result: "5 офисов, стабильный рост и команда"
  },
  {
    id: 8,
    images: [
      { src: "../assets/images/carwash1.jpg", alt: "Car Wash Website" },
      { src: "../assets/images/carwash2.jpg", alt: "Mobile Version" },
      { src: "../assets/images/carwash3.jpg", alt: "Location Map" },
    ],
    skills: ["Fullstack Dev", "SEO", "UI Design"],
    problem: "оффлайн-бизнес, нет потока клиентов",
    result: "автоматизация записи + стабильный трафик"
  },
  {
    id: 9,
    images: [
      { src: "../assets/images/garage1.jpg", alt: "CRM Interface" },
      { src: "../assets/images/garage2.jpg", alt: "Inventory System" },
      { src: "../assets/images/garage3.jpg", alt: "Service Dashboard" },
    ],
    skills: ["Backend Dev", "Inventory", "Workflow Automation"],
    problem: "хаотичное ведение ремонтов и заказов",
    result: "единая система учёта + рост выработки"
  },
  {
    id: 10,
    images: [
      { src: "../assets/images/lv3.jpg", alt: "Bird Tracking UI" },
      { src: "../assets/images/lv1.jpg", alt: "Migration Map" },
      { src: "../assets/images/lv2.jpg", alt: "API Documentation" },
    ],
    skills: ["React", "API", "PostgreSQL"],
    problem: "нет данных и визуализации редких видов",
    result: "11 000 видов + звуки и карта"
  }
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
    <div className="p-2">
      <h2 className="text-2xl font-bold mb-4">{t("menu.projects")}</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border border-gray-300 rounded-lg shadow-md"
          >
            <button
              className="w-full text-left p-2 md:p-2 text-lg font-bold flex justify-between items-center"
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
              <div className="p-2 md:p-2 text-gray-700 space-y-2">
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
                
                {/* Навыки */}
                {project.skills && (
                  <div className="mt-2">
                    <div className="text-sm font-semibold">🛠️ {t("common.skills")}:</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Проблема */}
                {project.problem && (
                  <div className="mt-2">
                    <div className="text-sm font-semibold">❗ {t("common.problem")}:</div>
                    <div className="text-sm mt-1">{t(`projects.project_${project.id}_problem`) || project.problem}</div>
                  </div>
                )}
                
                {/* Результат */}
                {project.result && (
                  <div className="mt-2">
                    <div className="text-sm font-semibold">📈 {t("common.result")}:</div>
                    <div className="text-sm mt-1 font-medium text-green-700">{t(`projects.project_${project.id}_result`) || project.result}</div>
                  </div>
                )}
                
                <Link
                  to={`/projects/${project.id}`}
                  className="text-blue-500 underline block mt-4"
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
            aria-label={t("common.close")}
          >
            &times;
          </button>
          {/* Стрелка влево */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black text-3xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-gray-300 transition"
            onClick={prevImage}
            aria-label={t("common.previous")}
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
            aria-label={t("common.next")}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;