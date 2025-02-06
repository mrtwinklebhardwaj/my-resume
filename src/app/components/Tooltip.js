import React, { createContext, useContext, useState } from "react";

const TooltipContext = createContext();

export function TooltipProvider({ children }) {
  const [tooltip, setTooltip] = useState(null);

  return (
    <TooltipContext.Provider value={{ tooltip, setTooltip }}>
      {children}
      {tooltip && (
        <div
          className="absolute bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg"
          style={{ top: tooltip.y, left: tooltip.x }}
        >
          {tooltip.text}
        </div>
      )}
    </TooltipContext.Provider>
  );
}

export function Tooltip({ content, children }) {
  const { setTooltip } = useContext(TooltipContext);

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({ text: content, x: rect.left + window.scrollX, y: rect.top + window.scrollY - 30 });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <span className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </span>
  );
}
