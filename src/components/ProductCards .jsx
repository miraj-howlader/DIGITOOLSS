import { Briefcase, CheckCircle, FileText, Globe, Mail, Mic, ToolCase } from "lucide-react";
import React from "react";
import { RiLinkedinLine } from "react-icons/ri";


// Map JSON icon string to actual icon component
const iconMap = {
  FileText: <FileText size={24} />,
  Globe: <Globe size={24} />,
  Briefcase: <Briefcase size={24} />,
  Linkedin: <RiLinkedinLine size={24} />,
  Mic: <Mic size={24} />,
  Mail: <Mail size={24} />,
  CheckCircle: <CheckCircle size={24} />,
  Tool: <ToolCase size={24} />,
};

const ProductCards  = ({product,handleAddToCart}) => {

  
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
      
      {/* Product Image */}
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-10 h-10 object-cover p-2"
        />
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Tag Badge */}
        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full capitalize">
          {product.tagType}
        </span>

        {/* Icon */}
        <div className="text-blue-600 mt-3">{iconMap[product.icon]}</div>

        {/* Name */}
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>

        {/* Price */}
        <p className="mt-3 font-semibold">
          ${product.price}{" "}
          <span className="text-sm text-gray-500">/ {product.period}</span>
        </p>

        {/* Features List */}
        <ul className="mt-3 text-sm text-gray-600 space-y-1 flex-1">
          {product.features.map((feature, i) => (
            <li key={i}>✔ {feature}</li>
          ))}
        </ul>

        {/* Buy Now Button */}
        <button onClick={()=>handleAddToCart(product)} className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductCards 