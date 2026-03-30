import React from "react";

const ProductCart = ({ cart, setCart }) => {
  // Remove item
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Checkout (clear cart)
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    setCart([]); // clear all products
  };

  return (
    <div className="p-4 w-full bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 mb-4 bg-white p-2 rounded"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <h4 className="text-sm">{item.name}</h4>
              <p className="text-sm">${item.price}</p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500"
            >
              ✖
            </button>
          </div>
        ))
      )}

      {/* Bottom Section */}
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