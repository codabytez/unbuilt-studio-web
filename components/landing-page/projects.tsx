import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../UI/button";
import ProjectCard from "./project-card";

const featuredProjects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description:
      "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "E-Commerce Platform",
    category: "Full-Stack Development",
    description:
      "Modern e-commerce solution with seamless checkout experience and advanced inventory management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Healthcare Portal",
    category: "UI/UX Design",
    description:
      "Patient-centered healthcare platform with intuitive appointment scheduling and telemedicine features.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Figma", "React", "Node.js"],
  },
];

const Projects = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up delay-100">
              Projects that showcase our expertise and innovation
            </p>
          </div>
          <Link href="/projects" className="animate-fade-in-up delay-200">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
