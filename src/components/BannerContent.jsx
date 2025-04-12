import React from 'react';
import Typewriter from './Typewriter';

const BannerContent = () => {
  const roles = ['UI Engineer', 'Frontend Developer', 'React Developer'];

  return (
    <>
      <h1
        className="font-bold text-left text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-[#E3ECFF] mb-12 sm:mb-16 animate-fade-in-up"
        id="home"
        style={{ lineHeight: '1.2' }}
      >
        Hi, I'm Twinkle Bhardwaj,
        <br />
        <span className="text-left block animate-fade-in-up-delay-1">
          a <Typewriter words={roles} delay={2000} typingSpeed={100} deletingSpeed={50} className="typewriter-gradient" />.
        </span>
      </h1>

      <div className="designation text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#E3ECFF] mb-8 mx-auto">
        FRONT-END DEVELOPER
      </div>

      <p className="text-center text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#E3ECFF] mb-4 mx-auto">
        Specialized in <span className="tech-stack">ReactJs</span> and <span className="tech-stack">UI Architecture</span>
      </p>

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-center gap-4 mt-6 mb-8 animate-fade-in-up-delay-3">
        <a href="mailto:mrtwinkle@outlook.com" className="gradient-outline-btn w-full sm:w-auto text-center hover:scale-105 transition-transform duration-300">
          Say Hi
        </a>
        <a href="/twinkle_bhardwaj_resume.pdf" target="_blank" rel="noopener noreferrer" className="gradient-outline-btn w-full sm:w-auto text-center hover:scale-105 transition-transform duration-300">
          Resume
        </a>
      </div>
    </>
  );
};

export default BannerContent;
