import { ExternalLink } from "lucide-react";
import { Card } from "../UI/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
}

const ProjectCard = ({
  title,
  category,
  description,
  image,
  tags,
  url,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-2 transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:scale-[1.02] cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <Image
          fill
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        {url && (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
          >
            <ExternalLink className="h-5 w-5" />
          </Link>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{category}</p>
          <h3 className="text-2xl font-bold group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
