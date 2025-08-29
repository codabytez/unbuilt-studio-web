import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const GlassCard = ({
  children,
  className,
  hover = false,
  style,
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-effect rounded-xl p-6 transition-all duration-500",
        hover && "hover:shadow-glow hover:scale-105 hover:border-primary/50",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
