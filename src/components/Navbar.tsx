import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="font-display text-2xl font-bold text-primary">
            Elegant Tour Manager
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("destinations")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Book Tour
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            {user ? (
              <>
                <Button variant="outline" size="sm" onClick={() => navigate("/admin")}>
                  Dashboard
                </Button>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button variant="default" size="sm" onClick={() => navigate("/auth")}>
                Admin Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button
              onClick={() => scrollToSection("destinations")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
            >
              Book Tour
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
            >
              Contact
            </button>
            <div className="px-4 space-y-2">
              {user ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      navigate("/admin");
                      setIsOpen(false);
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full" onClick={signOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    navigate("/auth");
                    setIsOpen(false);
                  }}
                >
                  Admin Login
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
