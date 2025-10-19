import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Elegant Tour Manager
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Your trusted partner for authentic Ethiopian heritage tours and unforgettable journeys.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@eleganttours.et"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#destinations"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Book Tour
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Top Destinations</h4>
            <ul className="space-y-2">
              <li className="text-secondary-foreground/80">Lalibela Churches</li>
              <li className="text-secondary-foreground/80">Gondar Castles</li>
              <li className="text-secondary-foreground/80">Simien Mountains</li>
              <li className="text-secondary-foreground/80">Axum Obelisks</li>
              <li className="text-secondary-foreground/80">Lake Tana</li>
              <li className="text-secondary-foreground/80">Danakil Depression</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/70">
            © {new Date().getFullYear()} Elegant Tour Manager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
