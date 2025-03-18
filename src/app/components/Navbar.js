import React from "react";
import { FaHome, FaProjectDiagram, FaBriefcase, FaPhone } from "react-icons/fa";

const navItems = [
  { id: "home", icon: <FaHome fontSize={18} />, label: "Home" },
  { id: "projects", icon: <FaProjectDiagram fontSize={18} />, label: "Projects" },
  { id: "work", icon: <FaBriefcase fontSize={18} />, label: "Work Experience" },
  { id: "contact", icon: <FaPhone fontSize={18} />, label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 shadow-lg flex items-center text-white text-2xl z-50 custom-class-nav">
      {navItems.map((item, index) => (
        <div key={item.id} className="flex items-center">
          <div className="relative group custom-class-nav-item">
            <a href={`#${item.id}`} className="hover:text-blue-500 ">
              {item.icon}
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded-md custom-class-nav-tooltip">
              {item.label}
            </span>
          </div>
          {index !== navItems.length - 1 && <div className="w-px h-6 bg-white"></div>}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
