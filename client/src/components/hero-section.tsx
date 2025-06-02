import { Button } from "@/components/ui/button";
import { Star, Heart, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-black min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-gold mb-6">
              <Star className="w-12 h-12 text-gold fill-current" />
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 font-serif">
            Heroes of{" "}
            <span className="gold-text">Hyderabad</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Celebrating the unsung heroes who make Hyderabad extraordinary. 
            Discover inspiring stories of courage, compassion, and community service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-gold text-black px-8 py-4 h-auto text-lg font-semibold hover:bg-yellow-500 transition-all">
              <Heart className="w-5 h-5 mr-2" />
              Nominate a Hero
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-gold text-gold px-8 py-4 h-auto text-lg font-semibold hover:bg-gold hover:text-black bg-transparent transition-all"
            >
              <Users className="w-5 h-5 mr-2" />
              Explore Heroes
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold gold-text mb-2">500+</div>
              <div className="text-gray-400">Heroes Recognized</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold gold-text mb-2">50+</div>
              <div className="text-gray-400">Communities Served</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold gold-text mb-2">10M+</div>
              <div className="text-gray-400">Lives Touched</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gold rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-gold rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gold rounded-full opacity-30 animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-gold rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  );
}
