import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-light dark:bg-dark text-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-accent mb-6">About Me</h2>
        <p className="max-w-5xl mx-auto text-xl text-secondary dark:text-textDark">
        I am Zahra Maryam, a dedicated and results-driven Software Engineer with a strong foundation in full-stack development, specializing in the MERN stack (MongoDB, Express, React, and Node.js). With a solid academic background from the National University of Sciences and Technology (NUST) and hands-on experience in AI/ML integration, I bring a unique blend of creativity and technical expertise. My work spans developing dynamic web applications, AI-powered tools, and interactive user interfaces. I am passionate about using technology to solve real-world problems and thrive in fast-paced, collaborative environments, always striving for excellence in every project.        </p>
      </motion.div>
    </section>
  );
};

export default About;
