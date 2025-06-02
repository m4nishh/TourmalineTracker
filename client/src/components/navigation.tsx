import { Menu } from "lucide-react";
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

  const navItems = [
    { label: "Jury", section: "jury" },
    { label: "Dignitaries", section: "dignitaries" },
    { label: "Awards", section: "awards" },
    { label: "Sponsors", section: "sponsors" }
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-[200] bg-transparent" role="navigation">
      {/* Desktop Navigation */}
      <div className="mx-auto hidden max-w-[1920px] grid-cols-5 items-center px-6 text-white md:grid h-24">
        {/* First two nav items */}
        <div className="flex justify-center">
          <button 
            className="group relative cursor-pointer text-sm font-medium uppercase tracking-wide"
            aria-label="Scroll to Jury"
            onClick={() => scrollToSection('jury')}
          >
            Jury
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 origin-center bg-white transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
            <span className="absolute -top-3 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
        
        <div className="flex justify-center">
          <button 
            className="group relative cursor-pointer text-sm font-medium uppercase tracking-wide"
            aria-label="Scroll to Dignitaries"
            onClick={() => scrollToSection('dignitaries')}
          >
            Dignitaries
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 origin-center bg-white transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
            <span className="absolute -top-3 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
        
        {/* Center Logo */}
        <div className="flex cursor-pointer justify-center" onClick={() => scrollToSection('home')}>
          <div className="text-2xl font-bold text-white font-serif tracking-wider">
            Heroes of Hyderabad
          </div>
        </div>
        
        {/* Last two nav items */}
        <div className="flex justify-center">
          <button 
            className="group relative cursor-pointer text-sm font-medium uppercase tracking-wide"
            aria-label="Scroll to Awards"
            onClick={() => scrollToSection('awards')}
          >
            Awards
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 origin-center bg-white transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
            <span className="absolute -top-3 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
        
        <div className="flex justify-center">
          <button 
            className="group relative cursor-pointer text-sm font-medium uppercase tracking-wide"
            aria-label="Scroll to Sponsors"
            onClick={() => scrollToSection('sponsors')}
          >
            Sponsors
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 origin-center bg-white transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
            <span className="absolute -top-3 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex h-20 items-center justify-between px-6 md:hidden">
        <div className="flex cursor-pointer justify-center" onClick={() => scrollToSection('home')}>
          <div className="text-lg font-bold text-white font-serif">
            Heroes of Hyderabad
          </div>
        </div>
        
        <button 
          className="text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left text-white text-lg font-medium uppercase tracking-wide py-2 hover:text-gray-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
