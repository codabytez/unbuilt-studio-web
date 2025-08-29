import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/UI/button";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Coming Soon", path: "/coming-soon" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gradient">
            Unbuilt Studio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`transition-all duration-300 hover:text-neon-cyan ${
                  location.pathname === item.path
                    ? "text-neon-cyan border-b-2 border-neon-cyan"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 hover:shadow-glow"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`transition-all duration-300 hover:text-neon-cyan ${
                    location.pathname === item.path
                      ? "text-neon-cyan"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="outline"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 w-fit"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
