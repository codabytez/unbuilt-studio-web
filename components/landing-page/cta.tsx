import { ArrowRight } from "lucide-react";
import { Button } from "../UI/button";
import { APP } from "@/lib/constants";

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up">
            Let&apos;s Build Something
            <br />
            <span className="text-gradient">Extraordinary</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
            Ready to bring your vision to life? Let&apos;s talk about your next
            project.
          </p>

          <div className="animate-fade-in-up delay-200">
            <Button
              size="lg"
              className="group text-lg px-8"
              onClick={() => {
                window.location.href = `mailto:${APP.EMAIL}?subject=Let's%20Build%20Something%20Extraordinary`;
              }}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
