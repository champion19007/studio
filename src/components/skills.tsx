
"use client";

import { Progress } from "./ui/progress";
import { Code2, Database, Globe, Layers, Layout, Server, Settings, ShieldCheck } from "lucide-react";

export function Skills() {
  const skills = [
    { name: "Frontend Development", value: 95, icon: Layout, description: "React, Next.js, Tailwind, TypeScript" },
    { name: "Backend Systems", value: 88, icon: Server, description: "Node.js, Go, PostgreSQL, Redis" },
    { name: "UI/UX Design", value: 82, icon: Layers, description: "Figma, Design Systems, Animation" },
    { name: "Cloud Infrastructure", value: 75, icon: Database, description: "AWS, Docker, Kubernetes, CI/CD" },
    { name: "API Architecture", value: 90, icon: Globe, description: "GraphQL, REST, gRPC, WebSockets" },
    { name: "Security & Testing", value: 85, icon: ShieldCheck, description: "OAuth, Jest, Cypress, Security Audits" },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I leverage a diverse set of modern technologies to build scalable, reliable, 
            and high-performing digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <skill.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 h-10">
                {skill.description}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-primary">{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-1.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
