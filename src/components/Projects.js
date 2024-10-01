import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'LinguaVault',
    description: 'An AI-powered voice recognition tool that matches user voices to a database, transcribes audio, and translates it into multiple languages. Built using the MERN stack and Hugging Face models, it provides an intuitive interface for seamless language processing.',
    github: 'https://github.com/ZahraMarym/LinguaVault',
  },
  {
    title: 'Safety Scout',
    description: 'A safety monitoring application that provides real-time alerts and analytics to ensure user safety in various environments. Developed with a focus on user experience, this application combines modern web technologies to deliver timely and actionable information.',
    github: 'https://github.com/ZahraMarym/Safety-Scout',
  },
  {
    title: 'Munchify - Food Website',
    description: 'A dynamic food ordering platform that allows users to browse, select, and order meals online. The application is built using the MERN stack and integrates Google Maps API for automatic address location and JWT for user authentication.',
    github: 'https://github.com/ZahraMarym/Munchify-FoodWebsite-',
  },
  {
    title: 'Language Translation Tool',
    description: 'A Python-based language translation application that utilizes the Google Translation API for efficient translation of text between multiple languages. Designed with user-friendliness in mind, it serves as a robust solution for language learners and travelers.',
    github: 'https://github.com/ZahraMarym/Language-Translation-Tool',
  },
  {
    title: 'MusicPlayer App',
    description: 'A feature-rich music streaming application similar to Spotify, built using the MERN stack. It allows users to create playlists, search for songs, and manage their music library seamlessly with cloud storage integration.',
    github: 'https://github.com/ZahraMarym/MusicPlayer',
  },
  {
    title: 'Inventory Management System',
    description: 'An efficient inventory management application that helps businesses track and manage their stock levels in real-time. Built with a user-friendly interface, this system allows users to manage products, suppliers, and orders effortlessly.',
    github: 'https://github.com/ZahraMarym/Inventory-Management-System',
  },
  {
    title: 'Library Management System',
    description: 'A comprehensive library management application designed to streamline the management of library resources. This system enables users to check out and return books, manage memberships, and generate reports, all through an intuitive interface.',
    github: 'https://github.com/ZahraMarym/Library-Management-System',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-accent mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-base mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-300"
              >
                GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
