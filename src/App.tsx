import React from 'react';
import TopMenu from './components/TopMenu';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './ThemeContext';
import TravelMap from './components/Travel';
import Footer from './components/Footer';
// import SkillTimeline from './components/SkillTimeline';

const App = () => {
  return (
    <ThemeProvider>
      <div className="font-sans overflow-x-hidden">
        <TopMenu />
        <Hero />
        <About />
        {/* <SkillTimeline /> */}
        <Experience />
        <Projects />
        <TravelMap />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
