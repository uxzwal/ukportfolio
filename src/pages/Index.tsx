import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Roadmap from "@/components/sections/Roadmap";
import Skills from "@/components/sections/Skills";
import DevOpsDepth from "@/components/sections/DevOpsDepth";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roadmap />
        <Skills />
        <DevOpsDepth />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
