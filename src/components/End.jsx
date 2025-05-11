'use client'
import React, { useState, useEffect } from 'react';
import { GiSelfLove } from "react-icons/gi";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [viewTime, setViewTime] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);
  
  useEffect(() => {
    // Start timer when component mounts
    const startTime = new Date().getTime();
    
    // Update time every second
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const secondsElapsed = Math.floor((currentTime - startTime) / 1000);
      setViewTime(secondsElapsed);
    }, 1000);
    
    // Check if user has scrolled to the bottom
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // If user scrolled to bottom (with a small buffer)
      if (scrollTop + windowHeight >= documentHeight - 20) {
        setReachedEnd(true);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Format time as MM:SS or HH:MM:SS
  const formatTime = (seconds) => {
    if (seconds < 60) {
      return `${seconds} seconds`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes} minute${minutes !== 1 ? 's' : ''} and ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return `${hours} hour${hours !== 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
  };
  
  return (
    <footer className="container print:hidden text-black py-6 mt-16">
      <div className=" mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-medium flex items-center gap-2">Made with {<GiSelfLove/>} by Eliakim William © {currentYear}</p>
          </div>
          <div className="text-center md:text-right flex flex-col md:flex-row items-center gap-2">
            <p className="text-sm  text-gray-950">
              
               You viewed my portfolio for {formatTime(viewTime)}
               
                
            </p> <p>🚀🚀</p> 
          </div>
        </div>
      </div>
    </footer>
  );
}