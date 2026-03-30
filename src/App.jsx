import React, { Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Products from './components/Products'
import toast, { Toaster } from 'react-hot-toast'



const App = () => {
   const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart,setCart]=useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/product.json"); // must be in public folder
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart =(product)=>{
    toast.success('added to cart')
   setCart([...cart,product])
  }
    

  
  return (
    <div>
      <Navbar cart={cart}/>
      <Hero/>
      <Banner/>
     {loading ? (
        <p className="text-center mt-10">Loading product data...</p>
      ) : (
        <Products products={products} handleAddToCart={handleAddToCart} cart={cart} setCart={setCart}/>
      )}

    <Toaster/>
    </div>
  )
}

export default App