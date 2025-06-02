import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Shield, 
  Users, 
  Lightbulb, 
  Award, 
  HandHeart 
} from "lucide-react";

const heroCategories = [
  {
    icon: Heart,
    title: "Healthcare Heroes",
    description: "Medical professionals, volunteers, and caregivers who dedicate their lives to healing and helping others in our community.",
    count: "150+ Heroes"
  },
  {
    icon: Shield,
    title: "Safety Guardians",
    description: "Police officers, firefighters, and security personnel who risk their lives to keep our neighborhoods safe.",
    count: "120+ Heroes"
  },
  {
    icon: Users,
    title: "Community Leaders",
    description: "Social workers, activists, and organizers who bring positive change to their communities through service.",
    count: "80+ Heroes"
  },
  {
    icon: Lightbulb,
    title: "Education Champions",
    description: "Teachers, mentors, and educators who inspire and empower the next generation of Hyderabadis.",
    count: "100+ Heroes"
  },
  {
    icon: Award,
    title: "Innovation Pioneers",
    description: "Entrepreneurs and innovators who create solutions that benefit society and drive progress.",
    count: "50+ Heroes"
  },
  {
    icon: HandHeart,
    title: "Everyday Angels",
    description: "Ordinary citizens who perform extraordinary acts of kindness and make a difference in daily life.",
    count: "200+ Heroes"
  },
];

export default function JurySection() {
  return (
    <section id="jury" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-serif">Jury Members</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the distinguished panel of judges who carefully evaluate and select our heroes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heroCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-black border border-gray-800 hover:border-gold transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-serif">{category.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-semibold text-sm">{category.count}</span>
                    <button className="text-gold font-semibold hover:text-yellow-400 transition-colors">
                      Explore →
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
