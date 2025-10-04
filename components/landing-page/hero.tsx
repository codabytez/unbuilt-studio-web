"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../UI/button";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="overflow-hidden">
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter animate-fade-in-up"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${
                  mousePosition.y * 0.5
                }px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              Unbuilt
              <br />
              <span className="text-gradient">Studio</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            We craft digital experiences that push boundaries and redefine
            what&apos;s possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link href="/contact">
              <Button size="lg" className="group text-lg">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="text-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: "3s",
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-muted/10 rounded-full blur-2xl animate-float"
          style={{
            animationDelay: "1.5s",
            transform: `translate(${mousePosition.x * 0.7}px, ${
              mousePosition.y * 0.7
            }px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--color-input)_1px,transparent_1px),linear-gradient(90deg,var(--color-input)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
    </section>
  );
};

export default Hero;
