import { Wind, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wind className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">AirFlow Pro</span>
            </div>
            <p className="text-muted-foreground">
              Premium fans and cooling solutions for residential, commercial, and industrial applications.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>1-800-AIRFLOW</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@airflowpro.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-smooth">Ceiling Fans</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Industrial Fans</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Portable Fans</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Smart Fans</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Accessories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-smooth">Installation Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Warranty</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Troubleshooting</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact Support</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Returns</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 AirFlow Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;