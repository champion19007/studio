import { Calendar, Building2, ChevronRight } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "BCG",
      role: "Data Science Intern",
      period: "2025 – 2026",
      points: [
        "Conducted in-depth customer churn analysis to drive retention strategies.",
        "Built and optimized Random Forest models for high-accuracy behavior prediction.",
        "Presented executive-level analytical insights to key stakeholders."
      ]
    },
    {
      company: "Deloitte",
      role: "Data Analytics Intern",
      period: "2025",
      points: [
        "Built comprehensive Tableau dashboards for multi-dimensional data visualization.",
        "Performed forensic-style data analysis to identify anomalies and trends.",
        "Derived business insights using Excel and structured data classification methodologies."
      ]
    },
    {
      company: "Main Flow Services & Technologies",
      role: "Software Intern",
      period: "2024",
      points: [
        "Trained and fine-tuned YOLO models for high-precision real-time object detection.",
        "Deployed Docker-based ROS2 systems integrating sensors and control modules.",
        "Automated data processing pipelines for complex robotics workflows."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Applying machine learning and data science in diverse corporate environments 
            to drive measurable business impact.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium">
                  <Calendar className="mr-2 h-4 w-4" />
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-4">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start text-muted-foreground group-hover:text-foreground transition-colors">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
