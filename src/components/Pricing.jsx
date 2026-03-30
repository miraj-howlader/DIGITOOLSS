import { Check } from "lucide-react";
import React from "react";


const Pricing = () => {
  return (
     <div className="py-16 px-6 bg-gray-50 text-center">
        
      <h2 className="text-4xl font-bold mb-3">
        Simple, Transparent Pricing
      </h2>

      <p className="text-gray-600 mb-10">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

        <div className="flex items-center justify-center gap-12 flex-wrap">

        
            <div className="w-72 bg-gray-100 text-center text-gray-800/80 border border-gray-200 p-6 pb-16 rounded-lg">
                <p className="font-bold">Starter</p>
                <p className="font-semibold text-sm mt-1">Perfect for gatting started</p>
                <h1 className="text-3xl font-semibold">$0<span className="text-gray-500 text-sm font-normal">/month</span></h1>
                <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Access to 10 free tools</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Basic templates</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Community support</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>1 project per month</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Access to all basic courses</p>
                    </li>
                </ul>
                <button type="button" className=" bg-linear-to-r from-[#4F39F6] to-purple-700 text-sm w-full py-2 rounded-full text-white font-medium mt-7  transition-all">
                  Get Started Free
                </button>
            </div>
        
            <div className="w-72 bg-linear-to-r from-[#4F39F6] to-purple-700 relative text-center text-white border border-gray-500/30 p-6 pb-14 rounded-lg">
                <p className="absolute px-3 text-sm -top-3.5 right-18 py-1 bg-amber-200 rounded-full text-amber-600">Most Popular</p>
                <p className="font-semibold pt-2">Pro</p>
                <span>Best for professionals</span>
                <h1 className="text-3xl font-semibold">$29<span className="text-sm font-normal">/month</span></h1>
                <ul className="list-none text-white text-sm mt-6 space-y-1">
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Access to all premium tools</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Unlimited templates</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Priority support</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Unlimited projects</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Cloud sync</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Advanced analytics</p>
                    </li>
                </ul>
                <button type="button" className="bg-white text-sm w-full py-2 rounded-full text-indigo-500 font-medium mt-7 hover:bg-gray-200 transition-all">
                    Start Pro Trial
                </button>
            </div>
        
            <div className="w-72 bg-white text-center text-gray-800/80 border border-gray-200 p-6 rounded-lg">
                <p className="font-semibold">Enterprise</p>
                <span>For teams and businesses</span>
                <h1 className="text-3xl font-semibold">$99
                    <span className="text-gray-500 text-sm font-normal">/month</span></h1>
                <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Everything in Pro</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Team collaboration</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Custom integrations</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Dedicated support</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>SLA guarantee</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check  className='text-green-500'/>
                        <p>Custom branding</p>
                    </li>
                  
                </ul>
                <button type="button" className=" bg-linear-to-r from-[#4F39F6] to-purple-700  text-sm w-full py-2 rounded-full text-white font-medium mt-7  transition-all">
                    Contact Sales
                </button>
            </div>
            </div>
        </div>
  );
};

export default Pricing;