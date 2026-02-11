
"use client";

import { MapPin, Sparkles, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { generateAboutMe } from "@/ai/ai-about-me";

export function About() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentBio, setCurrentBio] = useState(
    "I am an AI & Data Science Engineer in training with hands-on experience in computer vision, reinforcement learning, large language models, and deep learning systems."
  );
  const [tone, setTone] = useState<"professional" | "creative" | "friendly">("professional");

  const handleRephrase = async (selectedTone: "professional" | "creative" | "friendly") => {
    setIsGenerating(true);
    setTone(selectedTone);
    try {
      const result = await generateAboutMe({
        name: "Sai Yashwant Reddy Panthy",
        profession: "AI & Data Science Engineer",
        skills: "Computer Vision, Reinforcement Learning, LLMs, Deep Learning",
        experience: "Quantitative Research at JPMorganChase, Gen AI at Tata Group, Data Science at BCG X",
        style: selectedTone
      });
      setCurrentBio(result.aboutMe);
    } catch (error) {
      console.error("AI Generation failed", error);
    } finally {
      setIsGenerating(false);
    }
  };

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
              
              <div className="relative p-6 rounded-2xl bg-card border border-border min-h-[180px] group transition-all">
                <div className="absolute top-2 right-2 flex gap-1">
                  {(["professional", "creative", "friendly"] as const).map((t) => (
                    <Button 
                      key={t}
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleRephrase(t)}
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 h-6 ${tone === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                      disabled={isGenerating}
                    >
                      {t}
                    </Button>
                  ))}
                  <div className="ml-2 p-1 bg-primary/10 rounded text-primary" title="AI Powered">
                    <Sparkles className="h-3 w-3" />
                  </div>
                </div>

                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center h-24 space-y-4">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    <p className="text-xs font-bold text-primary animate-pulse uppercase tracking-widest">Generating AI Bio...</p>
                  </div>
                ) : (
                  <p className="text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500">
                    {currentBio}
                  </p>
                )}
              </div>
              
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Over the past few years, I've built and published projects ranging from autonomous 
                driving agents and GAN architectures to hybrid chess engines. I've applied my expertise at companies like JPMorganChase, Tata Group, and BCG X.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Core Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border group hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">System-Level Thinking</h4>
                  <p className="text-sm text-muted-foreground">Approaching AI challenges as integrated software systems, focusing on scalability and robust architecture.</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border group hover:border-primary/50 transition-colors">
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
