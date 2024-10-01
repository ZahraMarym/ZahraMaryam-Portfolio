import React from 'react';
import { motion } from 'framer-motion';
import heroImage from "../assests/hero.jpg"

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex justify-center items-center overflow-hidden bg-gray-100 dark:bg-gray-900" 
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`, opacity: 0.5 }} 
      ></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center bg-black bg-opacity-80 p-9 rounded-lg z-10" 
      >
        <h1 className="text-5xl font-bold text-accent">Hi, I'm Zahra Maryam</h1>
        <p className="text-xl mt-4 text-light dark:text-white">
          <span className="font-bold text-2xl">Software Engineer</span><br />
          Passionate MERN Developer | AI/ML Enthusiast | Crafting Intelligent Solutions
        </p>
        <div className="mt-6">
          <a
            href="https://www.linkedin.com/in/zahra-maryam"
            className="bg-accent text-white px-6 py-3 mt-3 rounded-full mr-4 shadow-lg"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ZahraMarym"
            className="bg-secondary text-white px-6 py-3 mt-3 rounded-full shadow-lg"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
