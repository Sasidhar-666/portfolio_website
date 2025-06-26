import React from "react";
import Slider from "react-slick";
import { projectsData } from "../constants";

const ProjectsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="px-6 py-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg h-full flex flex-col items-center text-center">
              <img src={project.img} alt={project.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm">{project.desc}</p>
              <p className="mt-2 text-xs text-gray-400">Tech: {project.tech}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsSlider;
