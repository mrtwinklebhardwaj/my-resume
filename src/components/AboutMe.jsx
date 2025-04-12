import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section
            className="py-8 px-4 bg-white/5 sm:backdrop-blur-md backdrop-blur-none rounded-lg shadow border border-white/10 mb-16"
            id="about"
        >
            <div className="max-w-5xl mx-auto">
                <motion.h3
                    className="text-2xl font-semibold mb-6 text-[#E3ECFF]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h3>

                <motion.p
                    className="text-white text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    I’m <strong>Twinkle Bhardwaj</strong>, a self-taught UI Engineer and Frontend Developer based in Noida, India. I specialize in building
                    high-performance, design-focused web applications using modern frontend technologies like <strong>React.js</strong>, <strong>TypeScript</strong>,
                    and <strong>Tailwind CSS</strong>. With over 5 years of experience, I’ve led frontend development across multiple products and design systems—
                    collaborating closely with designers, backend engineers, and product teams to deliver scalable, intuitive interfaces.
                </motion.p>

                <motion.p
                    className="text-white text-lg mt-4 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    My passion lies in crafting clean UI architecture, developing reusable component libraries, and enhancing user experiences through thoughtful
                    interactions and performance optimizations. Outside of coding, I enjoy exploring design patterns, mentoring upcoming developers, and sharing learnings through
                    <a
                        href="https://medium.com/@codeaurkahani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-300 ml-1"
                    >
                        my Medium blog
                    </a>.
                </motion.p>
            </div>
        </section>
    );
};

export default AboutMe;
