import React from 'react';
import Typewriter from './Typewriter';

const BannerContent = () => {
  const roles = ['think', 'build', 'deploy'];

  return (
    <>
     <h1
  className="font-bold text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-[#E3ECFF] text-center mb-4 sm:mb-12 animate-fade-in-up"
  id="home"
  style={{ lineHeight: '1.2' }}
>
  <div className="block">Hi, I'm Twinkle Bhardwaj,</div>
  <div className="block sm:inline">
    a UI engineer who{' '}
    <span
  className="inline-block min-w-[200px] min-h-[1.5em] text-center font-mono"
>
  <Typewriter 
    words={roles}
    delay={2000}
    typingSpeed={100}
    deletingSpeed={50}
    className="typewriter-gradient"
  />
</span>


  </div>
</h1>


      <div className="designation text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#E3ECFF] mb-8 mx-auto animate-fade-in-up-delay-2">
        FRONT-END DEVELOPER
      </div>

      <p className="text-center text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#E3ECFF] mb-4 mx-auto animate-fade-in-up-delay-2">
        Specialized in <span className="tech-stack">ReactJs</span> and <span className="tech-stack">UI Architecture</span>
      </p>

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-center gap-4 mt-6 mb-8 animate-fade-in-up-delay-3">
        <a href="mailto:mrtwinkle@outlook.com" className="gradient-outline-btn w-full sm:w-auto text-center hover:scale-105 transition-transform duration-300">
          Say Hi
        </a>
        <a href="/Resume_and_portfolio_Twinkle.pdf" target="_blank" rel="noopener noreferrer" className="gradient-outline-btn w-full sm:w-auto text-center hover:scale-105 transition-transform duration-300">
          Resume
        </a>
      </div>
    </>
  );
};

export default BannerContent;
