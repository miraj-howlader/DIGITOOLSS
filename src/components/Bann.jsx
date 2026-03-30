import React from 'react'

const Bann = () => {
  return (
    <div className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
         Ready to Transform Your Workflow?
        </h1>

        
        <p className="text-lg md:text-xl mb-8">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>

       
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
            Explore Products
          </button>
          <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
            View Pricing
          </button>
        </div>

        
        <p className="text-sm md:text-base text-white/80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default Bann