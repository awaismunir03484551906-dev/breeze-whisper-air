import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroCeilingFan from "@/assets/hero-ceiling-fan.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Premium Fans for
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Every Space
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                From whisper-quiet ceiling fans to powerful industrial solutions. 
                Discover energy-efficient cooling with cutting-edge design and smart technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:shadow-strong transition-smooth group"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Energy Efficient</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroCeilingFan} 
                alt="Premium ceiling fan with LED lighting"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium">
              Energy Star ⭐
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground px-6 py-3 rounded-lg shadow-medium border">
              <div className="text-sm text-muted-foreground">Starting from</div>
              <div className="text-2xl font-bold text-primary">$299</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;