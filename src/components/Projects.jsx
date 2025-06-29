'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuDot } from "react-icons/lu";
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';


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
    title: "Hade Stays",
    description: "A comprehensive accommodation booking platform specializing in East African destinations, offering stays and co-working spaces across Tanzania, Kenya, and South Africa with integrated tour packages.",
    technologies: ["Next.js", "React", "Express.js",  "Tailwind CSS"],
    clientProject: true,
  
    url: "https://hadestays.vercel.app/"
  },
  {
    id: 5,
    title: "Jointly",
    description: "A travel booking platform focused on Tanzanian destinations with flexible payment options, offering safari packages, Mt. Kilimanjaro expeditions, and corporate retreats to make premium travel experiences accessible to all budgets.",
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
      <div className="container relative mx-auto px-4">
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div className="absolute -right-10 -top-[290px] w-[20rem] h-[0rem]  border border-black/10"></div>
            <div className="absolute -right-10 -top-[270px] w-[20rem] h-[0rem]  border border-black/10"></div>
            <div className="absolute -right-10 -top-[280px] w-[20rem] h-[0rem]  border border-black/10"></div>
            <div className="absolute -left-0 -bottom-24 w-[5rem] h-[5rem] rounded-full border border-black/20"></div>
            <div className="absolute -left-0 -bottom-24 w-[7rem] h-[7rem] rounded-full border border-black/20"></div>
            <div className="absolute -left-0 -bottom-24 w-[6rem] h-[6rem] rounded-full border border-black/20"></div>
            <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-[#D4AF37]/10"></div>
            <div className="absolute top-0 right-1/3 w-4 h-4 rounded-full bg-red-900/50"></div>
            <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-[#145C3A]/20"></div>
          </div>
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 relative z-20 md:grid-cols-2 gap-6"
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
                
               <div className='flex items-center   justify-between'>
                 <div className="flex flex-wrap gap-2 ">
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="bg-gray-100 text-gray-700 text-[9px] px-2 py-1 rounded"
                    >
                      {tech}
                    </div>
                  ))}
                </div>









             <Link href='#'>
               <div className='bg-gray-800 cursor-pointer hover:bg-gray-700 p-1 gap-2 flex items-center rounded-sm'>
                  <div className='text-[7px]'><FiGithub size={13} color='white'/> </div>
                  <div className='text-[10px] text-white'>GitHub</div>
                </div>
             </Link>










                <div>
                </div>
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