import { Code, Palette, Server, Clipboard, Cloud } from "lucide-react";
import ServiceCard from "./service-card";
import { useScrollAnimation } from "@/hooks/use-scroll";

const services = [
  {
    icon: Code,
    title: "Websites",
    description:
      "Custom-built, responsive websites that captivate and convert your audience.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love and remember.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Cutting-edge frontend solutions using the latest frameworks and technologies.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Scalable, secure backend systems that power your applications.",
  },
  {
    icon: Clipboard,
    title: "Project Management",
    description:
      "Expert coordination ensuring your project delivers on time and on budget.",
  },
  {
    icon: Cloud,
    title: "DevOps",
    description:
      "Streamlined deployment pipelines and infrastructure automation.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            What We Do
          </h2>
          <p
            className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Full-spectrum tech solutions from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
