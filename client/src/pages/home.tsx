import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import JurySection from "@/components/services-section";
import DignitariesSection from "@/components/technology-showcase";
import AwardsSection from "@/components/about-section";
import SponsorsSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useState } from "react";
import { NominationForm, FormData } from "@/components/nomination-form";

export default function Home() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 w-full h-full bg-black -z-20"></div>
      <div className="relative z-0">
        <LoadingScreen />
        <Navigation onNominateClick={() => setShowForm(true)} />
        <NominationForm isVisible={showForm} onClose={() => setShowForm(false)} formData={{ nomineeName: "", nomineeContact: "", category: "", yourName: "", yourEmail: "", heroStory: "", impact: "" }} categories={[]} handleInputChange={(field: keyof FormData, value: string) => {
        }} handleSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          console.log("Form submitted");
        }} />
        <HeroSection />
        <JurySection />
        <DignitariesSection />
        <AwardsSection />
        <SponsorsSection />
        <Footer />
      </div>
    </div>
  );
}
