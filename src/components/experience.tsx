import { Calendar, Building2, ChevronRight, Award } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "JPMorganChase",
      role: "Quantitative Research Intern",
      period: "Feb 2026 – Present",
      points: [
        "Applying quantitative methods to financial modeling and risk assessment.",
        "Developing algorithms for large-scale data analysis and market prediction.",
        "Collaborating with research teams to optimize financial strategies using statistical learning."
      ],
      isSimulation: false
    },
    {
      company: "Tata Group",
      role: "Gen AI Data Analyst Intern",
      period: "Jan 2026 – Present",
      points: [
        "Leveraging Generative AI and LLMs to automate complex data analysis workflows.",
        "Building RAG systems for efficient knowledge retrieval from enterprise datasets.",
        "Performing advanced data classification and sentiment analysis using transformer architectures."
      ],
      isSimulation: false
    },
    {
      company: "BCG X",
      role: "Data Science Intern",
      period: "Nov 2025 – Jan 2026",
      points: [
        "Conducted a comprehensive customer churn analysis simulation at BCG X.",
        "Built and optimized Random Forest models for high-accuracy behavior prediction.",
        "Showcased advanced analytics skills to identify key churn drivers and retention strategies.",
        "Presented executive-level insights and data-driven recommendations."
      ],
      isSimulation: true
    },
    {
      company: "Deloitte",
      role: "Trainee (Data Analytics)",
      period: "Oct 2025 – Nov 2025",
      points: [
        "Completed a forensic technology and data analytics job simulation.",
        "Developed interactive Tableau dashboards for multi-dimensional data visualization.",
        "Performed anomaly detection and trend analysis on large audit datasets.",
        "Derived business intelligence insights using Excel and structured methodologies."
      ],
      isSimulation: true
    },
    {
      company: "Main Flow Services & Technologies",
      role: "Software Intern",
      period: "Jul 2024 – Nov 2024",
      points: [
        "Trained YOLO algorithm with field-collected datasets to detect new features and fine-tune model parameters.",
        "Deployed Docker-ROS2 managed nodes and established GPS, camera, and solenoid pneumatic control.",
        "Automated data processing pipelines for complex robotics workflows."
      ],
      isSimulation: false
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Professional Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Applying machine learning, quantitative research, and data science in leading 
            global organizations to drive intelligent solutions.
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
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      {exp.isSimulation && (
                        <span className="flex items-center text-[10px] font-bold bg-accent/10 text-accent px-2 py-0.5 rounded-full uppercase tracking-tighter border border-accent/20">
                          <Award className="h-3 w-3 mr-1" /> Certification
                        </span>
                      )}
                    </div>
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
