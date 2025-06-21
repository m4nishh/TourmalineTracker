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
    <footer className="relative z-[50] bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1" style={{ opacity: 1 }}>
            <h3 className="mb-4 font-lora text-2xl font-bold text-white">
              Heroes of Hyderabad
            </h3>
            <p className="font-poppins text-sm text-gray-300">
              Celebrating the extraordinary individuals who make our city extraordinary.
            </p>
          </div>

          <div style={{ opacity: 1 }}>
            <h4 className="mb-4 font-poppins text-lg font-semibold text-white">
              Useful Links
            </h4>
            <ul className="space-y-2 font-poppins text-sm text-gray-300">
              <li>
                <span className="cursor-pointer transition-colors hover:text-gold">
                  Terms & Conditions
                </span>
              </li>
              {/* <li>
                <span className="cursor-pointer transition-colors hover:text-gold">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="cursor-pointer transition-colors hover:text-gold">
                  Refund Policy
                </span>
              </li> */}
              <li>
                <span className="cursor-pointer transition-colors hover:text-gold">
                  Pricing & Deliverables
                </span>
              </li>
            </ul>
          </div>

          <div style={{ opacity: 1 }}>
            <h4 className="mb-4 font-poppins text-lg font-semibold text-white">
              Contact
            </h4>
            <ul className="space-y-2 font-poppins text-sm text-gray-300">
              <li>Email: rajat@totawards.com</li>
              <li>Phone: +91 6300112759</li>
              <li>Address: Hyderabad, Telangana</li>
            </ul>
          </div>

          <div style={{ opacity: 1 }}>
            <h4 className="mb-4 font-poppins text-lg font-semibold text-white">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-[#1877F2] hover:drop-shadow-[0_0_6px_rgba(24,119,242,0.6)] transition-all"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-[#0077B5] hover:drop-shadow-[0_0_6px_rgba(0,119,181,0.6)] transition-all"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-pink-500 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)] transition-all"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center" style={{ opacity: 1 }}>
          <p className="font-poppins text-sm text-gray-400">
            © 2025 Heroes of Hyderabad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
