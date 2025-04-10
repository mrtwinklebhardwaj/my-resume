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
    <main className="relative bg-[#010319] ">
      {/* Background layer */}
      <div className="hero-section" />

      {/* Foreground content */}
      <div className="relative z-10 px-8 pt-8 pb-8 max-w-[1440px] mx-auto">
        {/* Top Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-start-5 lg:col-span-8">
            <NavigationComponent />
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sticky Left Card */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 z-10 animate-float3d">
              <IntroCard />
            </div>
          </div>

          {/* Mobile version */}
          <div className="block lg:hidden mb-8">
            <IntroCard />
          </div>

          {/* Right Scrollable Section */}
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

      {/* Bottom Navigation */}
      {showBottomNav && <NavigationComponent variant="bottom" />}
    </main>

  );
};

export default App;
``
