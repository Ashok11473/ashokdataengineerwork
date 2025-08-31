import Navigation from "@/components/Navigation";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import CompactAboutSection from "@/components/CompactAboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <EnhancedHeroSection />
        <CompactAboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
