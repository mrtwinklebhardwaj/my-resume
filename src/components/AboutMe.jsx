import React from 'react'

const AboutMe = () => {
    return (
        <section className="py-8 px-4 bg-white/5 backdrop-blur-md rounded-lg shadow border border-white/10 mb-16" id="about">
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
    )
}

export default AboutMe