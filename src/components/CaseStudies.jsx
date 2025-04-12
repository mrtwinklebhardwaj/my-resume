import React from 'react';

const CaseStudies = () => {
    const studies = [
        {
            title: 'Command Center: Designing a Configurable Service Request Platform for Enterprise Ops',
            url: 'https://medium.com/@codeaurkahani/command-center-designing-a-configurable-service-request-platform-for-enterprise-operations-2716a3760fe7', // Replace with real URL
            desc: 'How we built a dynamic, stage-based service request system with modular workflows and field mapping, led by user-first R&D and design thinking.'
        },
        {
            title: 'Designing a DORA Metrics Dashboard: A Data-Driven Approach to Engineering Performance',
            url: 'https://medium.com/@codeaurkahani/designing-a-dora-metrics-dashboard-a-data-driven-approach-to-engineering-performance-de41124b99aa',
            desc: 'Modern engineering teams struggle to measure release efficiency and team performance in a consistent, meaningful way.'
        },
        {
            title: 'From React 16 to 18: Modernizing a Large-Scale Frontend Without Breaking Things',
            url: 'https://medium.com/@codeaurkahani/from-react-16-to-18-modernizing-a-large-scale-frontend-without-breaking-things-efce1abc09c8',
            desc: 'Modernizing a large-scale React app isn’t just about updating packages — it’s about preparing the codebase for the next 5 years.'
        }
    ];

    return (
        <section className="py-8 px-4 bg-[#010319]/60 sm:backdrop-blur-md backdrop-blur-none p-6 rounded-lg shadow border border-white/10 mb-16" id="case-studies">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6 text-[#E3ECFF]">Case Studies</h3>
                <div className="space-y-4">
                    {studies.map((study, index) => (
                        <a
                            key={index}
                            href={study.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-[#0F1629] p-5 rounded-lg border border-white/10 hover:border-white/20 transition"
                        >
                            <h4 className="text-lg text-white font-semibold mb-1">{study.title}</h4>
                            <p className="text-sm text-[#D1D5DB]">{study.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
