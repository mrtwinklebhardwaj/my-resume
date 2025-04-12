import React from 'react';

const Blog = () => {
    const blogs = [
        {
            title: 'Why Canary Deployment is Essential and How BuildPiper Simplifies It',
            url: 'https://medium.com/@codeaurkahani/why-canary-deployment-is-essential-and-how-buildpiper-simplifies-it-dea413dd7624',
            desc: 'Learn why canary deployments matter in minimizing risk and how BuildPiper makes the process seamless with built-in support.'
        },
        {
            title: 'Optimizing Enterprise Deployments: How BuildPiper Integrates Jira into CI/CD Pipelines',
            url: 'https://medium.com/@codeaurkahani/optimizing-enterprise-deployments-how-buildpiper-integrates-jira-into-ci-cd-pipelines-fffcbb4833be',
            desc: 'Explore how Jira integration can streamline enterprise workflows and how we implemented it within BuildPiper’s CI/CD pipelines.'
        },
        {
            title: 'Ensuring High-Quality Deployments with Flexible Integration and Step Catalog in CI/CD Pipelines',
            url: 'https://medium.com/@codeaurkahani/ensuring-high-quality-deployments-with-flexible-integration-and-step-catalog-in-ci-cd-pipelines-6b1dd187abf6',
            desc: 'A deep dive into flexible integrations and customizable step catalogs for achieving consistent, high-quality deployments.'
        }
    ];

    return (
        <section className="py-8 px-4 bg-[#010319]/60 sm:backdrop-blur-md backdrop-blur-none p-6 rounded-lg shadow border border-white/10 mb-16" id="blogs">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Blog</h3>
                <div className="space-y-4">
                    {blogs.map((blog, index) => (
                        <a
                            key={index}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-[#0F1629] p-5 rounded-lg border border-white/10 hover:border-white/20 transition"
                        >
                            <h4 className="text-lg text-white font-semibold mb-1">{blog.title}</h4>
                            <p className="text-sm text-[#D1D5DB]">{blog.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;