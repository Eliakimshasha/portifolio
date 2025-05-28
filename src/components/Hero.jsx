'use client'

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload} from 'react-icons/fi';
import { RiTwitterXFill } from "react-icons/ri";

import { FaWhatsapp } from 'react-icons/fa';
import { PiGlobeLight } from "react-icons/pi";
import { MdOutlineSettingsPhone } from "react-icons/md";

import Image from 'next/image';
import profile from '../../public/assets/img12.jpg';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


  
   const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(e.target.value);
      setCurrentTime(parseFloat(e.target.value));
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section id="home" className="bg-white py-7 md:pb-7 pb-1 flex items-center relative">      
      <div className="container mx-auto px-4">
       <div className='flex print:hidden py-5 flex-col md:flex-row items-center gap-3 md:gap-7 border-b border-gray-400 mb-5 pb-3'>
         <div className="audio-player max-w-md p-4 py-2 bg-gray-200 rounded-lg my-0 md:my-5">
      <audio
        ref={audioRef}
        src="/audio/audio1.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="controls flex items-center  gap-3">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlayPause}
            className="play-pause bg-black text-white p-1 rounded-full"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          
          <div className="time-display text-sm text-gray-600">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        
       <div className='flex-1 flex items-center'>
         <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className=" h-1 bg-white w-full rounded-lg appearance-none cursor-pointer"
        />
       </div>
        
      
      </div>
    </div>
        <div className='text-md '>[ play this track as you read................ ]</div>
       </div>
        <div className="flex flex-col md:flex-row md:items-start items-center justify-between">

          <div className='text-black bg-black/10 mb-3 md:hidden print:hidden px-3 py-[1px] rounded-sm text-xs'>Portfolio</div>
          
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
             Full Stack Engineer, specialize in creating modern, responsive, and scalable web applications. While I have experience across different domains, my current passion lies in blockchain technology. I am actively learning Solidity and Ethers.js to develop decentralized applications (DApps) and smart contracts, aiming to contribute to the evolving Web3 ecosystem.
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
              <div className="relative" onMouseEnter={() => setActiveTooltip(0)} onMouseLeave={() => setActiveTooltip(null)}>
                <a href="https://github.com/Eliakimshasha" target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors inline-block">
                  <FiGithub size={15} />
                </a>
                {activeTooltip === 0 && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                    GitHub
                  </div>
                )}
              </div>
              
              <div className="relative" onMouseEnter={() => setActiveTooltip(1)} onMouseLeave={() => setActiveTooltip(null)}>
                <a href="https://linkedin.com/in/eliakim-undefined-95a411324" target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors inline-block">
                  <FiLinkedin size={15} />
                </a>
                {activeTooltip === 1 && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                    LinkedIn
                  </div>
                )}
              </div>
              
              <div className="relative" onMouseEnter={() => setActiveTooltip(2)} onMouseLeave={() => setActiveTooltip(null)}>
                <a href="https://twitter.com/username" target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors inline-block">
                  <RiTwitterXFill size={15} />
                </a>
                {activeTooltip === 2 && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                    Twitter
                  </div>
                )}
              </div>
              
              <div className="relative" onMouseEnter={() => setActiveTooltip(3)} onMouseLeave={() => setActiveTooltip(null)}>
                <a href="https://wa.me/0683401481" target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors inline-block">
                  <FaWhatsapp size={15} />
                </a>
                {activeTooltip === 3 && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                    WhatsApp
                  </div>
                )}
              </div>
              
              <div className="relative" onMouseEnter={() => setActiveTooltip(4)} onMouseLeave={() => setActiveTooltip(null)}>
                <a href="mailto:eliakimwilliam2@gmail.com" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm transition-colors inline-block">
                  <FiMail size={15} />
                </a>
                {activeTooltip === 4 && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                    Email
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full hidden md:flex md:w-2/5 justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="w-64 h-64 md:w-72 rounded- overflow-hidden md:h-72 relative">
              {!imageLoaded && (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium">
                  EW
                </div>
              )}
            
              <Image
                src={profile}
                alt="Eliakim William"
                className={`w-full h-fit object-cover rounded-lg z-10 absolute -top-[92px] left-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-lg pointer-events-none z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;