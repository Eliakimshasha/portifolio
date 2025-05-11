'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload} from 'react-icons/fi';
import { RiTwitterXFill } from "react-icons/ri";

import { FaWhatsapp } from 'react-icons/fa';
import { PiGlobeLight } from "react-icons/pi";
import { MdOutlineSettingsPhone } from "react-icons/md";

import Image from 'next/image';
import profile from '../../public/assets/img11.jpg';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="bg-white py-7 md:pb-7 pb-1 flex items-center relative">      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start items-center justify-between">
          <div className='text-black bg-black/10 mb-3 md:hidden px-3 py-[1px] rounded-sm text-xs'>Portfolio</div>
          <motion.div 
            className="w-full md:w-3/5 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl text-center md:text-start font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hi, I&apos;m Eliakim William
            </motion.h1>
            
            <motion.div 
            className="w-full mb-5 md:hidden rounded-full flex justify-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="w-44 h-44 md:w-72  md:h-72 relative">
              {!imageLoaded && (
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
                  EW
                </div>
              )}
              <Image
                src={profile}
                alt="Eliakim William"
                className={`w-full h-fit object-cover rounded-full absolute -top-9 left-0   ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
              />
            </div>
          </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 text-center md:text-start max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
             Full Stack Engineer With a focus on building financial products. I specialize in creating 
              modern and responsive web applications. Passionate about developing 
              elegant and efficient software that solves real-world problems.
            </motion.p>
            
            <motion.div 
              className="flex print:hidden justify-center md:justify-normal gap-2 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <a 
                href="#contact" 
                className="bg-black hover:bg-black/90 text-white font-semibold py-2 px-5 rounded transition-all flex items-center gap-2"
              >
                Get in Touch <FiMail />
              </a>
              <a 
                href="/resume.pdf" 
                className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 font-semibold py-2 px-5 rounded transition-all flex items-center gap-2"
                download
              >
                Download CV <FiDownload />
              </a>
            </motion.div>

            <motion.div 
              className="hidden print:block justify-center md:justify-normal gap-2 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <a 
                href="#contact" 
                className="text-gray-500 landscape:justify-start  text-center font-semibold   justify-center rounded transition-all flex items-center gap-2"
              >
                <PiGlobeLight /> Dar es salaam, Tanzania
              </a>
              <a 
                href="/resume.pdf" 
                className="text-gray-500 landscape:justify-start text-center   justify-center font-semibold  rounded transition-all flex items-center gap-2"
                download
              >
                <MdOutlineSettingsPhone /> +255 123 456 789
              </a>
            </motion.div>
            
            <motion.div 
              className="flex print:hidden justify-center md:justify-normal space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <a href="https://github.com/username" target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors">
                <FiGithub size={15} />
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors">
                <FiLinkedin size={15} />
              </a>
              <a href="https://twitter.com/username" target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors">
                <RiTwitterXFill size={15} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors">
                <FaWhatsapp size={15} />
              </a>
              <a href="mailto:email@example.com" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors">
                <FiMail size={15} />
              </a>
             
            
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full hidden md:flex md:w-2/5   justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="w-64 h-64 md:w-72  rounded-lg overflow-hidden md:h-72 relative">
              {!imageLoaded && (
                <div className="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
                  EW
                </div>
              )}
              {/* <Image
                src={profile}
                alt="Eliakim William"
                className={`w-full h-fit object-cover rounded-lg absolute -top-[29px] left-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
              /> */}

<Image
                src={profile}
                alt="Eliakim William"
                className={`w-full h-fit object-cover rounded-lg absolute -top-[52px] left-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;