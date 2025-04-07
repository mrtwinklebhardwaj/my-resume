import React from 'react'

const TechStack = () => {
  return (
    <section className="py-8 px-4 bg-[#010319]/60 sm:backdrop-blur-md backdrop-blur-none p-6 rounded-lg shadow border border-white/10 mb-16" id="tech">
    <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Tech Stack</h3>
        <div className="flex flex-wrap gap-4 text-sm text-[#010319]">
            {/* Frontend */}
            <span className="px-3 py-1 bg-gray-100 rounded">React.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Next.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Redux</span>
            <span className="px-3 py-1 bg-gray-100 rounded">JavaScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Material UI</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Framer Motion</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Highcharts</span>

            {/* UI/UX */}
            <span className="px-3 py-1 bg-gray-100 rounded">Figma</span>

            {/* Backend / Infra */}
            <span className="px-3 py-1 bg-gray-100 rounded">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Express.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Docker</span>
            <span className="px-3 py-1 bg-gray-100 rounded">AWS</span>
            <span className="px-3 py-1 bg-gray-100 rounded">RestApi</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Postman</span>
            <span className="px-3 py-1 bg-gray-100 rounded">CI/CD pipelines</span>

            {/* Tooling */}
            <span className="px-3 py-1 bg-gray-100 rounded">Webpack</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Babel</span>
            <span className="px-3 py-1 bg-gray-100 rounded">GitHub Actions</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Jest</span>
        </div>

    </div>
</section>
  )
}

export default TechStack