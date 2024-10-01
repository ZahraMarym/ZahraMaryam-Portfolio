import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 bg-secondary dark:bg-gray-900 text-center text-textDark">
      <p>&copy; {new Date().getFullYear()} Zahra Maryam | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
