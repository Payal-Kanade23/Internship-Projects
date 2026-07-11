import React from 'react';
import { useCart } from './CartContext';
import CheckModel from './CheckModel';
import CheckoutForm from './CheckoutForm';
import { useRef } from 'react';
function CartModel({modalEnd }) {
  const {cart , setCart , handleAddToCart} = useCart();
  const totalPrice = cart.reduce((sum,item )=>sum + item.price * item.q ,0 )
    const checkModel = useRef();

 const increQuantity = (id) =>{
    setCart((prev)=>
        prev.map((i)=>
            i.foodId === id ? {
                ... i,
                q:i.q+1
            } : i
        )
    )
 }

  const decreQuantity = (id) =>{
    setCart((prev)=>
        prev.map((i)=>(
            i.foodId === id ? {
                ...i,
                q:i.q-1
            } : i
        ))
        .filter((i)=>i.q > 0)
    )
 }

 const checkModelStart = () =>{
    modalEnd();
    checkModel.current.open();
    
 }

 const checkModelEnd = () =>{

    checkModel.current.close();
    
 }


  return (
 <div>
  <CheckModel ref={checkModel}>
    <CheckoutForm checkModelEnd={checkModelEnd} modalEnd={modalEnd}/>
    </CheckModel>  
  <h1 className="text-3xl font-bold text-gray-800 mb-6">
    🛒 Your Cart
  </h1>

  <div className="space-y-4">
    {cart.map((item) => (
      <div
        key={item.foodId}
        className="flex justify-between items-center border-b pb-4"
      >
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {item.title}
          </h2>

          <p className="text-sm text-gray-500">
            ₹{item.price} × {item.q} ={" "}
            <span className="font-semibold text-black">
              ₹{item.price * item.q}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={()=>decreQuantity(item.foodId)} 
          className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-xl font-bold">
            −
          </button>

          <span className="text-lg font-semibold w-6 text-center">
            {item.q}
          </span>

          <button
          onClick={()=>increQuantity(item.foodId)} 
          className="w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold">
            +
          </button>
        </div>
      </div>
    ))}

    <div className="border-t pt-5 mt-4 flex justify-between items-center">
      <span className="text-2xl font-bold text-gray-800">
        Total
      </span>

      <span className="text-2xl font-bold text-green-600">
        ₹{totalPrice}
      </span>
    </div>

    <div className="flex justify-end gap-3 mt-6">
      <button
      onClick={modalEnd} 
      className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
        Close
      </button>

      <button
      onClick={checkModelStart} 
      className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold">
        Checkout
      </button>
    </div>
  </div>
</div>
  );
}

export default CartModel;
