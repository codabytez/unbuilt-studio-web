"use client";
import { Button } from "@/components/UI/button";
import { ArrowRight } from "lucide-react";
import AnimatedParticles from "./animated-particles";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      <AnimatedParticles />

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
              Unbuilt Studio
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-muted-foreground">
              We design and build websites, apps, and digital products
            </p>
            <p className="text-xl mb-12 text-muted-foreground max-w-3xl mx-auto">
              for forward-thinking brands ready to make their mark in the
              digital world
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-hero hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              >
                <Link
                  target="_blank"
                  href="mailto:hello@unbuilt.studio"
                  className="flex items-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
