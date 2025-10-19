import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";
import lalibela from "@/assets/destination-lalibela-real.jpg";
import gondar from "@/assets/destination-gondar-real.jpg";
import simien from "@/assets/destination-simien.jpg";
import axum from "@/assets/destination-axum-real.jpg";
import lakeTana from "@/assets/destination-lake-tana.jpg";
import danakil from "@/assets/destination-danakil.jpg";

const destinations = [
  {
    id: 1,
    name: "Lalibela",
    image: lalibela,
    description: "Explore the 11 medieval rock-hewn churches, a UNESCO World Heritage Site and spiritual heart of Ethiopia.",
    duration: "3-4 days",
    groupSize: "4-12 people",
    price: "$899",
  },
  {
    id: 2,
    name: "Gondar",
    image: gondar,
    description: "Discover the royal castles and palaces of the Ethiopian Camelot, featuring stunning baroque architecture.",
    duration: "2-3 days",
    groupSize: "4-15 people",
    price: "$649",
  },
  {
    id: 3,
    name: "Simien Mountains",
    image: simien,
    description: "Trek through dramatic peaks and valleys, home to endemic wildlife including Gelada baboons and Ethiopian wolves.",
    duration: "5-7 days",
    groupSize: "6-10 people",
    price: "$1,299",
  },
  {
    id: 4,
    name: "Axum",
    image: axum,
    description: "Visit the ancient kingdom's towering stelae and archaeological treasures of the Aksumite Empire.",
    duration: "2 days",
    groupSize: "4-12 people",
    price: "$549",
  },
  {
    id: 5,
    name: "Lake Tana",
    image: lakeTana,
    description: "Cruise Ethiopia's largest lake and explore ancient island monasteries with stunning frescoes and manuscripts.",
    duration: "2-3 days",
    groupSize: "4-15 people",
    price: "$699",
  },
  {
    id: 6,
    name: "Danakil Depression",
    image: danakil,
    description: "Experience one of Earth's most extreme landscapes with colorful sulfur springs, salt flats, and active volcanoes.",
    duration: "4-5 days",
    groupSize: "6-12 people",
    price: "$1,499",
  },
];

const Destinations = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Iconic Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover six UNESCO World Heritage Sites and natural wonders across Ethiopia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-primary text-sm font-semibold">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Ethiopia</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-display">{destination.price}</CardTitle>
                <CardDescription className="text-sm line-clamp-3">
                  {destination.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  <span>{destination.groupSize}</span>
                </div>
                <Button
                  variant="default"
                  className="w-full mt-4"
                  onClick={scrollToBooking}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
