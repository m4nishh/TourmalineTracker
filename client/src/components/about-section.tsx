import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About TechCorp Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With over a decade of experience in digital transformation, we've helped thousands of businesses 
              modernize their operations and achieve unprecedented growth. Our team of expert consultants, 
              engineers, and strategists work collaboratively to deliver solutions that not only meet your 
              immediate needs but position you for long-term success.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe in the power of technology to transform businesses and improve lives. Our mission 
              is to make cutting-edge solutions accessible to organizations of all sizes, from startups to 
              Fortune 500 companies.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
            
            <Button className="bg-primary text-white px-8 py-4 h-auto font-semibold hover:bg-primary/90">
              Our Story
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Modern professional workspace with team collaboration" 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
            />
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="High-tech office environment" 
                className="rounded-xl shadow-lg h-32 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Contemporary workspace with digital screens" 
                className="rounded-xl shadow-lg h-32 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
