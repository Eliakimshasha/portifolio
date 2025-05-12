'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuDot } from "react-icons/lu";


const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "Wellness Discovery",
      description: "Your partner in health. A platform that provide tailored wellness plans, expert advice, and holistic care solutions.",
      technologies: ["Next js", "React", "Express js", "AI"],
      clientProject: true
    },
    {
      id: 2,
      title: "Rikwest",
      description: "Rikwest is Bolt like app for ride sharing between drivers and clients in Tanzania",
      technologies: ["Flutter", "Dart", "Python"],
      clientProject: true
    },
    {
      id: 3,
      title: "Kipenzi",
      description: "Tinder for Tanzania, building a dating mobile application for Tanzanians",
      technologies: ["Flutter", "Dart", "Python"],
      clientProject: true
    },
    {
      id: 4,
      title: "Shoket",
      description: "Stripe for developers, a payment processor for developers and small business to easly access payment.",
      technologies: ["Python", "Django", "Payment API"],
      clientProject: false
    },
    {
      id: 5,
      title: "MedPack",
      description: "Built website and dashboard for company dealing with Health facilities products for managing their procurements, inventory and sales.",
      technologies: ["React", "TypeScript", "JavaScript"],
      clientProject: true
    },
    {
      id: 6,
      title: "Payroll app",
      description: "A mobile app for managing payroll within organizations and startups",
      technologies: ["Flutter", "Dart", "Python"],
      clientProject: true
    }
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
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold mb-2 flex gap-2 items-center">{project.title} <LuDot/></div>
                  {project.clientProject ? (
                    <div className="text-[10px] bg-gray-100 text-gray-900 px-2 py-1 rounded">Client Project</div>
                  ): (
                    <div className="text-[10px] bg-gray-100 text-gray-900 px-2 py-1 rounded">Personal Project</div>)}
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;