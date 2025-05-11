'use client'

import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top button */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center -mt-8">
          <motion.button
            onClick={scrollToTop}
            className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Eliakim William</h3>
            <p className="text-gray-300 mb-6">
              Passionate Full Stack Developer specializing in creating modern, 
              responsive web applications with clean code and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/username" 
                target="_blank" 
                rel="noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors"
              >
                <FiGithub size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/username" 
                target="_blank" 
                rel="noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors"
              >
                <FiLinkedin size={18} />
              </a>
              <a 
                href="https://twitter.com/username" 
                target="_blank" 
                rel="noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors"
              >
                <FiTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Dar es Salaam, Tanzania</li>
              <li>
                <a href="mailto:eliakim@example.com" className="text-gray-300 hover:text-primary transition-colors">
                  eliakim@example.com
                </a>
              </li>
              <li>
                <a href="tel:+255123456789" className="text-gray-300 hover:text-primary transition-colors">
                  +255 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Eliakim William. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, Tailwind CSS and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;