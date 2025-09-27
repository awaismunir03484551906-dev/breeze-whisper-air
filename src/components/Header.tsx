import { Button } from "@/components/ui/button";
import { Wind, Menu, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Wind className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AirFlow Pro
            </span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              Ceiling Fans
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              Industrial
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              Portable
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              Smart Fans
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              Support
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="hidden md:block bg-gradient-primary text-primary-foreground hover:shadow-medium transition-smooth">
              Get Quote
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;