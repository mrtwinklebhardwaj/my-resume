import React from 'react';

const Blog = ({blogs=[]}) => {
  

    
  
    
    

    return (
        <section className="py-8 px-4 bg-[#010319]/60 sm:backdrop-blur-md backdrop-blur-none p-6 rounded-lg shadow border border-white/10 mb-16" id="blogs">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Blog</h3>
                <div className="space-y-4">
                {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0F1629] p-5 rounded-lg border border-white/10 hover:border-white/20 transition"
            >
              <h4 className="text-lg text-white font-semibold mb-1">{blog.title}</h4>
              <p className="text-sm text-[#D1D5DB]">{blog.description.replace(/<[^>]+>/g, '').slice(0, 200)}...</p>
            </a>
          ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;