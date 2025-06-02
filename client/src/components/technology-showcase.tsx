import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const featuredHeroes = [
  {
    name: "Dr. Priya Sharma",
    category: "Healthcare Hero",
    story: "Led COVID-19 relief efforts in slum areas, providing free medical care to over 10,000 families during the pandemic.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400",
    quote: "Service to humanity is the highest form of worship."
  },
  {
    name: "Mohammad Khan",
    category: "Education Champion",
    story: "Transformed a government school in Old City, improving literacy rates from 40% to 95% in just 3 years.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400",
    quote: "Education is the most powerful weapon to change the world."
  },
  {
    name: "Lakshmi Devi",
    category: "Everyday Angel",
    story: "Feeds 500+ homeless people daily through her mobile kitchen, running entirely on donations and volunteers.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400",
    quote: "No one should sleep hungry in our city."
  }
];

export default function DignitariesSection() {
  return (
    <section id="dignitaries" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-serif">Distinguished Dignitaries</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Honoring the esteemed leaders and personalities who support our mission of recognizing heroes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredHeroes.map((hero, index) => (
            <Card key={index} className="bg-gray-900 border border-gray-800 overflow-hidden group hover:border-gold transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hero.image}
                  alt={`${hero.name} - ${hero.category}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {hero.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-gold mr-2 fill-current" />
                  <h3 className="text-xl font-bold text-white font-serif">{hero.name}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {hero.story}
                </p>
                <div className="flex items-start">
                  <Quote className="w-4 h-4 text-gold mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gold italic text-sm">"{hero.quote}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-gold text-black px-8 py-4 h-auto text-lg font-semibold hover:bg-yellow-500 transition-all">
            View All Heroes
          </Button>
        </div>
      </div>
    </section>
  );
}
