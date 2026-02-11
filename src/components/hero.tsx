"use client";

import { Button } from "./ui/button";
import { ArrowRight, FileText, Github, Linkedin, Mail, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const resumeLink = "https://drive.google.com/file/d/1qN0M9mAJjsOx-PQ9bgxT0HkqvuDuGhMv/view?usp=drive_link";
  const [text, setText] = useState("");
  const fullText = "AI & Machine Learning Engineer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern">
      <div className="stripe-mesh" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-fade-in-up">
            <Terminal className="h-3 w-3" />
            <span className="text-[10px] uppercase tracking-widest font-bold">
              {text}<span className="inline-block w-1 h-3 bg-primary ml-1 animate-pulse"></span>
            </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold font-headline mb-8 leading-[1.1] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Designing <br /> 
            <span className="text-gradient">Intelligent</span> Systems.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Sai Yashwant Reddy Panthy — Architecting the future through <span className="text-foreground font-semibold">Computer Vision</span>, <span className="text-foreground font-semibold">Reinforcement Learning</span>, and robust <span className="text-foreground font-semibold">MLOps</span> pipelines.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center sm:items-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-7 rounded-full text-lg font-bold w-full sm:w-auto shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              <Link href="/#projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="px-8 py-7 rounded-full text-lg font-bold border-white/10 text-foreground hover:bg-white/5 w-full sm:w-auto transition-all hover:scale-105 active:scale-95 group">
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                Resume <FileText className="ml-2 h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>

            <div className="flex items-center space-x-2 pt-4 sm:pt-0 sm:ml-4">
              {[
                { icon: Github, href: "https://github.com/champion19007" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/saiyashwantreddy" },
                { icon: Mail, href: "mailto:saiyashwantreddypanthy@gmail.com" }
              ].map((social, i) => (
                <Button 
                  key={i}
                  asChild 
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract floating elements */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[150px] -z-10 animate-float" />
    </section>
  );
}