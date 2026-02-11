"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          data-ai-hint={project.imageHint}
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center">
          <h4 className="text-xl font-bold text-primary mb-4">{project.title}</h4>
          <div className="flex space-x-4">
            <Button asChild size="sm" variant="default" className="rounded-full bg-primary text-primary-foreground">
              <Link href={`/projects/${project.id}`}>
                Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="icon" variant="outline" className="rounded-full border-white/20 hover:border-white">
              <Link href={project.github} target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* GitHub Badge (Visible by default) */}
        <div className="absolute top-4 right-4 z-10 opacity-100 group-hover:opacity-0 transition-opacity">
          <Link href={project.github} target="_blank" className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-black/70 transition-colors block">
            <Github className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="bg-primary/5 text-[10px] uppercase font-bold tracking-wider text-primary border-primary/20">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-[10px] text-muted-foreground border-border">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-8 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between">
          <Link 
            href={`/projects/${project.id}`}
            className="inline-flex items-center text-sm font-bold text-primary hover:underline decoration-2 underline-offset-4 transition-all group/link"
          >
            Deep Dive <ArrowUpRight className="ml-1 h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            {project.id.split('-')[0]}
          </span>
        </div>
      </div>
    </div>
  );
}