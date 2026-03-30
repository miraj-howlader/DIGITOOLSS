import React, { useState } from "react";
import ProductCards from "./ProductCards ";
import ProductCart from "./ProductCart";



const Products = ({ products,handleAddToCart,cart,setCart }) => {
  const [toggleProduct, setToggleProduct] = useState("Products");
  

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Premium Digital Tools
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setToggleProduct("Products")}
            className={`px-6 py-2 rounded-lg border border-blue-500 transition ${
              toggleProduct === "Products"
                ? "bg-linear-to-r from-[#4F39F6] to-purple-700 text-white"
                : "text-black"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setToggleProduct("Cart")}
            className={`px-6 py-2 rounded-lg border border-blue-500 transition ${
              toggleProduct === "Cart"
                ? "bg-linear-to-r from-[#4F39F6] to-purple-700 text-white"
                : "text-black"
            }`}
          >
            Cart
          </button>
        </div>

        {/* Products Grid */}
        {toggleProduct === "Products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
            {products?.map((product) => (
              <ProductCards key={product.id} product={product} handleAddToCart={handleAddToCart}/>
            ))}
          </div>
        )}

        {/* Cart placeholder */}
        {toggleProduct === "Cart" && (
          <div className="mt-8 w-full text-gray-500">
            {cart.length>0?
            <ProductCart cart={cart} setCart={setCart}/>
            :<h1 className="text-4xl font-bold">No Cart Added yet 🛒</h1>}
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;