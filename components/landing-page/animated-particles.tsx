import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const AnimatedParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const colors = [
        "var(--color-neon-cyan)",
        "var(--color-neon-pink)",
        "var(--color-neon-purple)",
        "var(--color-electric-blue)",
      ];
      const newParticles: Particle[] = [];

      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 8,
        });
      }

      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute top-0 pointer-events-none overflow-hidden h-screen w-full">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            animation: `particles 8s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedParticles;
