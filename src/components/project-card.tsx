"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Github, ExternalLink, Box } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative glass-card rounded-3xl overflow-hidden hover-glow">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          data-ai-hint={project.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button asChild size="icon" variant="secondary" className="rounded-full h-10 w-10 bg-black/60 backdrop-blur-md border-white/10 hover:bg-black/80">
            <Link href={project.github} target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="icon" variant="secondary" className="rounded-full h-10 w-10 bg-black/60 backdrop-blur-md border-white/10 hover:bg-black/80">
            <Link href={`/projects/${project.id}`}>
              <ExternalLink className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="bg-primary/5 text-[9px] uppercase font-bold tracking-[0.15em] text-primary border-primary/20 px-3 py-1">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[9px] font-bold text-muted-foreground uppercase flex items-center">
              <Box className="h-3 w-3 mr-1" /> +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-8 leading-relaxed">
          {project.description}
        </p>
        
        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <Link 
            href={`/projects/${project.id}`}
            className="group/link inline-flex items-center text-sm font-bold text-foreground hover:text-primary transition-all"
          >
            Learn more <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}