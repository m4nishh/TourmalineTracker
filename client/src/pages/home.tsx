import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import DignitariesSection from "@/components/technology-showcase";
import {AwardsSection, EventsSection, WhyUniqueSection, WhoNominateSection, WhyNowSection, AdvisorySection, GuestSection, JurySection, MemoryRideSection, WhatIsHoH, IntroSection} from "@/components/about-section";
import SponsorsSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useState, useCallback } from "react";
import { NominationForm, FormData } from "@/components/nomination-form";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    designation: "",
    email: "",
    contactNo: "",
    linkedin: "",
    category: "",
    photo: null,  // Assuming file type or string URL, adjust in FormData
    writeUp: ""
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleInputChange = (field: keyof FormData, value: string | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this field when user edits it
    setFormErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const handleSubmit = () => {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.organization.trim()) errors.organization = "Organization is required";
    if (!formData.designation.trim()) errors.designation = "Designation is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.contactNo.trim()) errors.contactNo = "Contact No is required";
    if (!formData.category) errors.category = "Please select a category";
    if (!formData.photo) errors.photo = "Please upload a photo";
    if (!formData.writeUp.trim()) errors.writeUp = "Write-up is required";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    console.log('Form submitted', formData);
    alert('Form submitted successfully!');
    setFormData({
      name: "",
      organization: "",
      designation: "",
      email: "",
      contactNo: "",
      linkedin: "",
      category: "",
      photo: null,
      writeUp: "",
    });
    setFormErrors({});
    setShowForm(false);
  };

  const categories = [
    { label: "Healthcare Hero", value: "healthcare" },
    { label: "Education Champion", value: "education" },
    { label: "Community Star", value: "community" },
    { label: "Environmental Guardian", value: "environment" },
    { label: "Youth Mentor", value: "youth" },
    { label: "Senior Care Hero", value: "senior-care" },
  ];

  function openForm(): void {
    setShowForm(true);
  }
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 w-full h-full bg-black -z-20"></div>
      <div className="relative z-0">
        <LoadingScreen />
        <IntroSection/>
        <Navigation onNominateClick={openForm} />
        
        {/* Form with explicit positioning */}
        <NominationForm
          isVisible={showForm}
          onClose={() => setShowForm(false)}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          categories={categories}
          formErrors={formErrors}
        />

        <WhatIsHoH />
        <MemoryRideSection />
        <JurySection />
        <GuestSection/>
        <AdvisorySection/>
        <WhyNowSection/>
        <WhoNominateSection/>
        <WhyUniqueSection/>
        <EventsSection />
        <AwardsSection />
        <SponsorsSection />
        <Footer />
      </div>
    </div>
  );
}
