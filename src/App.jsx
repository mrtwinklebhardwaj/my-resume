import React, { useEffect, useState, useRef } from 'react';
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
import Notes from './components/Notes';

const App = () => {
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [blogs, setBlogs] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const didFetch = useRef(false); 

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@codeaurkahani')
      .then((response) => response.json())
      .then((data) => {
        const posts = data.items || [];

        const filteredPosts = posts.filter(post => post.categories.length > 0);

        // Separate out case studies and blogs
        const caseStudiesList = filteredPosts.filter(post =>
          post.categories.includes('ux-case-study')
        );
        const blogPosts = filteredPosts.filter(post =>
          !post.categories.includes('ux-case-study')
        );

        setCaseStudies(caseStudiesList.slice(0, 4)); // Only latest 4 if needed
        setBlogs(blogPosts.slice(0, 4)); // Only latest 4 blogs
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBottomNav(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Handle initial hash and hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setCurrentSection(hash);
        if (hash !== 'notes') {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentSection === 'notes') {
      return <Notes />;
    }

    return (
      <>
        <BannerContent id="home" />
        <TechStack id="about" />
        <AboutMe />
        <AreaOfExperties />
        <Experience id="experience" />
        <Project id="projects" />
        <Blog blogs={blogs} />
        <CaseStudies posts={caseStudies} />
        <Contact id="contact" />
        <Footer />
      </>
    );
  };

  return (
    <main className="relative bg-[#010319]">
      {/* Background layer */}
      <div className="hero-section" />

      {/* Foreground content */}
      <div className="relative z-10 px-8 pt-8 pb-8 max-w-[1440px] mx-auto">
        {/* Top Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-start-5 lg:col-span-8">
            <NavigationComponent onSectionChange={setCurrentSection} />
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
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      {showBottomNav && <NavigationComponent variant="bottom" onSectionChange={setCurrentSection} />}
    </main>
  );
};

export default App;
