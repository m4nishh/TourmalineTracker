import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

type NavigationProps = {
  onNominateClick: () => void;
};

export default function Navigation({ onNominateClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showInlineNominate, setShowInlineNominate] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setShowInlineNominate(true); // Scrolling down
      } else {
        setShowInlineNominate(false); // Scrolling up
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Jury", section: "jury" },
    { label: "Dignitaries", section: "guests" },
    { label: "Awards", section: "award-categories" },
    { label: "Sponsors", section: "sponsors" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-[200] bg-transparent" role="navigation">
      {/* Desktop Navigation */}
      <div className="mx-auto hidden max-w-[1920px] grid-cols-5 items-center px-6 text-white md:grid h-24">
        <div className="flex justify-center">
          <div className="mr-10 flex items-center">
          <img
            alt="Heroes of Hyderabad logo"
            loading="lazy"
            width={100}
            height={50}
            decoding="async"
            className="object-contain"
            src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/tot-awards-logo.png"
            style={{ color: "transparent" }}
          />
          </div>
          <button
            className="group relative cursor-pointer text-sm font-medium uppercase tracking-wide"
            onClick={() => scrollToSection('jury')}
            aria-label="Scroll to Jury"
          >
            Jury
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            <span className="absolute -top-3 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        <div className="flex justify-center">
          <button
            className="group relative cursor-pointer text-sm font-medium uppercase tracking-wide"
            onClick={() => scrollToSection('guests')}
            aria-label="Scroll to Dignitaries"
          >
            Dignitaries
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            <span className="absolute -top-3 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        <div className="flex cursor-pointer justify-center">
          <img
            alt="Heroes of Hyderabad logo"
            loading="lazy"
            width={180}
            height={50}
            decoding="async"
            className="object-contain"
            src="https://tourmaline-bavarois-f43898.netlify.app/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=384&q=75"
            style={{ color: "transparent" }}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="group relative cursor-pointer text-sm font-medium uppercase tracking-wide"
            onClick={() => scrollToSection('award-categories')}
            aria-label="Scroll to Awards"
          >
            Awards
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            <span className="absolute -top-3 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button
            className="group relative cursor-pointer text-sm font-medium uppercase tracking-wide"
            onClick={() => scrollToSection('sponsors')}
            aria-label="Scroll to Sponsors"
          >
            Sponsors
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            <span className="absolute -top-3 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>

          {showInlineNominate && (
            <button
              onClick={onNominateClick}
              className="ml-2 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 px-4 py-2 font-bold text-black text-sm shadow-2xl hover:scale-105 transition-transform glow-effect"
            >
              Nominate Now
            </button>
          )}
        </div>
      </div>

      {/* Fixed Nominate Button (Scroll Up - Desktop) */}
      {!showInlineNominate && (
        <div className="fixed top-0 right-6 z-50 hidden lg:flex flex-col items-center">
          <div className="flex flex-col items-center origin-top">
            <div className="h-[45vh] w-[2px] bg-white/60 animate-pulse"></div>
            <button
              onClick={onNominateClick}
              className="rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 font-bold text-black text-sm shadow-2xl hover:scale-105 transition-transform glow-effect origin-top cursor-pointer"
            >
              Nominate Now
            </button>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="flex h-20 items-center justify-between px-6 md:hidden">
        <div className="flex cursor-pointer justify-center" onClick={() => scrollToSection('home')}>
          <div className="text-lg font-bold text-white font-serif">Heroes of Hyderabad</div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onNominateClick}
            className="rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 px-3 py-1 font-bold text-black text-xs shadow-2xl hover:scale-105 transition-transform glow-effect"
          >
            Nominate
          </button>

          <button
            className="text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
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

            <button
              onClick={() => {
                onNominateClick();
                setIsOpen(false);
              }}
              className="mt-4 w-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 px-4 py-2 font-bold text-black text-sm shadow-2xl hover:scale-105 transition-transform glow-effect"
            >
              Nominate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
