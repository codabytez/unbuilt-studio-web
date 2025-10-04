import { LucideIcon } from "lucide-react";
import { Card } from "../UI/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="p-8 border-2 transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:scale-105 hover:border-foreground group cursor-pointer">
      <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-12 w-12 text-foreground" strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};

export default ServiceCard;
