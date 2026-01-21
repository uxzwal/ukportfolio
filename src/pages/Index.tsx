import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Roadmap from "@/components/sections/Roadmap";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Roadmap />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
