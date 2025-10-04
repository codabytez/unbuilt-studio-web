"use client";
import Footer from "../footer";
import About from "./about";
import AnimatedParticles from "./animated-particles";
import CTA from "./cta";
import Hero from "./hero";
// import Projects from "./projects";
import Services from "./services";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedParticles />
      <Hero />
      <Services />
      <About />
      {/* <Projects /> */}
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
