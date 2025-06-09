import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import DignitariesSection from "@/components/technology-showcase";
import {AwardsSection, EventsSection, WhyUniqueSection, WhoNominateSection, WhyNowSection, AdvisorySection, GuestSection, JurySection, MemoryRideSection, WhatIsHoH, IntroSection} from "@/components/about-section";
import SponsorsSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useState } from "react";
import { NominationForm, NominationFormData } from "@/components/nomination-form";

const submitNominationUrl = "https://api.heroesofhyderabad.com/api/submit-nomination";
const uloadPhotoUrl = "https://api.heroesofhyderabad.com/api/upload-photo";
export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<NominationFormData>({
    name: "",
    organization: "",
    designation: "",
    email: "",
    contactNo: "",
    linkedin: "",
    category: "",
    photo: null,
    writeUp: ""
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof NominationFormData, string>>>({});

  const handleInputChange = (field: keyof NominationFormData, value: string | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setFormErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

const uploadPhotoToS3 = async (file: File): Promise<string> => {
      if (!uloadPhotoUrl) {
        throw new Error("Upload photo URL is not defined");
      }
      const formData = new FormData();
      formData.append("photo", file);

      const res = await fetch(uloadPhotoUrl, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await res.json();
      return data.url;
    };


  const handleSubmit = async () => {
    const errors: Partial<Record<keyof NominationFormData, string>> = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.organization.trim()) errors.organization = "Organization is required";
    if (!formData.designation.trim()) errors.designation = "Designation is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim()))
      errors.email = "Invalid email address";
    if (!formData.contactNo.trim()) errors.contactNo = "Contact number is required";
    if (!formData.category) errors.category = "Please select a category";
    if (!formData.photo) errors.photo = "Photo upload is required";
    if (!formData.writeUp.trim()) errors.writeUp = "Write-up is required";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);

    try {
      let photoUrl = "";
      if (formData.photo) {
        if (formData.photo) {
          photoUrl = await uploadPhotoToS3(formData.photo);
        }
      }

      // Find the selected category label
      const selectedCategory = categories.find(cat => cat.value === formData.category);

      // Prepare data in the format expected by your API
      const submissionData = {
        name: formData.name.trim(),
        organization: formData.organization.trim(),
        designation: formData.designation.trim(),
        email: formData.email.trim(),
        contact_no: formData.contactNo.trim(),
        linkedin: formData.linkedin.trim() || "",
        categories: selectedCategory?.label || formData.category, // Use label as per API spec
        upload_photo: photoUrl, // This should be a URL, not a file
        write_up: formData.writeUp.trim()
      };

      console.log("Submitting data:", submissionData);

      if (!submitNominationUrl) {
        throw new Error("Submit nomination URL is not defined");
      }
      const response = await fetch(submitNominationUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Submission successful:", result);
      alert("Form submitted successfully!");

      // Reset form
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
      
    } catch (error) {
      console.error("Submission error:", error);
      const errorMessage = (error instanceof Error && error.message) ? error.message : 'Please try again later.';
      alert(`Failed to submit: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    { label: "Heroes of Inspiration Award", value: "inspiration-award" },
    { label: "Social Impact Heroes", value: "social-impact" },
    { label: "Heroes in Entrepreneurship", value: "entrepreneurship" },
    { label: "Heroes in Tech", value: "tech" },
    { label: "Heroes of HR", value: "hr" },
    { label: "Sustainability Heroes", value: "sustainability" },
    { label: "Heroic Influencers", value: "influencers" },
    { label: "Heroes of Academia", value: "academia" },
    { label: "Heroes in Philanthropy", value: "philanthropy" },
    { label: "Innovative Heroes", value: "innovation" },
    { label: "Unsung Heroes", value: "unsung" },
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

        {/* Loading overlay for form submission */}
        {isSubmitting && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-black">Submitting nomination...</p>
            </div>
          </div>
        )}

        <WhatIsHoH />
        <MemoryRideSection />
        <JurySection />
        <AdvisorySection/>
        <GuestSection/>
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
};