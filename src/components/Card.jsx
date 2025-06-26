import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc, tech, link, img }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.5 }}
      className="max-w-xs w-full bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-6 flex flex-col"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-t-lg w-full h-40 object-contain p-2 bg-white"
          src={img}
          alt={title}
        />
      </a>

      <div className="flex flex-col justify-between flex-grow p-5 h-full">
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">{desc}</p>
          <p className="text-xs italic text-blue-500">{tech}</p>
        </div>

        <div className="mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            View Project
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
