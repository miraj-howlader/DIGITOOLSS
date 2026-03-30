import React from "react";
import User from '../assets/user.png'
import Package from '../assets/package.png'
import Rocket from '../assets/rocket.png'

const steps = [
  {
    id: 1,
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    img: User,
  },
  {
    id: 2,
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    img: Package,
  },
  {
    id: 3,
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately..",
    img: Rocket,
  },
];

const Steps = () => {
  return (
    <div className="py-6 px-16 bg-gray-50 text-center">
     
      <h2 className="text-3xl font-bold mb-3">
        Get Started in 3 Steps
      </h2>

      <p className="text-gray-600 mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>

    
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
          
            <span className="absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-purple-700 text-white text-xs px-3 py-1 rounded-full">
               0 {index + 1}
            </span>

           
            <div className="flex justify-center mb-4 text-white ">
              <img
                src={step.img}
                alt={step.title}
                className="w-16 h-16 bg-purple-200 p-2 rounded-full text-white"
              />
            </div>

           
            <h3 className="text-lg font-semibold mb-2">
              {step.title}
            </h3>

            
            <p className="text-gray-500 text-sm">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;