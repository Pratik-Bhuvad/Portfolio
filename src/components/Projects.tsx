import { projects } from "@/data/projects";
import ProjectCard from "./micro-components/ProjectCard";

export default function Projects() {
    return(
    <section id="projects" className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 font-display">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-(--text-secondary) font-mono">
            A selection of work I&apos;ve built with passion and purpose.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto lg:auto-rows-fr">
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    </section>
    );
}