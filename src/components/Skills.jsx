'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    "Next JS",
    "React Native",
    "Express JS",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "SQL",
    "Solidity",
    "Blockchain",
    "Ethers.js",
    "SEO",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={skillVariants}
              id='span'
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xm font-light"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
