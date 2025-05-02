import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Получение данных с бэкенда
    axios
      .get("http://localhost:3000/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Ошибка загрузки проектов", error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Мои проекты</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg">
            <h3 className="text-2xl">{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Перейти к проекту
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
