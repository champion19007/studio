"use client";

import { useEffect, useState, useRef } from "react";
import { Progress } from "./ui/progress";
import { 
  Code2, 
  BrainCircuit, 
  Eye, 
  Settings2, 
  FileJson, 
  Database,
  Cpu,
  Workflow
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Machine Learning",
      icon: BrainCircuit,
      skills: [
        { name: "Supervised Learning", value: 95 },
        { name: "Deep Learning (CNN/LSTM)", value: 92 },
        { name: "Reinforcement Learning", value: 88 },
        { name: "Model Evaluation", value: 90 },
      ]
    },
    {
      title: "Computer Vision",
      icon: Eye,
      skills: [
        { name: "Object Detection (YOLO)", value: 94 },
        { name: "OpenCV Pipelines", value: 90 },
        { name: "Real-time Inference", value: 85 },
      ]
    },
    {
      title: "MLOps & DevOps",
      icon: Workflow,
      skills: [
        { name: "CI/CD Pipelines", value: 88 },
        { name: "AWS Infrastructure", value: 82 },
        { name: "Docker & Containerization", value: 90 },
        { name: "Experiment Tracking", value: 85 },
      ]
    },
    {
      title: "Programming",
      icon: Code2,
      skills: [
        { name: "Python", value: 98 },
        { name: "C++", value: 85 },
        { name: "Java/SQL", value: 80 },
        { name: "TypeScript", value: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for architecting intelligent systems, 
            from low-level C++ algorithms to high-level cloud MLOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className={cn(
                "p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/50 transition-all duration-500 hover:shadow-primary/5",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary">{isVisible ? skill.value : 0}%</span>
                    </div>
                    <Progress 
                      value={isVisible ? skill.value : 0} 
                      className="h-1.5 transition-all duration-1000 ease-out" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={cn(
          "mt-16 pt-12 border-t border-border transition-all duration-1000 delay-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">Tools & Ecosystem</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Git", "GitHub", "Linux", "MLflow", "Weights & Biases", "Streamlit", "Gradio", "Tableau", "ROS2"].map((tool, idx) => (
              <div 
                key={tool} 
                className="px-6 py-3 rounded-full bg-secondary/50 border border-border text-sm font-bold hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 cursor-default"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}