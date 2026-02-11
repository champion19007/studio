import { Calendar, GraduationCap, ChevronRight, BookOpen } from "lucide-react";

export function Education() {
  const education = [
    {
      institution: "Manipal University Jaipur",
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      period: "Sept 2021 – Dec 2025",
      points: [
        "Specialization in Problem Solving and Algorithm Design.",
        "Core focus on Artificial Intelligence, Machine Learning, and Neural Networks.",
        "Actively involved in research-led projects involving computer vision and search algorithms.",
        "Maintained high academic standing while pursuing high-impact internships."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Academic Foundation</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building a strong theoretical and practical background in computer science, 
            with a heavy specialization in modern AI architectures.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div 
              key={idx} 
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium">
                  <Calendar className="mr-2 h-4 w-4" />
                  {edu.period}
                </div>
              </div>
              
              <ul className="space-y-4">
                {edu.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start text-muted-foreground group-hover:text-foreground transition-colors">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center space-x-2 text-[10px] font-bold text-primary uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                <BookOpen className="h-3 w-3" />
                <span>Specialization in Problem Solving</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
