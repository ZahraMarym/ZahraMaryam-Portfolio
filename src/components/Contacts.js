import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-light dark:bg-dark text-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-accent mb-6">Contact Me</h2>
        <p className="text-lg text-secondary dark:text-textDark">
          Feel free to reach out to me through the following platforms.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="mailto:zahramarym15@gmail.com"
            className="bg-accent text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/zahra-maryam"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ZahraMarym"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
