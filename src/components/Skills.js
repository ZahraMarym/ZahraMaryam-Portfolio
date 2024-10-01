// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'ReactJS', level: '90%' },
  { name: 'JavaScript (ES6+)', level: '95%' },
  { name: 'HTML5/CSS3', level: '95%' },
  { name: 'Tailwind CSS', level: '85%' },
  { name: 'Bootstrap', level: '90%' },
  { name: 'Node.js', level: '85%' },
  { name: 'Express.js', level: '80%' },
  { name: 'MongoDB', level: '80%' },
  { name: 'Java/JavaFX', level: '80%' },
  { name: 'MySQL', level: '75%' },
  { name: 'Python', level: '85%' },
  { name: 'Figma (UI/UX Design)', level: '75%' },
  { name: 'Git (Version Control)', level: '90%' },
  { name: 'API Testing (Postman)', level: '85%' },
  { name: 'CV Model Training (YOLO)', level: '80%' },
  { name: 'Content Writing', level: '90%' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-light dark:bg-dark text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-accent mb-10">Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-r from-secondary to-accent shadow-lg relative group hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-2xl font-semibold text-white mb-4">{skill.name}</h4>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="bg-white h-full rounded-full"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-white opacity-80">{skill.level}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
