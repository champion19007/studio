
import { projects } from "@/lib/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Terminal, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-12 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-border shadow-2xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">{project.title}</h1>
                
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Terminal className="mr-2 h-5 w-5 text-primary" /> Overview
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  {project.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <AlertCircle className="mr-2 h-5 w-5 text-accent" /> Key Challenges
                    </h3>
                    <p className="text-muted-foreground">
                      {project.challenges}
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> Key Outcomes
                    </h3>
                    <p className="text-muted-foreground">
                      {project.outcomes}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-secondary/30 rounded-3xl p-8 border border-border">
                <h3 className="text-lg font-bold mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="px-4 py-1 border-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
                  <Link href={project.link}>
                    Launch Live Project <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full py-6 text-lg">
                  <Link href={project.github}>
                    View Source Code <Github className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Need a similar solution for your business? 
                  <Link href="/#contact" className="ml-1 text-primary hover:underline font-bold">Get in touch</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
