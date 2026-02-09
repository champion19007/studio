
"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint={project.imageHint}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Button asChild size="icon" variant="secondary" className="rounded-full">
            <Link href={`/projects/${project.id}`}>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="icon" variant="secondary" className="rounded-full">
            <Link href={project.github}>
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="bg-primary/5 text-xs text-primary border-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
          {project.description}
        </p>
        
        <Link 
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-sm font-bold text-primary hover:underline decoration-2 underline-offset-4"
        >
          View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
