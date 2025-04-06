import React from 'react'

const Experience = () => {
  return (
    <section className="py-16 px-4 bg-[#010319]/60 backdrop-blur-md p-6 rounded-lg shadow border border-white/10" id="experience">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-white">Career & Experience</h3>
  
      {/* Experience Block */}
      <div className="space-y-8">
  
        {/* Job 1 */}
        <div className="bg-[#0F1629] p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-semibold text-white">Lead Frontend Developer</h4>
            <span className="text-sm text-[#A3A3A3]">Sep 2024 – Present</span>
          </div>
          <p className="text-[#BEBEBE] text-sm">Opstree Labs / BuildPiper, Noida</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-[#D1D5DB] text-sm">
            <li>Leading frontend architecture and feature design for BuildPiper SaaS.</li>
            <li>Driving UI strategy for the BuildPiper Observation Tool and Command Center.</li>
            <li>Collaborating with cross-functional teams to ensure scalable implementation.</li>
          </ul>
        </div>
  
        {/* Job 2 */}
        <div className="bg-[#0F1629] p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-semibold text-white">Senior Frontend Developer</h4>
            <span className="text-sm text-[#A3A3A3]">Jan 2022 – Aug 2024</span>
          </div>
          <p className="text-[#BEBEBE] text-sm">Opstree Solutions / BuildPiper</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-[#D1D5DB] text-sm">
            <li>Developed reusable React components and handled app upgrades from v16 to v18.</li>
            <li>Improved frontend performance by 70% using lazy loading and optimization.</li>
            <li>Led code reviews, mentored junior developers, and owned critical features.</li>
          </ul>
        </div>
  
        {/* Job 3 */}
        <div className="bg-[#0F1629] p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-semibold text-white">UI/UX Designer</h4>
            <span className="text-sm text-[#A3A3A3]">Nov 2019 – Dec 2021</span>
          </div>
          <p className="text-[#BEBEBE] text-sm">BuildPiper, Opstree Solutions</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-[#D1D5DB] text-sm">
            <li>Created UX workflows, wireframes, and visual design for BuildPiper platform.</li>
            <li>Contributed to Opstree branding, documentation sites, and DevOps learning programs.</li>
          </ul>
        </div>
  
        {/* Job 4 */}
        <div className="bg-[#0F1629] p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-semibold text-white">HTML Frontend Developer</h4>
            <span className="text-sm text-[#A3A3A3]">Oct 2018 – Apr 2019</span>
          </div>
          <p className="text-[#BEBEBE] text-sm">Aastha Online Ventures LLP</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-[#D1D5DB] text-sm">
            <li>Converted static designs into responsive web pages using HTML/CSS.</li>
            <li>Built marketing websites and managed admin panels for MediaSwag & TalentSwag.</li>
          </ul>
        </div>
  
      </div>
    </div>
  </section>
  
  )
}

export default Experience