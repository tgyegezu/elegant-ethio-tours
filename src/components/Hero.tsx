import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ethiopia.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ethiopian mountains at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Discover Ethiopia's
          <span className="block text-primary mt-2">Ancient Wonders</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Journey through millennia of history, from rock-hewn churches to majestic highlands.
          Manage your Ethiopian adventures with precision and grace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToBooking}
            className="w-full sm:w-auto"
          >
            Book Your Journey
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={() => {
              const element = document.getElementById("destinations");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          >
            Explore Destinations
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
