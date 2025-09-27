import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import industrialFan from "@/assets/industrial-fan.jpg";
import pedestalFan from "@/assets/pedestal-fan.jpg";
import smartFan from "@/assets/smart-fan.jpg";
import heroCeilingFan from "@/assets/hero-ceiling-fan.jpg";

const categories = [
  {
    title: "Ceiling Fans",
    description: "Elegant and efficient ceiling fans with integrated lighting and smart controls.",
    image: heroCeilingFan,
    features: ["LED Lighting", "Remote Control", "Energy Efficient"],
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Industrial Fans",
    description: "Heavy-duty fans for warehouses, factories, and commercial applications.",
    image: industrialFan,
    features: ["High Velocity", "Durable Build", "Commercial Grade"],
    color: "bg-gray-50 border-gray-200"
  },
  {
    title: "Portable Fans",
    description: "Versatile pedestal and table fans with adjustable height and oscillation.",
    image: pedestalFan,
    features: ["Adjustable Height", "Oscillation", "Multiple Speeds"],
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Smart Fans",
    description: "IoT-enabled fans with app control, timers, and intelligent automation.",
    image: smartFan,
    features: ["App Control", "Voice Assistant", "Smart Sensors"],
    color: "bg-purple-50 border-purple-200"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect fan solution for your needs, from residential comfort to industrial power.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-smooth cursor-pointer bg-gradient-card border-border overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;