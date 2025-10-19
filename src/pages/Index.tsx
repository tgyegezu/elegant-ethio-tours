import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import BookingForm from "@/components/BookingForm";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <About />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
