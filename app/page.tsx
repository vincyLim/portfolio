import { Metadata } from "next";
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';

export const metadata: Metadata = {
  title: "Vincy Lim’s Portfolio",
  description: "A fresh graduate software engineer from Malaysia. Explore my projects, skills, and experiences in the tech industry.",
  keywords: [
    "Vincy Lim",
    "Malaysia",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
  ],
}

//TODO: Add linkedin profile
export default async function Home() {
  return (
      <main className="w-full min-h-screen">
        <Navbar active="hero" />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
  );
}
