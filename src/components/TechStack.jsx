import React from 'react'

const TechStack = () => {
  return (
    <section className="py-8 px-4 bg-[#010319]/60 sm:backdrop-blur-md backdrop-blur-none p-6 rounded-lg shadow border border-white/10 mb-16" id="tech">
    <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Tech Stack</h3>
        <div className="flex flex-wrap gap-4 text-sm text-[#010319]">
            {/* Frontend */}
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">React.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Next.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Redux</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">JavaScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Material UI</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Framer Motion</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Highcharts</span>

            {/* UI/UX */}
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Figma</span>

            {/* Backend / Infra */}
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Express.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Docker</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">AWS</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">RestApi</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Postman</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">CI/CD pipelines</span>

            {/* Tooling */}
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Webpack</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Babel</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">GitHub Actions</span>
            <span className="px-3 py-1 bg-gray-100 rounded gravity-effect">Jest</span>
        </div>

    </div>
</section>
  )
}

export default TechStack