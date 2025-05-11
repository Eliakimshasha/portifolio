


'use client'
import './globals.css';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <html lang="en">
      <body>
    <div className="min-h-screen  flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow  mx-auto">
        {children}
      </main>
      {/* <Footer /> */}
    </div></body></html>
  );
};

export default Layout;