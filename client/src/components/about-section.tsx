import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We believe in recognizing the selfless acts that make our community stronger."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections between heroes and those inspired by their actions."
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Celebrating both grand gestures and small acts of everyday kindness."
  },
  {
    icon: Target,
    title: "Impact",
    description: "Creating lasting change by inspiring others to become heroes themselves."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 font-serif">About Heroes of Hyderabad</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Heroes of Hyderabad is a platform dedicated to celebrating the unsung heroes who make our city 
              extraordinary. We believe that heroism exists in all forms - from the healthcare worker saving lives 
              to the teacher inspiring young minds, from the volunteer feeding the hungry to the innovator 
              solving community problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Our mission is to shine a light on these remarkable individuals, share their inspiring stories, 
              and create a community that values service, compassion, and positive impact. Every hero featured 
              on our platform represents the spirit of Hyderabad - resilient, caring, and always ready to help.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <Button className="bg-gold text-black px-8 py-4 h-auto font-semibold hover:bg-yellow-500 transition-all">
              Join Our Mission
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-black border border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                  alt="Community volunteers working together in Hyderabad" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Community Impact</p>
                  <p className="text-gray-300 text-sm">Heroes making a difference every day</p>
                </div>
              </div>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-black border border-gray-800 overflow-hidden">
                <div className="relative h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                    alt="Education and mentorship programs" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-semibold">Education Heroes</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-black border border-gray-800 overflow-hidden">
                <div className="relative h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300" 
                    alt="Healthcare workers and medical assistance" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-semibold">Healthcare Heroes</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
