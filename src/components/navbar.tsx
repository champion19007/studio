"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X, FileText, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1qN0M9mAJjsOx-PQ9bgxT0HkqvuDuGhMv/view?usp=drive_link";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Research", href: "/#research" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold font-headline tracking-tighter flex items-center group">
              <span className="text-primary group-hover:text-accent transition-colors">SYR</span>
              <span className="text-foreground/40 mx-0.5">.</span>
              <span>PANTHY</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center space-x-6">
              <Link
                href={resumeLink}
                target="_blank"
                className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                CV
              </Link>
              <Button size="sm" className="rounded-full bg-white text-black hover:bg-white/90 font-bold px-6" asChild>
                <a href="mailto:saiyashwantreddypanthy@gmail.com">
                  Contact <ChevronRight className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-0 h-screen w-full bg-background z-[-1] transition-transform duration-500 flex flex-col justify-center px-8",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-4xl font-bold hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 flex flex-col space-y-4">
            <Button size="lg" className="w-full rounded-full bg-white text-black py-8 text-xl font-bold" asChild>
              <a href="mailto:saiyashwantreddypanthy@gmail.com">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}