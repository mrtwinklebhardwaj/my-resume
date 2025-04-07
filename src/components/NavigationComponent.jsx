import React from 'react';

const NavigationComponent = ({ variant = 'top' }) => {
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  const isBottom = variant === 'bottom';

  return (
    <nav
      className={`
        ${isBottom ? 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/10' : ''}
        w-[300px] h-[48px] rounded-[10px] px-[10px] flex items-center justify-between
        ${isBottom ? '' : 'bg-[#010319] border border-[rgba(245,245,245,0.2)] mx-auto mb-8'}
      `}
    >
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase()}`}
          className="relative text-[#E3ECFF] text-sm font-medium transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#B8A7ED] hover:after:to-[#5050BC]"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default NavigationComponent;
