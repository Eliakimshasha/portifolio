'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

 const experiences = [
  {
    title: "Software Developer",
    company: "Wellness Discovery",
    location: "Remote",
    period: "Feb 2025 - June 2025",
    description: "Developed wellness infrastructure and customized health plans for users and organizations. Built scalable web applications to support health-tech solutions and user management systems.",
    technologies: "Next Js, TypeScript, Tailwind CSS, JavaScript"
  },
  {
    title: "Software Developer",
    company: "Naleng Technologies",
    location: "Intern",
    period: "July 2024 - Feb 2025",
    description: "Built multiple web applications across various domains. Gained extensive experience in full-stack development and worked on diverse client projects.",
    technologies: "Next Js, TypeScript, JavaScript, HTML, Tailwind CSS"
  },
  {
    title: "Software Developer",
    company: "Zalongwa Technologies",
    location: "Intern",
    period: "July 2023 - Nov 2023",
    description: "Developed web applications and gained foundational experience in software development. Worked on various projects to build responsive and user-friendly web solutions.",
    technologies: "JavaScript, React, HTML, Tailwind CSS"
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-semibold text-gray-800">{exp.company}</div>
                </div>
                <div className="text-gray-500 text-sm">
                  <span>{exp.period}</span>
                </div>
              </div>
              
             <div className='flex items-center gap-4 mb-4'>
              <p className="text-gray-600">{exp.title}</p>

              <div className="text-xs font-md text-black bg-black/10 px-3 rounded-sm py-[1px] flex items-center">
                
                  {exp.location}
                </div>
             </div>
              
              <p className="text-gray-700 text-sm">{exp.description}</p>
              
              <div className="text-gray-600 text-[12px]">
                <span className="font-medium">Technologies:</span> {exp.technologies}
              </div>
              
              {index !== experiences.length - 1 && <div className="border-b border-gray-200 my-4"></div>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;