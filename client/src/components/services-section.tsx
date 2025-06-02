import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  Cloud, 
  TrendingUp, 
  Shield, 
  Bot, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Digital Transformation",
    description: "Modernize your business processes with cutting-edge digital solutions that streamline operations and enhance customer experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure that grows with your business while reducing operational costs and complexity.",
  },
  {
    icon: TrendingUp,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive strategic decision-making and competitive advantage.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions that protect your digital assets and ensure business continuity in an evolving threat landscape.",
  },
  {
    icon: Bot,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes, predict trends, and unlock new opportunities.",
  },
  {
    icon: Users,
    title: "Strategic Consulting",
    description: "Expert guidance and strategic planning to help you navigate complex business challenges and achieve your goals.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your business transformation and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white shadow-lg card-hover border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
