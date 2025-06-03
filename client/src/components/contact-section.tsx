import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Star, Heart, Users, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function SponsorsSection() {
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

  return (
    <section id="sponsors" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gold mb-6">
            <Star className="w-8 h-8 text-gold fill-current" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 font-serif">Our Sponsors</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We gratefully acknowledge the generous support of our sponsors who make the Heroes of Hyderabad 
            awards possible and help us celebrate our community's finest.
          </p>
        </div>
        
        
      </div>
    </section>
  );
}
