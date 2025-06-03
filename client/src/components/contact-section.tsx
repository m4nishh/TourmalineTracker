import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Star, Heart, Users, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";


interface Sponsor {
  name: string;
  logo: string;
  alt: string;
}

interface SponsorsProps {
  sponsors?: Sponsor[];
  onGetInTouchClick?: () => void;
}

const defaultSponsors: Sponsor[] = [
  {
    name: "House Of Make-Up",
    logo: "https://tourmaline-bavarois-f43898.netlify.app/_next/image?url=%2Fassets%2Fimages%2FHOM.png&w=1920&q=75",
    alt: "Logo of House Of Make-Up"
  },
  {
    name: "Qentelli",
    logo: "https://tourmaline-bavarois-f43898.netlify.app/_next/image?url=%2Fassets%2Fimages%2FQentelli.png&w=1920&q=75",
    alt: "Logo of Qentelli"
  },
  {
    name: "Good Universe",
    logo: "https://tourmaline-bavarois-f43898.netlify.app/_next/image?url=%2Fassets%2Fimages%2FGood_Universe.png&w=1920&q=75",
    alt: "Logo of Good Universe"
  }
];

export default function SponsorsSection({ 
  sponsors = defaultSponsors,
  onGetInTouchClick 
}: SponsorsProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nomineeName: "",
    nomineeContact: "",
    category: "",
    yourName: "",
    yourEmail: "",
    heroStory: "",
    impact: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nomination Submitted!",
      description: "Thank you for nominating a hero! We will review the nomination and get in touch soon.",
    });
    setFormData({
      nomineeName: "",
      nomineeContact: "",
      category: "",
      yourName: "",
      yourEmail: "",
      heroStory: "",
      impact: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const categories = [
    { value: "healthcare", label: "Healthcare Hero", icon: Heart },
    { value: "education", label: "Education Champion", icon: Star },
    { value: "community", label: "Community Leader", icon: Users },
    { value: "safety", label: "Safety Guardian", icon: Award },
    { value: "innovation", label: "Innovation Pioneer", icon: Star },
    { value: "everyday", label: "Everyday Angel", icon: Heart }
  ];

  const handleGetInTouchClick = () => {
    if (onGetInTouchClick) {
      onGetInTouchClick();
    } else {
      // Default behavior - you can modify this as needed
      console.log('Get in touch clicked');
    }
  };

  return (
    <div id="sponsors" className="scroll-mt-20">
      <section id="sponsors" className="relative min-h-screen bg-black pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="relative z-10 mb-16 text-center" style={{ opacity: 1 }}>
            <h2 className="mb-6 font-lora text-4xl font-bold text-white md:text-5xl">
              Our Sponsors
            </h2>
            <p className="mx-auto max-w-3xl font-poppins text-lg text-gray-300">
              Proudly supported by leading organizations committed to community development.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white/5 p-8 backdrop-blur border border-white/10 shadow-md transition-transform duration-300 hover:shadow-lg"
                style={{ opacity: 1, transform: 'none' }}
              >
                <div className="relative w-full h-[200px] flex items-center justify-center">
                   <img
                    alt={sponsor.alt}
                    src={sponsor.logo}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="mb-1 font-lora text-xl font-bold text-white">
                    {sponsor.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center" style={{ opacity: 1, transform: 'none' }}>
            <h3 className="mb-4 font-lora text-2xl font-bold text-white">
              Become a Sponsor
            </h3>
            <button
              onClick={handleGetInTouchClick}
              className="mt-2 rounded-full bg-yellow-400 px-8 py-3 font-poppins text-lg font-semibold text-black hover:bg-yellow-500 transition-all cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}