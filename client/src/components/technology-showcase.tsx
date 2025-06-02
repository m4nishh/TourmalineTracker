export default function TechnologyShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cutting-Edge Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies and methodologies to deliver superior results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            alt="Abstract network connections" 
            className="rounded-xl shadow-lg w-full h-64 object-cover" 
          />
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            alt="Digital circuit patterns" 
            className="rounded-xl shadow-lg w-full h-64 object-cover" 
          />
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            alt="Futuristic data visualization" 
            className="rounded-xl shadow-lg w-full h-64 object-cover" 
          />
        </div>
      </div>
    </section>
  );
}
