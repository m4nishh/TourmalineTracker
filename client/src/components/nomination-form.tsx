// NominationForm.tsx
import React, { FormEvent } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

const { useState } = React;
interface Category {
    label: string;
    value: string;
  }
  
  export interface FormData {
    nomineeName: string;
    nomineeContact: string;
    category: string;
    yourName: string;
    yourEmail: string;
    heroStory: string;
    impact: string;
  }
  const [formData, setFormData] = useState({
    nomineeName: "",
    nomineeContact: "",
    category: "",
    yourName: "",
    yourEmail: "",
    heroStory: "",
    impact: "",
  });
  
  
  interface NominationFormProps {
    formData: FormData;
    categories: Category[];
    handleInputChange: (field: keyof FormData, value: string) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    isVisible: boolean;
  onClose: () => void;
  }
  

  export const NominationForm: React.FC<NominationFormProps> = ({
    formData,
    categories,
    handleInputChange,
    handleSubmit,
  }) => {

  return (
    <div id="nomination-form" className="fixed inset-0 z-[999] overflow-y-auto bg-black bg-opacity-70 flex justify-center items-start pt-20">
      <div className="max-w-4xl w-full mx-auto">
        {/* Nomination form goes here (your original Card JSX) */}
        {/* Add a close button */}
        {/* <div className="text-right">
          <button
            onClick={onClose}
            className="text-white font-bold px-4 py-2 hover:text-yellow-400"
          >
            Close ✕
          </button>
        </div> */}
        {/* Paste your original <Card> JSX here */}
        <div className="max-w-4xl mx-auto">
      <Card className="bg-gray-900 border border-gray-800">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-4 font-serif">
                  About the Hero
                </h3>

                <div>
                  <Label htmlFor="nomineeName" className="text-sm font-medium text-gray-300 mb-2">
                    Hero's Full Name *
                  </Label>
                  <Input
                    id="nomineeName"
                    value={formData.nomineeName}
                    onChange={(e) => handleInputChange("nomineeName", e.target.value)}
                    placeholder="Enter the hero's name"
                    className="mt-2 bg-black border-gray-700 text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="nomineeContact" className="text-sm font-medium text-gray-300 mb-2">
                    Hero's Contact (Optional)
                  </Label>
                  <Input
                    id="nomineeContact"
                    value={formData.nomineeContact}
                    onChange={(e) => handleInputChange("nomineeContact", e.target.value)}
                    placeholder="Phone or email"
                    className="mt-2 bg-black border-gray-700 text-white"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-300 mb-2">
                    Hero Category *
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleInputChange("category", value)}
                  >
                    <SelectTrigger className="mt-2 bg-black border-gray-700 text-white">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {categories.map((category) => (
                        <SelectItem
                          key={category.value}
                          value={category.value}
                          className="text-white hover:bg-gray-800"
                        >
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-4 font-serif">
                  Your Information
                </h3>

                <div>
                  <Label htmlFor="yourName" className="text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </Label>
                  <Input
                    id="yourName"
                    value={formData.yourName}
                    onChange={(e) => handleInputChange("yourName", e.target.value)}
                    placeholder="Your full name"
                    className="mt-2 bg-black border-gray-700 text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="yourEmail" className="text-sm font-medium text-gray-300 mb-2">
                    Your Email *
                  </Label>
                  <Input
                    type="email"
                    id="yourEmail"
                    value={formData.yourEmail}
                    onChange={(e) => handleInputChange("yourEmail", e.target.value)}
                    placeholder="your.email@example.com"
                    className="mt-2 bg-black border-gray-700 text-white"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="heroStory" className="text-sm font-medium text-gray-300 mb-2">
                  Hero's Story *
                </Label>
                <Textarea
                  id="heroStory"
                  value={formData.heroStory}
                  onChange={(e) => handleInputChange("heroStory", e.target.value)}
                  rows={6}
                  placeholder="Tell us about this person's heroic acts, their character, and what makes them special..."
                  className="mt-2 bg-black border-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="impact" className="text-sm font-medium text-gray-300 mb-2">
                  Community Impact
                </Label>
                <Textarea
                  id="impact"
                  value={formData.impact}
                  onChange={(e) => handleInputChange("impact", e.target.value)}
                  rows={4}
                  placeholder="How has this person impacted the community?"
                  className="mt-2 bg-black border-gray-700 text-white"
                />
              </div>
            </div>

            <div className="text-center pt-6">
              <Button
                type="submit"
                className="bg-gold text-black px-12 py-4 h-auto text-lg font-semibold hover:bg-yellow-500 transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Nomination
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                All nominations are reviewed by our team. We may contact you for additional information.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
        
      </div>
    </div>
  );
}
