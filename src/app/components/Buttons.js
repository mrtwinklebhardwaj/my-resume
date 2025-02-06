import React from "react";

export function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition duration-300 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    >
      {children}
    </button>
  );
}