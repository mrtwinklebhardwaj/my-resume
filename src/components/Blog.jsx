import React from 'react'

const Blog = () => {
    return (
        <section className="py-8 px-4 bg-[#010319]/60 backdrop-blur-md p-6 rounded-lg shadow border border-white/10 mb-16" id="blogs">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Blog</h3>
                <div className="inline-block px-4 py-2 text-sm bg-white/10 text-[#D1D5DB] rounded-full border border-white/20">
          🚧 Coming Soon – this section is under construction.
        </div>
                {/* <div className="space-y-4 text-[#010319]">
                    <div className="bg-gray-50 p-4 rounded shadow">
                        <h4 className="font-bold">Why Every Frontend Dev Should Learn Design Systems</h4>
                        <p className="text-sm">Understanding design systems can improve team velocity, UI consistency, and scalability. Here's how I introduced one into our codebase...</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded shadow">
                        <h4 className="font-bold">CSS Architecture That Scales</h4>
                        <p className="text-sm">How I used utility-first and component-scoped styles to keep large frontend projects maintainable and clean.</p>
                    </div>
                </div> */}
            </div>
        </section>

    )
}

export default Blog