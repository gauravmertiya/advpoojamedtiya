import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PracticeAreas from "@/components/PracticeAreas";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PracticeAreas />
    <Testimonials />
    <BlogSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
