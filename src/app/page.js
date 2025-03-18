'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaHome, FaProjectDiagram, FaBriefcase, FaPhone } from 'react-icons/fa';
import { TooltipProvider } from './components/Tooltip';
import { Card, CardContent } from './components/CardComponents';
import { Button } from './components/Buttons';
import Navbar from './components/Navbar';

export default function Portfolio() {
  return (
    <TooltipProvider>
      <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col height-100vh">
        {/* Top Navigation */}
        <Navbar />

        <div className="bg-gray-900 text-white min-h-screen p-8 grid grid-cols-[420px_auto] gap-6">
          {/* Left Side (Fixed) */}
          <div className="bg-white text-black p-6 rounded-2xl w-[420px] max-h-[600px] flex flex-col justify-between items-center h-screen sticky top-0">
            <div className="w-[240px] h-[248px] bg-gray-300 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
              <Image
                src="/twinkle.jpg"
                unoptimized={true}
                alt="Twinkle Bhardwaj"
                width={240}
                height={248}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-semibold">Twinkle Bhardwaj</h2>
            <hr className="w-full border-gray-400 mb-4" />
            <p className="text-gray-600 text-center mb-4">Crafting intuitive and scalable digital solutions with a passion for innovation.</p>

            {/* Social Links */}
            <div className="flex gap-4 text-2xl mb-6">
              <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
              <a href="#" className="hover:text-blue-500"><FaGithub /></a>
              <a href="#" className="hover:text-blue-500"><FaInstagram /></a>
            </div>
          </div>

          {/* Right Side (Scrollable) */}
          <div className="custom-scroll-apply overflow-y-auto h-screen pr-4 scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-gray-500">
            

            {/* Frontend Development Section */}
            <section className="py-16 text-center">
              <h2 className="text-3xl font-semibold mb-4">Frontend Developer</h2>
              <p className="text-lg max-w-3xl mx-auto">
                I am passionate about frontend development, SaaS products, and have expertise in designing and developing scalable digital solutions. I have worked on projects involving CI/CD tools and pipelines, developer insights, DORA metrics, EMS, and many more innovative technologies.
              </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16">
              <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((project) => (
                  <Card key={project} className="bg-gray-800 p-6">
                    <CardContent>
                      <h3 className="text-xl font-semibold">Project {project}</h3>
                      <p className="text-gray-400">Description of the project.</p>
                      <Button className="mt-4 bg-blue-500 hover:bg-blue-700">View Project</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Work Experience Section */}
            <section id="work" className="py-16 text-center">
              <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>
              <p className="text-lg">Your work experience details go here.</p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 text-center">
              <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
              <div className="flex justify-center gap-6 text-2xl">
                <a href="#" className="hover:text-blue-500"><FaGithub /></a>
                <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
                <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
                <a href="#" className="hover:text-blue-500"><FaEnvelope /></a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
