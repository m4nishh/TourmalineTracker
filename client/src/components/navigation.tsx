import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold gold-text font-serif tracking-wider">Heroes of Hyderabad</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('heroes')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Heroes
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('nominate')}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Nominate
              </button>
              <Button className="bg-gold text-black hover:bg-yellow-500 font-semibold">
                Nominate a Hero
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-white hover:text-yellow-400 px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('heroes')}
                className="block text-gray-300 hover:text-yellow-400 px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                Heroes
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-yellow-400 px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('nominate')}
                className="block text-gray-300 hover:text-yellow-400 px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                Nominate
              </button>
              <Button className="bg-gold text-black hover:bg-yellow-500 font-semibold mt-2 w-full">
                Nominate a Hero
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
