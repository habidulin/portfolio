import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ProjectDetails = ({ projects }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);

  // Состояние для модального окна
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [current, setCurrent] = useState(0);

  if (!project) {
    React.useEffect(() => {
      navigate('/projects');
    }, [navigate]);
    return null;
  }

  // Получаем детальную информацию из переводов
  const projectDetails = t(`projects.project_details.${id}`, { returnObjects: true });
  
  // Следующий проект для навигации
  const nextProjectId = projects.find(p => p.id > project.id)?.id || projects[0].id;
    
  // Функции для модального окна
  const openModal = (images, index) => {
    setModalImages(images);
    setCurrent(index);
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
    <div className="p-4 max-w-4xl mx-auto">
      {/* Заголовок и расположение */}
      <h1 className="text-3xl font-bold mb-2">{projectDetails.title || t(`projects.project_${project.id}_title`)}</h1>
      <p className="text-gray-600 mb-6">📍 {projectDetails.location} · {projectDetails.period}</p>

      {/* Галерея изображений */}
      {project.images && (
        <div className="mb-8">
          <div className="grid grid-cols-3 grid-rows-2 gap-2 items-center">
            <img
              src={project.images[0].src}
              alt={project.images[0].alt}
              className="row-span-2 col-span-2 w-full h-64 object-cover rounded-xl shadow-lg cursor-pointer"
              onClick={() => openModal(project.images, 0)}
            />
            <img
              src={project.images[1]?.src}
              alt={project.images[1]?.alt}
              className="w-full h-32 object-cover rounded-xl shadow cursor-pointer"
              onClick={() => openModal(project.images, 1)}
            />
            <img
              src={project.images[2]?.src}
              alt={project.images[2]?.alt}
              className="w-full h-32 object-cover rounded-xl shadow cursor-pointer"
              onClick={() => openModal(project.images, 2)}
            />
          </div>
        </div>
      )}

      {/* Проблема */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">❗ {t("common.problem")}</h2>
        <p className="text-gray-700">{projectDetails.problem}</p>
      </div>

      {/* Решение */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">💡 {t("common.solution")}</h2>
        <div className="text-gray-700 space-y-2">
          {projectDetails.solution?.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      {/* Результаты */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">📈 {t("common.results")}</h2>
        <div className="text-gray-700 space-y-2">
          {projectDetails.results?.split('\n').map((line, i) => (
            <p key={i} className="text-green-700 font-medium">{line}</p>
          ))}
        </div>
      </div>

      {/* Роль и технологии */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-lg font-bold mb-2">👨‍💼 {t("common.role")}</h2>
          <p className="text-gray-700">{projectDetails.role}</p>
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-2">🔗 {t("common.technologies")}</h2>
          <p className="text-gray-700">{projectDetails.technologies}</p>
        </div>
      </div>

      {/* Навигация */}
      <div className="flex flex-col md:flex-row justify-between mt-10 pt-4 border-t border-gray-200">
        <Link
          to="/projects"
          className="text-blue-500 hover:text-blue-700 mb-4 md:mb-0 flex items-center"
        >
          {t("common.back_to_all_projects")}
        </Link>
        
        <Link 
          to={`/projects/${nextProjectId}`}
          className="text-blue-500 hover:text-blue-700 flex items-center"
        >
          👉 {t("common.next_project")}
        </Link>
      </div>
      
      {/* Модальное окно для просмотра изображений */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-black text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-gray-300 transition"
            onClick={closeModal}
            aria-label={t("common.close")}
          >
            &times;
          </button>
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

ProjectDetails.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectDetails;