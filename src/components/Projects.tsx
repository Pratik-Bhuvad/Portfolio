import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return(
    <section id="projects" className="max-w-11/12 mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto auto-rows-fr">
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    </section>
    );
}