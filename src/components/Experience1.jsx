import React, { useState } from 'react'

const Experience1 = () => {
  const [expanded, setExpanded] = useState({})

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const experienceData = [
    {
      title: 'Lead Frontend Developer',
      company: 'Opstree Labs / BuildPiper, Noida',
      duration: 'Sep 2024 – Present',
      responsibilities: [
        'Leading frontend architecture and feature design for BuildPiper SaaS.',
        'Driving UI strategy for the BuildPiper Observation Tool and Command Center.',
        'Collaborating with cross-functional teams to ensure scalable implementation.',
        'Handling feature requests, UI wireframing, and team mentorship.',
        'Contributing to system design and R&D across frontend platforms.',
      ],
    },
    {
      title: 'Senior Frontend Developer',
      company: 'Opstree Solutions / BuildPiper',
      duration: 'Jan 2022 – Aug 2024',
      responsibilities: [
        'Developed reusable React components and handled app upgrades from v16 to v18.',
        'Improved frontend performance by 70% using lazy loading and optimization.',
        'Led code reviews, mentored junior developers, and owned critical features.',
        'Implemented drag-and-drop UI and deep collaboration with backend engineers.',
      ],
    },
    {
      title: 'UI/UX Designer',
      company: 'BuildPiper, Opstree Solutions',
      duration: 'Nov 2019 – Dec 2021',
      responsibilities: [
        'Created UX workflows, wireframes, and visual design for BuildPiper platform.',
        'Contributed to Opstree branding, documentation sites, and DevOps learning programs.',
        'Designed social assets and certification visuals for DevOps Ninja initiative.',
      ],
    },
    {
      title: 'HTML Frontend Developer',
      company: 'Aastha Online Ventures LLP',
      duration: 'Oct 2018 – Apr 2019',
      responsibilities: [
        'Converted static designs into responsive web pages using HTML/CSS.',
        'Built marketing websites and managed admin panels for MediaSwag & TalentSwag.',
      ],
    },
  ]

  return (
    <section className="py-8 px-4 bg-[#010319]/60 backdrop-blur-md p-6 rounded-lg shadow border border-white/10 mb-16" id="experience">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-white">Career & Experience</h3>
        <div className="relative border-l-2 border-white/20 pl-6 space-y-10">
          {experienceData.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[11px] top-2 w-4 h-4 bg-[#B8A7ED] rounded-full border border-white"></div>
              <div className="bg-[#0F1629] p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                  <span className="text-sm text-[#A3A3A3]">{job.duration}</span>
                </div>
                <p className="text-[#BEBEBE] text-sm mb-4">{job.company}</p>
                <ul className="list-disc pl-4 space-y-2 text-[#D1D5DB] text-sm">
                  {(expanded[index] ? job.responsibilities : job.responsibilities.slice(0, 3)).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                {job.responsibilities.length > 3 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-3 text-sm text-[#B8A7ED] hover:underline"
                  >
                    {expanded[index] ? '- View Less' : '+ View More'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience1
