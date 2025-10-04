const About = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 animate-fade-in-up">
            Our Philosophy
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-muted-foreground">
            <p className="animate-fade-in-up delay-100 leading-relaxed">
              At Unbuilt Studio, we believe in the power of{" "}
              <span className="text-foreground font-semibold">
                unfinished potential
              </span>
              . Every project is an opportunity to build something that
              hasn&apos;t been built before, to explore uncharted territory, and
              to create experiences that challenge the status quo.
            </p>

            <p className="animate-fade-in-up delay-200 leading-relaxed">
              We&apos;re not just developers and designers. We&apos;re{" "}
              <span className="text-foreground font-semibold">
                architects of digital transformation
              </span>
              . Our multidisciplinary approach combines technical excellence
              with creative vision, ensuring every solution is both beautiful
              and bulletproof.
            </p>

            <p className="animate-fade-in-up delay-300 leading-relaxed">
              From the first line of code to the final deployment, we&apos;re
              obsessed with{" "}
              <span className="text-foreground font-semibold">
                quality, innovation, and results
              </span>
              . Your success is our blueprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
