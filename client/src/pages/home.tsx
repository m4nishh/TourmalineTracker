import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import HeroesSection from "@/components/services-section";
import FeaturedHeroesSection from "@/components/technology-showcase";
import AboutSection from "@/components/about-section";
import NominateSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <HeroesSection />
      <FeaturedHeroesSection />
      <AboutSection />
      <NominateSection />
      <Footer />
    </div>
  );
}
