
"use client";

import { MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 text-primary mb-4">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-bold uppercase tracking-widest">Based in India</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">Professional Summary</h2>
              
              <div className="relative p-6 rounded-2xl bg-card border border-border min-h-[120px] group transition-all glass-card">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I am an AI & Data Science Engineer in training with hands-on experience in computer vision, reinforcement learning, large language models, and deep learning systems. I specialize in designing intelligent architectures and scalable ML pipelines.
                </p>
              </div>
              
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Over the past few years, I've built and published projects ranging from autonomous 
                driving agents and GAN architectures to hybrid chess engines. I've applied my expertise at companies like JPMorganChase, Tata Group, and BCG X.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Core Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border group hover:border-primary/50 transition-colors glass-card">
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">System-Level Thinking</h4>
                  <p className="text-sm text-muted-foreground">Approaching AI challenges as integrated software systems, focusing on scalability and robust architecture.</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border group hover:border-primary/50 transition-colors glass-card">
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Research-Driven</h4>
                  <p className="text-sm text-muted-foreground">Applying cutting-edge methodology and peer-reviewed research to practical engineering problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
