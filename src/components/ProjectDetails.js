import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ProjectDetails = ({ projects }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return <div className="p-2">{t("common.not_found")}</div>;
  }

  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-4">{t(`projects.project_${project.id}_title`)}</h1>
      <p className="mb-4">{t(`projects.project_${project.id}_desc`)}</p>
      {/* Здесь можно добавить картинки, детали и т.д. */}
      <Link
        to="/projects"
        className="text-blue-500 underline"
      >
        {t("common.back_to_projects")}
      </Link>
    </div>
  );
};

ProjectDetails.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectDetails;