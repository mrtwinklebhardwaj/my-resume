export default function FloatingNavbar() {
    return (
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 nav-bg p-2 pl-6 pr-6 rounded-lg shadow-lg flex gap-6 text-white  z-50">
        <NavItem href="#home" icon="ri-home-4-line" label="Home" />
        <NavItem href="#tech-stack" icon="ri-tools-line" label="Tools & technologies" />
        <NavItem href="#projects" icon="ri-stack-line" label="Projects" />
        <NavItem href="#work" icon="ri-briefcase-line" label="Work Experience" />
        <NavItem href="/contact" icon="ri-phone-line" label="Contact" />
      </nav>
    );
  }
  
  function NavItem({ href, icon, label }) {
    return (
      <div className="relative group pt-3 pb-3">
        <a href={href} className="hover:text-white-500 text-xl" >
          <i className={`${icon}`}></i>
        </a>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
          {label}
        </span>
      </div>
    );
  }
  