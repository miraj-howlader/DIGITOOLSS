import React from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = ({cart}) => {
  

  const navLinks = [
    "Products",
    "Features",
    "Pricing",
    "Testimonials",
    "FAQ",
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
       
        <div className="text-2xl font-bold text-[#4F39F6]">
          DigiTools
        </div>

        
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-[#4F39F6] transition">
              {link}
            </li>
          ))}
        </ul>

      
        <div className="hidden md:flex items-center gap-5">
          
          
          <div className="relative cursor-pointer">
            <ShoppingCart className="cursor-pointer text-gray-700 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
            {cart.length}
          </span>
          </div>

         
          <button className="text-gray-700 hover:text-blue-600">
            Login
          </button>

          
          <button className="bg-linear-to-r from-[#4F39F6] to-purple-700 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

       

      

         

          
        </div>
     
    </nav>
  );
};

export default Navbar;