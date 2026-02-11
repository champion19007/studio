import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div>
            <Link href="/" className="text-2xl font-bold font-headline text-primary tracking-tighter">
              SYR<span className="text-accent">.</span>PANTHY
            </Link>
            <p className="text-muted-foreground mt-2 text-sm max-w-xs leading-relaxed">
              AI & ML Engineer dedicated to building high-performance intelligence systems. 
              Always open to new research collaborations and opportunities.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com/champion19007" target="_blank" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary/50 rounded-full">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/saiyashwantreddy" target="_blank" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary/50 rounded-full">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:saiyashwantreddypanthy@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary/50 rounded-full">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} Sai Yashwant Reddy Panthy. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
