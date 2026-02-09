
import { Button } from "./ui/button";
import { ArrowRight, Code, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center space-x-2 text-primary mb-4 font-code">
            <Terminal className="h-4 w-4" />
            <span className="text-sm uppercase tracking-widest font-semibold">Ready to Build</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 leading-tight tracking-tight">
            Crafting Digital <br /> 
            <span className="text-primary italic">Excellence</span> Through Code
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I am a Software Architect and Full Stack Developer specializing in building high-performance 
            web applications that combine stunning UI with robust technical foundations.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <Link href="/#projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/5">
              <Link href="/#contact">
                Let's Talk
              </Link>
            </Button>
          </div>

          <div className="mt-16 flex items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Clean Code</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Modern Tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
