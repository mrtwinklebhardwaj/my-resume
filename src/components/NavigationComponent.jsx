import React from 'react';

const NavigationComponent = ({ variant = 'top', onSectionChange }) => {
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Notes', 'Contact'];

  const isBottom = variant === 'bottom';

  const handleClick = (item) => {
    const section = item.toLowerCase();
    onSectionChange?.(section);
    
    if (section === 'notes') {
      window.history.pushState({}, '', `#${section}`);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', `#${section}`);
      }
    }
  };

  return (
    <nav
      className={`
        ${isBottom ? 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 sm:backdrop-blur-md backdrop-blur-none bg-[#010319] border border-white/10' : ''}
        w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] h-[40px] xs:h-[48px] rounded-[10px] px-2 xs:px-3 sm:px-4 flex items-center justify-between
        ${isBottom ? '' : 'bg-[#010319] border border-[rgba(245,245,245,0.2)] mx-auto mb-4 xs:mb-8'}
      `}
    >
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(item)}
          className="relative text-[#E3ECFF] text-[10px] xs:text-xs sm:text-sm font-medium transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#B8A7ED] hover:after:to-[#5050BC] whitespace-nowrap"
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default NavigationComponent;
