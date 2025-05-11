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
      title: "Software Engineer",
      company: "Swahilies Inc",
      location: "Remote",
      period: "2020 - Current",
      description: "Built a banking feature for SMEs to access all banking services. Rebuilt mobile app for SMEs bookkeeping and banking. Built a web version of the mobile app for SMEs to access bookkeeping through desktops. Built main internal tools(Dashboards) for management and the company main website.",
      technologies: "React, TypeScript, Flutter, Python"
    },
    {
      title: "Full Stack Developer",
      company: "Cheka Plus",
      location: "Remote",
      period: "2023 - 2024",
      description: "Led the development of a mini-app version of Cheka Plus, strategically aligning with Vodacom's M-Pesa app. System Maintenance and updates of the Cheka Plus mobile application and server infrastructure.",
      technologies: "Flutter, Python, React, TypeScript, JavaScript, Ubuntu, AWS"
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