import { Metadata } from "next";
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';

export const metadata: Metadata = {
  metadataBase: new URL("https://vincylim-portfolio.vercel.app"),
  title: "Vincy Lim | Software Engineering Portfolio",
  description:
    "Software engineering graduate from Malaysia with experience in full-stack web development. Explore my projects, skills, and technical experience.",
  keywords: [
    "Vincy Lim",
    "Software Engineer",
    "Software Engineering Graduate",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Laravel Developer",
    "UTAR",
  ],
  authors: [{ name: "Vincy Lim" }],
  creator: "Vincy Lim",
  publisher: "Vincy Lim",
    openGraph: {
    title: "Vincy Lim | Software Engineering Portfolio",
    description: "Software engineering graduate specialising in full-stack web development. View projects, technical skills, and experience.",
    url: "https://vincylim-portfolio.vercel.app",
    siteName: "Vincy Lim's Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Vincy Lim - Software Engineer Portfolio',
      }
    ],
  },
}

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
