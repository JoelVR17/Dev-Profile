"use client";

import React from "react";
import ProjectCard from "./sub/ProjectCard";
import projectsData from "./sub/ProjectData";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[50px] text-white font-bold mt-[10px] text-center mb-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-5 mx-5">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            icons={project.icons}
            link={project.link}
            url={project.url}
            urlGithub={project.urlGithub}
            twoRepos={project.twoRepos}
            urlGithub2={project.urlGithub2}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
