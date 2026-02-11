"use client";

import { useEffect, useState, useRef } from "react";
import { Progress } from "./ui/progress";
import { 
  BrainCircuit, 
  Eye, 
  Code2, 
  Workflow,
  Cpu,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Intelligence",
      icon: BrainCircuit,
      skills: [
        { name: "Supervised Learning", value: 95 },
        { name: "Deep Learning (CNN/LSTM)", value: 92 },
        { name: "Reinforcement Learning", value: 88 },
      ]
    },
    {
      title: "Perception",
      icon: Eye,
      skills: [
        { name: "Object Detection (YOLO)", value: 94 },
        { name: "OpenCV Pipelines", value: 90 },
        { name: "Real-time Inference", value: 85 },
      ]
    },
    {
      title: "Architecture",
      icon: Workflow,
      skills: [
        { name: "CI/CD Pipelines", value: 88 },
        { name: "Docker & Kubernetes", value: 90 },
        { name: "MLflow / W&B", value: 85 },
      ]
    },
    {
      title: "Engineering",
      icon: Code2,
      skills: [
        { name: "Python", value: 98 },
        { name: "C++ / Rust", value: 85 },
        { name: "SQL & Data Modeling", value: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Built on a foundation of <span className="text-primary">technical excellence.</span></h2>
          <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
            From low-level C++ performance to cloud-scale MLOps, I build systems that are as efficient as they are intelligent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className={cn(
                "p-10 rounded-[2.5rem] glass-card hover-glow",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center space-x-6 mb-10">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-2xl">{category.title}</h3>
              </div>
              
              <div className="space-y-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                      <span className="text-foreground/70">{skill.name}</span>
                      <span className="text-primary">{isVisible ? skill.value : 0}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-[1500ms] ease-out rounded-full"
                        style={{ width: isVisible ? `${skill.value}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-4">
            {["Git", "AWS", "Linux", "MLflow", "PyTorch", "TensorFlow", "ROS2", "Docker", "NVIDIA CUDA"].map((tool, idx) => (
              <div 
                key={tool} 
                className="px-8 py-4 rounded-full glass-card border-white/5 text-sm font-bold hover:bg-white/5 transition-all cursor-default"
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