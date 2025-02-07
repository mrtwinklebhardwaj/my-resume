export default function FloatingNavbar() {
    return (
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 p-2 pl-6 pr-6 rounded-lg shadow-lg flex gap-6 text-white  z-50">
        <NavItem href="#home" icon="ri-home-4-fill" label="Home" />
        <NavItem href="#projects" icon="ri-stack-fill" label="Projects" />
        <NavItem href="#work" icon="ri-briefcase-fill" label="Work Experience" />
        <NavItem href="/contact" icon="ri-phone-fill" label="Contact" />
      </nav>
    );
  }
  
  function NavItem({ href, icon, label }) {
    return (
      <div className="relative group">
        <a href={href} className="hover:text-blue-500">
          <i className={`${icon}`}></i>
        </a>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
          {label}
        </span>
      </div>
    );
  }
  