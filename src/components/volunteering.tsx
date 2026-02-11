import { Calendar, Heart, ChevronRight } from "lucide-react";

export function Volunteering() {
  return (
    <section id="volunteering" className="py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Volunteering & Leadership</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Committed to community growth and mentoring the next generation of engineers.
          </p>
        </div>

        <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Education Mentor</h3>
                <p className="text-primary font-medium">Manipal University Jaipur</p>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="mr-2 h-4 w-4" />
              Jan 2025 – Jun 2025
            </div>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-start text-muted-foreground group-hover:text-foreground transition-colors">
              <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
              <span className="leading-relaxed">Mentored 12 undergraduate student teams on diverse research domains including robotics and AI.</span>
            </li>
            <li className="flex items-start text-muted-foreground group-hover:text-foreground transition-colors">
              <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
              <span className="leading-relaxed">Guided students through research methodologies and project lifecycle management.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
