import React from 'react';
import './index.css';

export default function App() {
  return (
    <div>
      <header className="py-6 px-4 shadow-md bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Twinkle Bhardwaj</h1>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#tech" className="hover:text-blue-600">Tech Stack</a>
            <a href="#expertise" className="hover:text-blue-600">Expertise</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#case-studies" className="hover:text-blue-600">Case Studies</a>
            <a href="#blogs" className="hover:text-blue-600">Blog</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4 bg-gray-50" id="about">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Hi, I'm Twinkle 👋</h2>
          <p className="text-[#505050] text-lg max-w-2xl mx-auto">
            I'm a Frontend Developer focused on building beautiful, accessible, and high-performance web applications.
            Passionate about React.js, TypeScript, and modern UI engineering.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white" id="tech">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-4 text-sm text-[#505050]">
            <span className="px-3 py-1 bg-gray-100 rounded">React.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Next.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Redux</span>
            <span className="px-3 py-1 bg-gray-100 rounded">HTML5</span>
            <span className="px-3 py-1 bg-gray-100 rounded">CSS3</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Material UI</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Figma</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50" id="expertise">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Areas of Expertise</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#505050]">
            <li>Designing scalable UI architecture using React.js and TypeScript</li>
            <li>Creating pixel-perfect, responsive interfaces with Tailwind CSS & Material UI</li>
            <li>Building reusable and performant frontend components</li>
            <li>Wireframing and prototyping using Figma, collaborating with designers</li>
            <li>End-to-end feature ownership with deep attention to user experience</li>
            <li>React app upgrades and performance optimizations</li>
            <li>Agile workflows, code reviews, and frontend team leadership</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-white" id="projects">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded shadow">
              <h4 className="font-bold">BuildPiper</h4>
              <p className="text-sm text-[#505050]">Microservices management platform with full CI/CD, observability, and governance features. Led frontend architecture, reusable components, and performance optimizations.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow">
              <h4 className="font-bold">Rappel EMS</h4>
              <p className="text-sm text-[#505050]">Emergency management system. Developed drag-drop UI, real-time views, and end-to-end interface interactions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50" id="case-studies">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Case Studies</h3>
          <div className="space-y-4 text-[#505050]">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold">Performance Optimization in BuildPiper</h4>
              <p className="text-sm">Reduced initial load time by 70% using lazy loading, memoization, and component restructuring.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold">React Version Upgrade (16 to 18)</h4>
              <p className="text-sm">Led seamless migration of a large React application to the latest version, ensuring stability and modern features.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white" id="blogs">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Blog</h3>
          <div className="space-y-4 text-[#505050]">
            <div className="bg-gray-50 p-4 rounded shadow">
              <h4 className="font-bold">Why Every Frontend Dev Should Learn Design Systems</h4>
              <p className="text-sm">Understanding design systems can improve team velocity, UI consistency, and scalability. Here's how I introduced one into our codebase...</p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow">
              <h4 className="font-bold">CSS Architecture That Scales</h4>
              <p className="text-sm">How I used utility-first and component-scoped styles to keep large frontend projects maintainable and clean.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-[#505050] mb-6">Fill out the form below to send me a message directly.</p>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4 text-left">
            <div>
              <label className="block text-sm mb-1 font-medium" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium" htmlFor="email">Email</label>
              <input type="email" id="email" name="_replyto" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"></textarea>
            </div>
        
            <div className="my-4">
          
<div className="g-recaptcha" data-sitekey="6Ld-4gcrAAAAAEjtwAq1_1r_g3YECE0TtyV6NNJl"></div>

            </div>
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="py-6 px-4 text-center text-sm text-[#787878]">
        © 2024 Twinkle Bhardwaj. All rights reserved.
      </footer>
    </div>
  );
}