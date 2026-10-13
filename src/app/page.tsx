import ScrollProgress from "../components/ui/ScrollProgress";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";
import Timeline from "../components/sections/Timeline";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Certifications />
        <CTA />
        <Contact />
      </main>
    </>
  );
}
