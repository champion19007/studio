
import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";

export function ProjectGallery() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Selected Works</h2>
            <p className="text-muted-foreground text-lg">
              A collection of projects that demonstrate my ability to solve complex problems 
              and deliver exceptional results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
