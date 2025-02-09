import { Button } from "./Buttons";
import { Card, CardContent } from "./CardComponents";

export default function RightSideContent() {
    return (
        <div className="custom-scroll-apply">
            <section className="py-16 px-0 text-left">
                {/* Force full alignment with inline styles */}
                <div className="w-full max-w-none mb-5">
                    <h2 className="text-8xl font-bold leading-none tracking-normal">
                        FRONTEND
                    </h2>
                    <h2 className="text-8xl font-bold color-secondary leading-none tracking-normal">
                        DEVELOPER
                    </h2>

                </div>

                {/* Description */}
                <p className="text-lg max-w-3xl color-tertiary">
                    Building scalable apps, reusable components, and seamless UI/UX with 5+ years of experience. Skilled in React.Js, team leadership, and SaaS tools like BuildPiper & Rapple (EMS).
                </p>
            </section>



            <section id="projects" className="py-16">
                <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((project) => (
                        <Card key={project} className="bg-gray-800 p-6">
                            <CardContent>
                                <h3 className="text-xl font-semibold">Project {project}</h3>
                                <p className="text-gray-400">Description of the project.</p>
                                <Button className="mt-4 bg-blue-500 hover:bg-blue-700">View Project</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Work Experience Section */}
            <section id="work" className="py-16 text-center">
                <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>
                <p className="text-lg">Your work experience details go here.</p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 text-center">
                <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
                <div className="flex justify-center gap-6 text-2xl">

                </div>
            </section>
        </div>
    )
}