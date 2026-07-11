import React, { useEffect, useRef, useState } from 'react';
import foods from './data.js';
import { useCart } from './CartContext.jsx';
function Card({product , modalEnd}) {
    const {cart , setCart , setSelectedFood} = useCart();
    const { handleAddToCart } = useCart();
    
    


  return (
 <div className="flex flex-wrap justify-center gap-8 p-8 bg-gray-100">
  {product.map((item) => (
    <div
      key={item.id}
      className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <img
        src={item.img}
        alt={item.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">
            {item.title}
          </h1>

          <span className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
            ₹{item.price}
          </span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3">
          {item.desc}
        </p>

        <button onClick={()=>handleAddToCart(item.id)}
         className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>
  );
}

export default Card;
