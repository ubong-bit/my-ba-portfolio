import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-950 overflow-x-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      <div className="glow-orb w-[600px] h-[600px] bg-primary-600 top-[-200px] right-[-200px]" />
      <div className="glow-orb w-[500px] h-[500px] bg-secondary-600 bottom-[20%] left-[-200px]" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
