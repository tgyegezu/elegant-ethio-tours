import { Award, Globe, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Guides",
    description: "Licensed professionals with deep knowledge of Ethiopian history and culture",
  },
  {
    icon: Globe,
    title: "Curated Experiences",
    description: "Carefully crafted itineraries showcasing the best of Ethiopia",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate tours ensuring personalized attention and authentic connections",
  },
  {
    icon: Heart,
    title: "Sustainable Tourism",
    description: "Supporting local communities and preserving cultural heritage",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Your Gateway to Ethiopian Heritage
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Elegant Tour Manager specializes in crafting unforgettable journeys through Ethiopia's most
            treasured destinations. With decades of combined experience, we bring together professional
            tour management, cultural expertise, and a passion for showcasing the extraordinary beauty
            and history of Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the ancient rock churches of Lalibela to the dramatic peaks of the Simien Mountains,
            we handle every detail with precision and care. Our seamless booking system, expert local
            partnerships, and commitment to excellence ensure your Ethiopian adventure exceeds expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
