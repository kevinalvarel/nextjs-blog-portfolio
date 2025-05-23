"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import SpotlightCard from "./ui/SpotlightCard";
const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Coffee Shop",
      tags: ["Vite", "React", "TailwindCSS"],
      description: "Landing Page for Coffeee Shop",
      fullDescription:
        "This project uses Tailwind CSS and Vite + React for front-end ",
      image: "/CoffeeShop.png",
      link: "https://neggvscoffee.netlify.app/",
      techStack: ["React", "Vite", "Tailwind"],
    },
    {
      id: 2,
      title: "Ecommerce",
      tags: ["NextJs", "React", "TailwindCSS"],
      description: "Ecommerce landing page with Single Page Application",
      fullDescription:
        "This project uses NextJS to build the front-end and Tailwind CSS for Styling",
      image: "/Ecommerce.png",
      link: "https://epocaid.netlify.app/",
      techStack: ["NextJS", "TailwindCSS"],
    },
    {
      id: 3,
      title: "Anime List",
      tags: ["NextJs", "React", "Typescript", "TailwindCSS"],
      description: "Anime List with pagination, and searchbar feature",
      fullDescription:
        "This project uses NextJS to build the front-end and consuming public API",
      image: "/AnimeList.png",
      link: "https://listanime-kohl.vercel.app/",
      techStack: ["NextJS", "TailwindCSS", "Typescript"],
    },
    {
      id: 4,
      title: "Online Course",
      tags: ["NextJs", "React", "Javascript", "TailwindCSS"],
      description: "Online Course landing page",
      fullDescription:
        "This project uses NextJS to build the front-end and TailwindCSS for styling",
      image: "/OnlineCourse.png",
      link: "https://online-course-git-master-kevin-alvarels-projects.vercel.app/",
      techStack: ["NextJS", "TailwindCSS", "Javascript"],
    },
    {
      id: 5,
      title: "Onebee Class",
      tags: ["NextJs", "React", "Aceternity UI", "TailwindCSS"],
      description: "Informatics Engineering Class Website",
      fullDescription:
        "This project uses NextJS to build the front-end and TailwindCSS for styling. Thanks to Aceternity UI for the Components",
      image: "/Onebee.png",
      link: "https://onebeefik.vercel.app/",
      techStack: ["NextJS", "TailwindCSS", "Javascript", "Aceternity UI"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject
    );

    if (currentIndex === -1) {
      return null;
    }

    const nextIndex = (currentIndex + 1) % projects.length;

    setSelectedProject(projects[nextIndex].id);
  };

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject
    );

    if (currentIndex === -1) {
      return null;
    }

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    setSelectedProject(projects[prevIndex].id);
  };

  return (
    <section id="projects" className="px-4 py-36 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <SpotlightCard
            onClick={() => handleProjectClick(project.id)}
            key={index}
            className="cursor-pointer bg-blue-500 backdrop-blur-xs rounded-lg p-6 border border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-xs text-left"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30 "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={projects.find((project) => project.id === selectedProject)}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
};

export default ProjectSection;
