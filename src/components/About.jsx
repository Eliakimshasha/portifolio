'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <section id="about" className="py-10 md:pt-10 pt-5 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <h2 className="text-2xl font-bold mb-6">About</h2>
          
          <div className="bg-white rounded-lg">
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              With two years of experience as a software developer, I have built a variety of web and mobile applications, along with robust backend APIs. For one year, I worked with a health-tech startup, contributing to wellness infrastructure and customized health solutions for users and organizations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;