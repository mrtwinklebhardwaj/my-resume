import React from 'react'
import NavigationComponent from './NavigationComponent'
import Contact from './Contact'
import Experience from './Experience'

const HeroSection = () => {
    return (
        <>
            <section className=" hero-section pb-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-20">
                        <div className="lg:col-span-4"></div>
                        <div className="lg:col-span-1"></div>
                        <div className="lg:col-span-7">
                            <NavigationComponent />
                        </div>
                    </div>
                    <div className="py-2 px-4  grid grid-cols-1 lg:grid-cols-12 gap-4"  >
                        {/* lg-3 column */}
                        <div className="lg:col-span-4">
                            <div className='intro-box shadow-2xl rounded-xl p-6 bg-[#121212]'>
                                <img src="/images/twinkle-photo.png" alt="Twinkle Bhardwaj" className="mb-8 m-auto" />
                                <p className="text-center text-[16px] text-[#fff] font-medium ">Product Desinger/Developer.</p>
                                <p className="text-center text-[16px] text-[#fff] font-medium mb-4">Noida, India.</p>

                                <div className="icons flex justify-center space-x-4 mb-4">
                                    <a href="https://www.linkedin.com/in/mr-twinkle/" target="_blank" rel="noopener noreferrer" className="group">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-transparent group-hover:bg-[#1f3989] transition-colors duration-200">
                                            <i className="ri-linkedin-box-line text-white text-2xl group-hover:text-[#fff]"></i>
                                        </div>
                                    </a>
                                    <a href="callto:+917065406084" target="_blank" rel="noopener noreferrer" className="group">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-transparent group-hover:bg-[#1f3989] transition-colors duration-200">
                                            <i className="ri-phone-line text-white text-2xl group-hover:text-[#fff]"></i>
                                        </div>
                                    </a>
                                    <a href="mailto:mrtwinkle@outlook.com" target="_blank" rel="noopener noreferrer" className="group">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-transparent group-hover:bg-[#1f3989] transition-colors duration-200">
                                            <i className="ri-mail-line text-white text-2xl group-hover:text-[#fff]"></i>
                                        </div>
                                    </a>
                                    <a href="https://github.com/mrtwinklebhardwaj" target="_blank" rel="noopener noreferrer" className="group">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-transparent group-hover:bg-[#1f3989] transition-colors duration-200">
                                            <i className="ri-github-line text-white text-2xl group-hover:text-[#fff]"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1"></div>
                        {/* lg-7 column */}
                        <div className="lg:col-span-7 h-[70vh] overflow-y-scroll pr-2 scroll-panel" >

                            <h1 className="font-bold text-[56px] text-[#E3ECFF] text-center mb-8" id="home" style={{ lineHeight: '1.2' }}>Hi, I’m Twinkle Bhardwaj, a UI Engineer.</h1>
                            <div className='designation text-center text-[32px] font-bold text-[#E3ECFF] mb-8 ml-auto mr-auto'>
                                FRONT-END DEVLOPER
                            </div>
                            <p className='text-center text-[28px] font-semibold text-[#E3ECFF] mb-4 ml-auto mr-auto'>
                                Based in Noida, India.</p>
                            <p className='text-center text-[28px] font-semibold text-[#E3ECFF] mb-4 mx-auto'>
                                Specialized in <span className='tech-stack'>ReactJs</span> and <span className='tech-stack'>UI Architecture</span>
                            </p>
                            <div className="flex justify-center gap-4 mt-6 mb-8">
                                <a href="mailto:mrtwinkle@outlook.com" className="gradient-outline-btn">
                                    Say Hi
                                </a>
                                <a href="/twinkle_bhardwaj_resume.pdf" target="_blank" rel="noopener noreferrer" className="gradient-outline-btn">
                                    Resume
                                </a>
                            </div>
                            <section className="py-16 px-4" id="tech">
                                <div className="max-w-5xl mx-auto">
                                    <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-[#010319]">
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
                            <section className="py-16 px-4  " id="about">
                                <div className="max-w-5xl mx-auto">
                                    <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">About Me</h3>
                                    <p className="text-white text-lg leading-relaxed">
                                        I'm Twinkle Bhardwaj, a self-taught UI Engineer and Frontend Developer based in Noida, India. I specialize in building
                                        high-performance, design-driven web applications using modern frontend technologies like React.js, TypeScript, and Tailwind CSS.
                                        With over 5 years of experience, I’ve led development across multiple products and design systems, collaborating closely
                                        with designers, backend engineers, and product teams to deliver scalable, intuitive interfaces.
                                    </p>
                                    <p className="text-white text-lg mt-4 leading-relaxed">
                                        My passion lies in crafting clean UI architecture, building reusable components, and enhancing user experience through thoughtful
                                        interactions and performance optimization. Outside of coding, I love exploring design patterns, storytelling through tech, and mentoring upcoming developers.
                                    </p>
                                </div>
                            </section>
                            <Experience />
                            <section className="py-16 px-4 " id="expertise">
                                <div className="max-w-5xl mx-auto">
                                    <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Areas of Expertise</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-[#E3ECFF]">
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

                            <section className="py-16 px-4 " id="projects">
                                <div className="max-w-5xl mx-auto">
                                    <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Projects</h3>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded shadow">
                                            <h4 className="font-bold">BuildPiper</h4>
                                            <p className="text-sm  text-[#010319]">Microservices management platform with full CI/CD, observability, and governance features. Led frontend architecture, reusable components, and performance optimizations.</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded shadow">
                                            <h4 className="font-bold">Rappel EMS</h4>
                                            <p className="text-sm text-[#010319]">Emergency management system. Developed drag-drop UI, real-time views, and end-to-end interface interactions.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="py-16 px-4 " id="case-studies">
                                <div className="max-w-5xl mx-auto">
                                    <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Case Studies</h3>
                                    <div className="space-y-4 text-[#010319]">
                                        <div className="bg-gray-50 p-4 rounded shadow text-[#010319]">
                                            <h4 className="font-bold">Performance Optimization in BuildPiper</h4>
                                            <p className="text-sm">Reduced initial load time by 70% using lazy loading, memoization, and component restructuring.</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded shadow text-[#010319]">
                                            <h4 className="font-bold">React Version Upgrade (16 to 18)</h4>
                                            <p className="text-sm">Led seamless migration of a large React application to the latest version, ensuring stability and modern features.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="py-16 px-4 " id="blogs">
                                <div className="max-w-5xl mx-auto">
                                    <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Blog</h3>
                                    <div className="space-y-4 text-[#010319]">
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

                            <section className="py-16 px-4 " id="contact">
                                <div className="max-w-2xl mx-auto text-center">
                                    <h3 className="text-2xl font-semibold mb-4 text-[#E3ECFF]">Get in Touch</h3>
                                    <p className="text-[#E3ECFF] mb-6">Fill out the form below to send me a message directly.</p>
                                    <Contact />
                                </div>
                            </section>

                            <footer className="py-6 px-4 text-center text-sm text-[#A3A3A3]">
                                © 2024 Twinkle Bhardwaj. All rights reserved.
                            </footer>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection