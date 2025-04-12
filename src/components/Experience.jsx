import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const experiences = [
  {
    title: 'Lead Frontend Developer',
    company: 'Opstree Labs Pvt Ltd',
    duration: 'April 2025 – Present',
    projects: 'BuildPiper, Rappel (EMS), Maturity Insights, Command Center',
    promotions: true,
    points: [
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Opstree Solutions Pvt Ltd → Opstree Labs Pvt Ltd',
    duration: 'Jan 2022 – Mar 2025',
    projects: 'BuildPiper, Rappel (EMS), Maturity Insights, Command Center',
    promotions: true,
    points: [
    ],
  },
  {
    title: 'HTML Frontend Developer',
    company: 'Opstree Solutions Pvt Ltd',
    duration: 'Nov 2019 – Dec 2021',
    projects: 'BuildPiper',
    points: [
    ],
  },
  {
    title: 'HTML Developer',
    company: 'Aastha Online Ventures LLP',
    duration: 'Oct 2018 – Apr 2019',
    projects: 'TalentSwag, MediaSwag',
    points: [
    ],
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const icons = container.querySelectorAll('.step-icon');
      if (icons.length >= 2) {
        const top = icons[0].getBoundingClientRect().top;
        const bottom = icons[icons.length - 1].getBoundingClientRect().top;
        setLineHeight(bottom - top);
      }
    }
  }, []);

  return (
    <section className="py-8 px-4 bg-[#010319]/60 sm:backdrop-blur-md p-6 rounded-lg shadow border border-white/10 mb-16" id="experience">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-10 text-white">Career & Experience</h3>
        <div className="relative flex flex-col gap-10" ref={containerRef}>
          <div
            className="absolute left-5 bg-white/20 w-0.5 z-0"
            style={{ top: '36px', height: `${lineHeight}px` }}
          />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-10 z-10"
            >
              <div className="absolute left-2 top-6 w-6 h-6 rounded-full flex items-center justify-center bg-[#0F1629] border border-white/30 step-icon">
                {exp.promotions ? (
                  <i className="ri-arrow-up-line text-yellow-400 text-base" title="Promotion"></i>
                ) : (
                  <i className="ri-record-circle-line text-white text-base"></i>
                )}
              </div>
              <div className="bg-[#0F1629] p-6 rounded-lg shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                  <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                  <span className="text-sm text-[#A3A3A3]">{exp.duration}</span>
                </div>
                <p className="text-[#BEBEBE] text-sm mb-2">{exp.company} — {exp.projects}</p>
                <ul className="list-disc pl-6 space-y-2 text-[#D1D5DB] text-sm">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
