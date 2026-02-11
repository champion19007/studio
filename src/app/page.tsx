import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Research } from "@/components/research";
import { ProjectGallery } from "@/components/project-gallery";
import { Achievements } from "@/components/achievements";
import { Volunteering } from "@/components/volunteering";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Research />
        <Achievements />
        <Volunteering />
        <ProjectGallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
