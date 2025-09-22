import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from './components/Navbar'
import Intro from './components/Intro';
import SmallButton from './components/SmallButton';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Contact from "./components/Contact";
import Ending from "./components/Ending";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [contactFormOpen, setContactFormOpen] = useState(false);
    
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='dark:bg-gray-900 relative'>
      <Navbar theme={theme} setTheme={setTheme} contactFormOpen={contactFormOpen} openContactForm={openContactForm} closeContactForm={closeContactForm}/>
      <Intro openContactForm={openContactForm}/>
      <SmallButton/>
      <About/>
      <Experience/>
      <Education/>
      <Project theme={theme} setTheme={setTheme}/>
      <Contact openContactForm={openContactForm}/>
      <Ending/>
    </div>
  );
}

export default App;
