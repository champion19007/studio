import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, MapPin, Brain } from "lucide-react";

export function About() {
  const headshot = PlaceHolderImages.find(img => img.id === "headshot");

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity blur-xl" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto border border-border">
              {headshot && (
                <Image
                  src={headshot.imageUrl}
                  alt="Sai Yashwant Reddy Panthy"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint={headshot.imageHint}
                />
              )}
            </div>
            <Card className="absolute -bottom-6 -right-6 md:right-10 w-64 bg-background border-primary/20 shadow-2xl hidden md:block">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Education</p>
                    <p className="text-sm font-bold">B.Tech, CSE (AI & ML)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-bold text-muted-foreground mb-1">
                  <Brain className="h-3 w-3 text-accent" /> Specialization in Problem Solving
                </div>
                <p className="text-xs text-muted-foreground">Manipal University Jaipur, 2021 – 2025</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex items-center space-x-2 text-primary mb-4">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-widest">Based in India</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">Professional Summary</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am an AI and Machine Learning Engineer with deep experience across Computer Vision, 
                Reinforcement Learning, and MLOps systems. I specialize in designing complex deep 
                learning architectures and building real-time intelligent systems that solve 
                real-world problems.
              </p>
              <p>
                My work spans from high-performance C++ chess engines to large-scale AWS-based CI/CD 
                pipelines for machine learning. I have a strong background in research, having 
                presented at top-tier venues like the American Control Conference (ACC) and published 
                works on hybrid search algorithms and deep learning frameworks for bioinformatics.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Core Philosophy</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-foreground mb-1">System-Level Thinking</h4>
                  <p className="text-sm text-muted-foreground">Approaching AI challenges as integrated software systems.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-foreground mb-1">Research-Driven</h4>
                  <p className="text-sm text-muted-foreground">Applying cutting-edge methodology to practical applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
