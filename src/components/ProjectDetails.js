import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ProjectDetails = ({ projects }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.find((p) => String(p.id) === id);

  // Состояние для модального окна
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [current, setCurrent] = useState(0);

  // Прокручиваем страницу вверх при изменении ID проекта
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
      {/* Заголовок и расположение - без рамки и тени */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{projectDetails.title || t(`projects.project_${project.id}_title`)}</h1>
        <p className="text-gray-600">📍 {projectDetails.location} · {projectDetails.period}</p>
      </div>

      {/* Галерея изображений - без обертки */}
      {project.images && (
        <div className="grid grid-cols-3 grid-rows-2 gap-2 items-center mb-8">
          <img
            src={project.images[0].src}
            alt={project.images[0].alt}
            className="row-span-2 col-span-2 w-full h-64 object-cover rounded-xl cursor-pointer"
            style={{
              border: '2px solid gold',
            }}
            onClick={() => openModal(project.images, 0)}
          />
          <img
            src={project.images[1]?.src}
            alt={project.images[1]?.alt}
            className="w-full h-32 object-cover rounded-xl cursor-pointer"
            style={{
              border: '2px solid gold',
            }}
            onClick={() => openModal(project.images, 1)}
          />
          <img
            src={project.images[2]?.src}
            alt={project.images[2]?.alt}
            className="w-full h-32 object-cover rounded-xl cursor-pointer"
            style={{
              border: '2px solid gold',
            }}
            onClick={() => openModal(project.images, 2)}
          />
        </div>
      )}

      {/* Проблема и решение блок */}
      <div className="border-2 bg-white p-5 mb-6 rounded-lg"
        style={{
          borderColor: 'gold',
          boxShadow: '5px 7px 0 0 black',
          transition: 'all 0.5s ease'
        }}>
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
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">📈 {t("common.results")}</h2>
          <div className="text-gray-700 space-y-2">
            {projectDetails.results?.split('\n').map((line, i) => (
              <p key={i} className="text-green-700 font-medium">{line}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Роль и технологии */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border-2 bg-white p-4 rounded-lg"
          style={{
            borderColor: 'gold',
            boxShadow: '5px 7px 0 0 black',
            transition: 'all 0.5s ease'
          }}>
          <h2 className="text-lg font-bold mb-2">👨‍💼 {t("common.role")}</h2>
          <p className="text-gray-700">{projectDetails.role}</p>
        </div>
        
        <div className="border-2 bg-white p-4 rounded-lg"
          style={{
            borderColor: 'gold',
            boxShadow: '5px 7px 0 0 black',
            transition: 'all 0.5s ease'
          }}>
          <h2 className="text-lg font-bold mb-2">🔗 {t("common.technologies")}</h2>
          <p className="text-gray-700">{projectDetails.technologies}</p>
        </div>
      </div>

      {/* Навигация */}
      <div className="flex flex-col md:flex-row justify-between mt-10 pt-4 border-t border-gray-200">
        <Link
          to="/projects"
          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm mb-2 md:mb-0"
          style={{
            boxShadow: '3px 5px 0 0 gold',
            transition: 'all 0.3s ease'
          }}
        >
          {t("common.back_to_all_projects")}
        </Link>
        
        <Link 
          to={`/projects/${nextProjectId}`}
          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
          style={{
            boxShadow: '3px 5px 0 0 gold',
            transition: 'all 0.3s ease'
          }}
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
            className="absolute top-4 right-4 bg-white text-black text-2xl rounded-full w-12 h-12 flex items-center justify-center border-2"
            style={{
              borderColor: 'gold',
              boxShadow: '3px 5px 0 0 black',
              transition: 'all 0.3s ease'
            }}
            onClick={closeModal}
            aria-label={t("common.close")}
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black text-3xl rounded-full w-12 h-12 flex items-center justify-center border-2"
            style={{
              borderColor: 'gold',
              boxShadow: '3px 5px 0 0 black',
              transition: 'all 0.3s ease'
            }}
            onClick={prevImage}
            aria-label={t("common.previous")}
          >
            &#8592;
          </button>
          <img
            src={modalImages[current]?.src}
            alt={modalImages[current]?.alt}
            className="max-h-[80vh] max-w-[90vw] rounded-lg"
            style={{
              border: '3px solid gold',
              boxShadow: '5px 7px 0 0 black'
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black text-3xl rounded-full w-12 h-12 flex items-center justify-center border-2"
            style={{
              borderColor: 'gold',
              boxShadow: '3px 5px 0 0 black',
              transition: 'all 0.3s ease'
            }}
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