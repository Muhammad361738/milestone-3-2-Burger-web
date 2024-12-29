
"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]); // Default to an empty array
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
//   const router = useRouter();

  // Fetch products and cart data
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
  
    fetchProducts();
  
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Error parsing cart data:", error);
      setCart([]); // Initialize to an empty array if parsing fails
    }
  }, []);
  
  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Proceed to checkout
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/chicken-burger-wooden-board-tomato-lettuce-side-view_141793-2754.jpg')",
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Delicious Burger In Our Menu
          </h1>
          <p className="text-xl text-white">
            Explore our selection of mouth-watering burgers to order now!
          </p>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-800">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-300 transition duration-300"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>
          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">
                Your Cart Items
              </h2>
              {cart.length > 0 ? (
                <>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between mb-6"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-cover"
                        />
                        <span className="ml-4 text-lg font-medium text-slate-600">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-bold text-xl">
                      Total: $
                      {cart.reduce((total, product) => total + product.price, 0)}
                    </span>
                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300"
                      >
                        Proceed To Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="bg-red-600 ml-4 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-lg text-slate-800">Your Cart Is Empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                Checkout
              </h2>
              <p className="text-lg text-red-600">
                Please confirm your order before proceeding.
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-800 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-600 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => alert("Order Confirmed!")}
                  className="bg-green-800 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;