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
    description: "Your partner in health. A platform that provides tailored wellness plans, expert advice, and holistic care solutions.",
    technologies: ["Next.js", "React", "Express.js", "AI", "Tailwind CSS"],
    clientProject: true,
    url: "https://bewell.co.tz"
  },
  {
    id: 2,
    title: "Bonsai Works",
    description: "A mining company in Tanzania specializing in sustainable mineral extraction and resource management.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Next.js"],
    clientProject: true,
    url: "https://bonsaiworks.co.tz"
  },
  {
    id: 3,
    title: "GlobalHarvest",
    description: "A company focused on exporting high-quality Tanzanian crops (e.g., coffee, cashews) to international markets.",
    technologies: ["Next.js", "React", "Express.js", "Tailwind CSS"],
    clientProject: true,
    url: "https://globalharvest.co.tz"
  },
  {
    id: 4,
    title: "Explore Africa",
    description: "A tourism platform promoting Tanzanian destinations (e.g., Serengeti, Zanzibar) with booking and travel planning features.",
    technologies: ["Next.js", "React", "Express.js",  "Tailwind CSS"],
    clientProject: true,
    url: "https://exploreafrica.vercel.app"
  },
  {
    id: 5,
    title: "University Abroad",
    description: "A study-abroad consultancy helping Tanzanian students access global education opportunities.",
    technologies: ["Next.js", "React", "Express.js",  "Tailwind CSS"],
    clientProject: true,
    url: "https://uar.vercel.app/" // Add actual URL when available
  },
  {
    id: 6,
    title: "Bonepastor Logistics",
    description: "A logistics company offering freight, warehousing, and supply chain solutions across Tanzania.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    clientProject: true,
    url: "https://bonepastorlogistics.vercel.app/" // Add actual URL when available
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
              className="border border-gray-200 rounded-lg overflow-hidden  transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold mb-2 flex gap-2 items-center">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-gray-500 hover:underline transition-colors"
                    >
                      {project.title}
                    </a>
                    <LuDot/>
                  </div>
                  {project.clientProject ? (
                    <div className="text-[10px] bg-gray-100 text-gray-900 px-2 py-1 rounded">Client Project</div>
                  ): (
                    <div className="text-[10px] bg-gray-100 text-gray-900 px-2 py-1 rounded">Personal Project</div>)}
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="bg-gray-100 text-gray-700 text-[9px] px-2 py-1 rounded"
                    >
                      {tech}
                    </div>
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