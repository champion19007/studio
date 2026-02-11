"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X, FileText } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1qN0M9mAJjsOx-PQ9bgxT0HkqvuDuGhMv/view?usp=drive_link";

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Research", href: "/#research" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold font-headline text-primary tracking-tighter">
              SYR<span className="text-accent">.</span>PANTHY
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                href={resumeLink}
                target="_blank"
                className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors flex items-center"
              >
                Resume <FileText className="ml-1 h-3 w-3" />
              </Link>
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold" asChild>
                <a href="mailto:saiyashwantreddypanthy@gmail.com">Hire Me</a>
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b border-border transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={resumeLink}
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors flex items-center"
          >
            View Resume <FileText className="ml-2 h-4 w-4" />
          </Link>
          <div className="px-3 py-2">
            <Button className="w-full bg-primary text-primary-foreground font-bold" asChild>
              <a href="mailto:saiyashwantreddypanthy@gmail.com">Hire Me</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
