import React from "react";
import bannerImg from "../assets/banner.png"; 
import Play from '../assets/Play.png'

const Hero = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
       
        <div>
          
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            🚀 New: AI-Powered Tools Available
          </span>

          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          
          <p className="text-gray-600 text-lg mb-8">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-linear-to-r from-[#4F39F6] to-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Explore Products
            </button>

            <button className="border border-purple-600 gap-2 flex px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            <img src={Play} alt="" className="w-6 h-6"/>
             Watch Demo 
            </button>
          </div>
        </div>

        
        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="Hero Banner"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;