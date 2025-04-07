import React, { useEffect, useState } from 'react';
import './index.css';
import 'remixicon/fonts/remixicon.css';

import NavigationComponent from './components/NavigationComponent';
import IntroCard from './components/IntroCard';
import BannerContent from './components/BannerContent';
import TechStack from './components/TechStack';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import AreaOfExperties from './components/AreaOfExperties';
import Project from './components/Project';
import CaseStudies from './components/CaseStudies';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
    const [showBottomNav, setShowBottomNav] = useState(false);

    useEffect(() => {
      const onScroll = () => setShowBottomNav(window.scrollY > 100);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
  return (
    <main className="bg-[#010319]">
      <div className="container mx-auto px-8 pt-8 pb-8">

        {/* Navigation aligned with right side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-start-5 lg:col-span-8">
            <NavigationComponent />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sticky Section */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 self-start h-fit animate-float3d">
            <IntroCard />
          </div>

          {/* Mobile version */}
          <div className="block lg:hidden mb-8">
            <IntroCard />
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-8">
            <BannerContent />
            <TechStack />
            <AboutMe />
            <Experience />
            <AreaOfExperties />
            <Project />
            <CaseStudies />
            <Blog />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
      {showBottomNav && (
        <NavigationComponent variant="bottom" />
      )}
    </main>
  );
};

export default App;
``
