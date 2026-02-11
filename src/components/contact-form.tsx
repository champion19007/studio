"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MessageSquare, Send, User, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out, Sai. I will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Let's Collaborate</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm always looking for ambitious projects in AI, Computer Vision, and Robotics. 
              Whether you're looking for research insights or engineering expertise, I'm just a message away.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Email</h4>
                  <p className="font-bold">saiyashwantreddypanthy@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Phone</h4>
                  <p className="font-bold">+91 8369682814</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Location</h4>
                  <p className="font-bold">India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest">Your Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="name" placeholder="John Doe" className="pl-10 bg-secondary/20" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="john@example.com" className="pl-10 bg-secondary/20" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest">Message</Label>
                <Textarea id="message" placeholder="I'm interested in collaborating on..." className="min-h-[150px] resize-none bg-secondary/20" required />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6">
                {isSubmitting ? "Sending Intelligence..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
