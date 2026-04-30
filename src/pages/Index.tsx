import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import FloatingBadges from "@/components/sections/FloatingBadges";
import DevOpsDepth from "@/components/sections/DevOpsDepth";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import CursorGlow from "@/components/CursorGlow";
import PageCurtain from "@/components/PageCurtain";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageCurtain />
      <CursorGlow />
      <Navbar />
      <main className="snap-y snap-proximity">
        <section className="snap-start"><Hero /></section>
        <section className="snap-start"><About /></section>
        <section className="snap-start"><Skills /></section>
        <section className="snap-start"><FloatingBadges /></section>
        <section className="snap-start"><DevOpsDepth /></section>
        <section className="snap-start"><Projects /></section>
        <section className="snap-start"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
