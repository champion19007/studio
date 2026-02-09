
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function About() {
  const headshot = PlaceHolderImages.find(img => img.id === "headshot");

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-lg" />
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              {headshot && (
                <Image
                  src={headshot.imageUrl}
                  alt="Developer headshot"
                  fill
                  className="object-cover"
                  data-ai-hint={headshot.imageHint}
                />
              )}
            </div>
            <Card className="absolute -bottom-6 -right-6 md:right-10 w-48 bg-background border-primary/20 shadow-xl hidden md:block">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-primary">8+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm a passionate developer who believes that technology should be as beautiful 
                as it is functional. With a strong foundation in computer science and a keen eye for 
                design, I help startups and established brands build future-proof digital products.
              </p>
              <p>
                My journey began in the world of high-performance computing, where I learned the importance 
                of efficiency and scalability. Since then, I've expanded my expertise across the full 
                stack, focusing on creating seamless user experiences using modern frameworks like 
                React, Next.js, and Node.js.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Values</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-1">Accessibility First</Badge>
                <Badge variant="secondary" className="px-4 py-1">Performance Driven</Badge>
                <Badge variant="secondary" className="px-4 py-1">User Centric</Badge>
                <Badge variant="secondary" className="px-4 py-1">Continuous Learning</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
