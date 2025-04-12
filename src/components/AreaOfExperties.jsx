import React from 'react';

const AreaOfExperties = () => {
    return (
        <section className="py-8 px-4 bg-white/5 sm:backdrop-blur-md backdrop-blur-none rounded-lg shadow border border-white/10 mb-16" id="expertise">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6 text-white">Areas of Expertise</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#D1D5DB] text-base leading-relaxed">
                    <li>Architecting scalable and maintainable UIs using React.js, TypeScript, JavaScript, and modular component design principles.</li>
                    <li>Building responsive, pixel-perfect, cross-browser interfaces using Tailwind CSS, Material UI, and CSS-in-JS techniques.</li>
                    <li>Developing reusable components and design systems to ensure consistency across features and products.</li>
                    <li>Leading frontend strategy across multiple products with hands-on ownership of feature design, UX workflows, and wireframing.</li>
                    <li>Collaborating closely with UX teams in Figma to transform high-fidelity designs into seamless, interactive experiences.</li>
                    <li>Driving frontend performance optimizations through code splitting, lazy loading, and React version upgrades (16 → 18).</li>
                    <li>Owning complete feature lifecycles—from ideation and prototyping to implementation, reviews, and continuous refinement.</li>
                    <li>Mentoring developers, improving team velocity through code reviews, best practices, and R&D contributions like the Observation Tool.</li>
                </ul>
            </div>
        </section>
    );
};

export default AreaOfExperties;
