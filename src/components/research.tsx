import { BookOpen, Award, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

export function Research() {
  const publications = [
    {
      title: "Hybrid Minimax–MCTS Chess Engine Enhanced by Reinforcement Learning",
      venue: "Accepted at ACROSET 2025",
      tags: ["Reinforcement Learning", "Game AI", "Search Algorithms"],
      description: "Research focused on combining traditional search methodologies with deep learning evaluation functions to achieve superior tactical play."
    },
    {
      title: "PolyPrimer: Deep Learning Framework for Multiplex PCR Primer Design",
      venue: "Accepted at IC_ASET 2025",
      tags: ["Deep Learning", "Bioinformatics", "Genomics"],
      description: "Proposed a novel neural framework to optimize the primer design process for complex multiplex PCR reactions."
    },
    {
      title: "Control System Optimization presented at IEEE ACC",
      venue: "Presented at American Control Conference (ACC 2024)",
      tags: ["Control Theory", "Optimization", "IEEE"],
      description: "Investigated system-level control optimizations presented to a global audience of researchers and engineers."
    }
  ];

  return (
    <section id="research" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Research & Publications</h2>
            <p className="text-muted-foreground text-lg">
              Pushing the boundaries of what's possible through systematic research and peer-reviewed contributions 
              to the AI and Control Systems communities.
            </p>
          </div>
          <div className="p-6 bg-primary/10 rounded-2xl border border-primary/20 flex items-center space-x-4">
            <Award className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-bold uppercase tracking-tighter">Scholarly Impact</p>
              <p className="text-2xl font-bold text-primary">3+ Major Papers</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {publications.map((pub, idx) => (
            <div 
              key={idx} 
              className="group bg-card border border-border rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 text-[10px] uppercase font-bold tracking-wider">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm font-bold text-primary/80 mb-4 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" /> {pub.venue}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pub.description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <span className="text-xs font-bold text-muted-foreground group-hover:text-primary flex items-center transition-colors">
                  View Full Abstract <ExternalLink className="ml-2 h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
