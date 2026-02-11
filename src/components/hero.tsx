"use client";

import { Button } from "./ui/button";
import { ArrowRight, FileText, Github, Linkedin, Mail, Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 text-primary mb-6 font-code animate-fade-in-up">
            <Terminal className="h-4 w-4" />
            <span className="text-sm uppercase tracking-widest font-semibold min-h-[1.5rem]">
              {text}<span className="animate-pulse">|</span>
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold font-headline mb-6 leading-tight tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Sai Yashwant <br /> 
            <span className="text-primary">Reddy Panthy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Hands-on experience in Computer Vision, Reinforcement Learning, Large Language Models, 
            and deep learning systems.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center sm:items-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-7 text-lg font-bold w-full sm:w-auto transition-transform hover:scale-105 active:scale-95">
              <Link href="/#projects">
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="px-8 py-7 text-lg font-bold border-primary/50 text-primary hover:bg-primary/5 w-full sm:w-auto transition-transform hover:scale-105 active:scale-95">
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                View Resume <FileText className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <div className="flex items-center space-x-4 pt-4 sm:pt-0 sm:ml-4">
              <Button asChild variant="outline" size="icon" className="h-14 w-14 rounded-full border-border hover:border-primary hover:text-primary transition-all hover:-translate-y-1">
                <a href="https://github.com/champion19007" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-14 w-14 rounded-full border-border hover:border-primary hover:text-primary transition-all hover:-translate-y-1">
                <a href="https://www.linkedin.com/in/saiyashwantreddy" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-14 w-14 rounded-full border-border hover:border-primary hover:text-primary transition-all hover:-translate-y-1">
                <a href="mailto:saiyashwantreddypanthy@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}