import { Trophy, Star, Target } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "Winner, Codestellation CodeWar 4.0",
      category: "Hackathon",
      description: "Secured 1st place in a high-stakes competitive programming and building challenge.",
      icon: Trophy
    },
    {
      title: "Finalist, eYRC Robotics",
      category: "Competition",
      description: "Recognized as a top performer in the prestigious International Robotics Competition (eYantra).",
      icon: Target
    },
    {
      title: "Finalist, Next Big Thing",
      category: "Innovation",
      description: "Shortlisted for high-impact innovation and product feasibility in a major national hackathon.",
      icon: Star
    }
  ];

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border flex flex-col items-center text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="h-8 w-8" />
              </div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{item.category}</p>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
