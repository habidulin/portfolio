import React from "react";
import { useParams, Link } from "react-router-dom";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return <div className="p-4">Проект не найден</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4">{project.description}</p>
      {/* Здесь можно добавить картинки, детали и т.д. */}
      <Link
        to="/projects"
        className="text-blue-500 underline"
      >
        Вернуться в проекты 👈
      </Link>
    </div>
  );
};

export default ProjectDetails;