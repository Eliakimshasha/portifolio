
import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Education from '../components/Education';
import CommandMenu from '../components/CommandMenu';
import End from '../components/End';


export default function Home() {
  return (
    <>
      <Head>
        <title>Eliakim William - Software Developer</title>
      </Head>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <CommandMenu/>
       <End/>
    </>
  );
}