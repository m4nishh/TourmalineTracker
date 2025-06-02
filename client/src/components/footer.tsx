import { Button } from "@/components/ui/button";
import { Star, Heart, Users, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center mr-3">
                <Star className="w-4 h-4 text-gold fill-current" />
              </div>
              <div className="text-2xl font-bold gold-text font-serif">Heroes of Hyderabad</div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
            Celebrating the unsung heroes who make Hyderabad a better place
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                className="bg-gold hover:bg-yellow-500 text-black"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Button>
              <Button
                size="icon"
                className="bg-gold hover:bg-yellow-500 text-black"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Button>
              <Button
                size="icon"
                className="bg-gold hover:bg-yellow-500 text-black"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.998 12.017 23.998c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 gold-text font-serif">Hero Categories</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button className="hover:text-gold transition-colors text-left flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Healthcare Heroes
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors text-left flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Education Champions
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors text-left flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Community Leaders
                </button>
              </li>
              <li>
                <button className="hover:text-gold transition-colors text-left flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Everyday Angels
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 gold-text font-serif">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('heroes')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Featured Heroes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-gold transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('nominate')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Nominate a Hero
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2024 Heroes of Hyderabad. Made with ❤️ for our amazing city.</p>
            </div>
            <div className="flex items-center space-x-6 text-gray-400">
              <button className="hover:text-gold transition-colors">Privacy Policy</button>
              <button className="hover:text-gold transition-colors">Terms of Service</button>
              <button className="hover:text-gold transition-colors flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
