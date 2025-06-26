import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-white text-black transition-all duration-300"
    >
      <h3 className="text-lg text-gray-500 mb-2">Get in Touch</h3>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Me</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-5 border-2 border-gray-300 rounded-2xl shadow-md bg-white">
        <a
          href="mailto:sasidhar4524@gmail.com"
          className="flex items-center gap-3 text-lg font-medium hover:text-blue-600 transition"
        >
          <FaEnvelope className="text-xl" />
          sasidhar4524@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg font-medium hover:text-blue-600 transition"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-600">
        <div className="flex justify-center gap-6 mt-6 text-base">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <p className="mt-4">
          © {new Date().getFullYear()} Sasidhar. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
