import React from "react";
import toast from "react-hot-toast";

const ProductCart = ({ cart, setCart }) => {
  
  const handleRemove = (id) => {
    toast.success(' remove form cart')
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

 
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  
  const handleCheckout = () => {
    toast.success('all cart remove form cart')
    setCart([]); 
  };

  return (
    <div className="p-4 w-full bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 mb-4 bg-white p-2 rounded"
          >
           
            <img
              src={item.image}
              alt={item.name}
              className="w-5 h-5 object-cover"
            />

           <h4 className="text-sm font-bold">{item.name}</h4>
              <p className="text-sm">${item.price}</p>
           

            
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500"
            >
              ✖
            </button>
          </div>
        ))
      )}

     
      {cart.length > 0 && (
        <div className="border-t pt-4 mt-4">
          <h3 className="font-semibold mb-2">
            Total: ${totalPrice}
          </h3>

          <button
            onClick={handleCheckout}
            className="w-full bg-black text-white py-2 rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};


export default ProductCart