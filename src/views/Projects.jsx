import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { projectsData } from "../constants";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold text-center">Projects</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">What I Built</h4>

        <div className="mt-8 flex justify-center items-stretch flex-wrap gap-4">
          {projectsData.map((project, idx) => (
            <Card
              key={idx}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              link={project.link}
              img={project.img}
            />
          ))}
        </div>

        <a
          href="https://github.com/Sasidhar-666?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 flex justify-center items-center py-3 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-6"
        >
          Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
