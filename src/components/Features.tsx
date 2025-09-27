import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Smartphone, 
  VolumeX, 
  Leaf, 
  Shield, 
  Settings 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Advanced motor technology reduces power consumption by up to 70% while maintaining peak performance.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Smartphone,
    title: "Smart Controls",
    description: "Control your fans remotely with our mobile app, voice assistants, and programmable timers.",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    icon: VolumeX,
    title: "Whisper Quiet",
    description: "Brushless DC motors ensure ultra-quiet operation, perfect for bedrooms and study areas.",
    gradient: "from-green-400 to-teal-500"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable materials and energy-efficient designs help reduce your carbon footprint.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Premium materials and rigorous testing ensure years of reliable performance with minimal maintenance.",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Multiple speed settings, oscillation modes, and lighting options to match your preferences.",
    gradient: "from-indigo-400 to-blue-600"
  }
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Our Fans?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of innovation, efficiency, and design in every product we create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-smooth bg-gradient-card border-border"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.gradient} p-4 shadow-medium`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 shadow-strong">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have upgraded their comfort with our premium fan solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-smooth shadow-medium hover:shadow-strong">
                Shop Now
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-smooth">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;