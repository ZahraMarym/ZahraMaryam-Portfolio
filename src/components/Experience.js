import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'Cansol Consulting',
        role: 'MERN Stack Developer',
        period: 'July 15, 2024 – Present',
        description: 'Currently contributing as a MERN Stack Developer, focusing on building dynamic web applications that solve real-world business challenges. Engaged in full-stack development, optimizing user experiences through effective front-end design and robust back-end architecture. Collaborating closely with cross-functional teams to deliver high-quality solutions that meet client needs.',
      },
    {
      company: 'Inotech Solutions',
      role: 'AI & MERN Stack Developer',
      period: 'July 2024 – Aug 2024',
      description: 'Successfully developed **LinguaVault**, an innovative voice-matching tool that leverages the MERN stack and Hugging Face models for real-time audio transcription and language translation. This project enhanced user interaction through seamless voice recognition and efficient data processing, contributing to improved accessibility in language services.',
    },
    {
      company: 'CodeAlpha',
      role: 'MERN Stack Developer',
      period: 'May 2024',
      description: 'Played a key role in the development of several applications, including a sophisticated chatbot integration and a responsive personal portfolio. Utilized the MERN stack to create a social media dashboard that features dynamic data visualization and user authentication, enhancing overall user engagement and satisfaction.',
    }
  ];
  

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-accent mb-10">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative my-6 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-10 rounded-lg"></div>
              <h3 className="text-2xl font-semibold text-accent relative z-10">{exp.role}</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200 relative z-10">{exp.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 relative z-10">{exp.period}</p>
              <p className="text-base text-gray-700 dark:text-gray-300 relative z-10">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
