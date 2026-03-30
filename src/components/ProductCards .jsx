import { Briefcase, CheckCircle, FileText, Globe, Mail, Mic, ToolCase } from "lucide-react";
import React from "react";
import { RiLinkedinLine } from "react-icons/ri";


// Map JSON icon string to actual icon component
// const iconMap = {
//   FileText: <FileText size={24} />,
//   Globe: <Globe size={24} />,
//   Briefcase: <Briefcase size={24} />,
//   Linkedin: <RiLinkedinLine size={24} />,
//   Mic: <Mic size={24} />,
//   Mail: <Mail size={24} />,
//   CheckCircle: <CheckCircle size={24} />,
//   Tool: <ToolCase size={24} />,
// };

const ProductCards  = ({product,handleAddToCart}) => {

  
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
    
      <div className="flex justify-between p-6">
          <img
          src={product.image}
          alt={product.name}
          className="w-10 h-10 object-cover p-2"
        />   
         <span className=" bg-blue-100 text-blue-600 text-xs px-4 py-2 rounded-md capitalize">
          {product.tagType}
        </span>
      </div>

      <div className="p-6 flex flex-col justify-start">
       
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>

        
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>

       
        <p className="mt-3 font-semibold">
          ${product.price}{" "}
          <span className="text-sm text-gray-500">/ {product.period}</span>
        </p>

        {/* Features List */}
        <ul className="mt-3 text-sm text-gray-600 space-y-1">
          {product.features.map((feature, i) => (
            <li key={i}>✔ {feature}</li>
          ))}
        </ul>

        {/* Buy Now Button */}
        <button onClick={()=>handleAddToCart(product)} className="mt-5 w-full bg-linear-to-r from-[#4F39F6] to-purple-700 text-white py-2 rounded-lg  transition">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductCards 