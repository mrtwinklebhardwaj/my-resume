import React from 'react'
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
    return (
        <>
            <section className=" hero-section pb-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-20">
                        <div className="lg:col-span-4"></div>
                        <div className="lg:col-span-1"></div>
                        <div className="lg:col-span-7">
                            <NavigationComponent />
                        </div>
                    </div>
                    <div className="py-2 px-4  grid grid-cols-1 lg:grid-cols-12 gap-4"  >
                        {/* lg-3 column */}
                        <div className="lg:col-span-4">
                          <IntroCard/>
                        </div>
                        <div className="lg:col-span-1"></div>
                        {/* lg-7 column */}
                        <div className="lg:col-span-7 h-[70vh] overflow-y-scroll pr-2 scroll-panel" >
                            <BannerContent />
                            <TechStack />
                            <AboutMe />
                            <Experience />
                            <AreaOfExperties/>
                            <Project />
                            <CaseStudies />
                            <Blog />
                            <Contact />
                            <Footer />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App