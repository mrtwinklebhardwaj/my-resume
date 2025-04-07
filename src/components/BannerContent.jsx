import React from 'react';

const BannerContent = () => {
  return (
    <>
      <h1
        className="font-bold text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-[#E3ECFF] text-center mb-12 sm:mb-16"
        id="home"
        style={{ lineHeight: '1.2' }}
      >
        Hi, I’m Twinkle Bhardwaj, a UI Engineer.
      </h1>

      <div className="designation text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#E3ECFF] mb-8 mx-auto">
        FRONT-END DEVELOPER
      </div>

     

      <p className="text-center text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#E3ECFF] mb-4 mx-auto">
        Specialized in <span className="tech-stack">ReactJs</span> and <span className="tech-stack">UI Architecture</span>
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 mb-8">
        <a href="mailto:mrtwinkle@outlook.com" className="gradient-outline-btn w-full sm:w-auto">
          Say Hi
        </a>
        <a href="/twinkle_bhardwaj_resume.pdf" target="_blank" rel="noopener noreferrer" className="gradient-outline-btn w-full sm:w-auto">
          Resume
        </a>
      </div>
    </>
  );
};

export default BannerContent;
