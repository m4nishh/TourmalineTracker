import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative hero-gradient">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transforming Business Through{" "}
              <span className="text-blue-200">Innovation</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We deliver cutting-edge solutions that drive growth, enhance efficiency, and unlock your organization's full potential in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-primary px-8 py-4 h-auto text-lg font-semibold hover:bg-blue-50">
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white px-8 py-4 h-auto text-lg font-semibold hover:bg-white hover:text-primary bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Professional business woman" 
                className="rounded-lg shadow-lg w-full h-48 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Professional business man" 
                className="rounded-lg shadow-lg mt-8 w-full h-48 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Diverse professional woman" 
                className="rounded-lg shadow-lg w-full h-48 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Young professional man" 
                className="rounded-lg shadow-lg mt-8 w-full h-48 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
