import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ProjectDetails = ({ projects }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);

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

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Заголовок и расположение */}
      <h1 className="text-3xl font-bold mb-2">{projectDetails.title || t(`projects.project_${project.id}_title`)}</h1>
      <p className="text-gray-600 mb-6">📍 {projectDetails.location} · {projectDetails.period}</p>

      {/* Галерея изображений */}
      {project.images && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            ))}
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
    </div>
  );
};

ProjectDetails.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectDetails;