import React from 'react';
import diet from './assets/diet_logo.jpg'
import { useCart } from './CartContext';
function Header({modalStart}) {
    const { cart } = useCart();
    console.log(cart)
  return (
<div className="flex items-center justify-between w-full bg-gray-100">
  <div className="flex items-center">
    <img src={diet} className="h-25 w-25 rounded-full" />
    <h1 className="text-xl font-bold ml-4">Fancy Food</h1>
  </div>

  <button
   onClick={modalStart} 
   className="px-4 py-2 bg-orange-500 w-50 text-white rounded mr-18">
    Cart {cart.length}
  </button>
</div>
  );
}

export default Header;
