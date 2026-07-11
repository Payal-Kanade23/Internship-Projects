import React, { createContext, useState , useContext } from 'react';
    const CartContext = createContext();
import foods from './data';

export function CartProvider({children}) {
     const [cart, setCart] = useState([]);
     const  [ selectedFood , setSelectedFood ] = useState();
     const product = foods;
     const handleAddToCart = (id) =>{
        
        
        const food = product.find((item)=>{
           return item.id === id
        })
        console.log(food)
        if(!food) return;

        setSelectedFood(id);
        
         setCart((prev)=>{
            const existingFood = prev.find((item)=>item.foodId === id)
            if(existingFood){
              return prev.map((item)=>(
               item.foodId === id  ? {
                ...item ,
                q:item.q+1
               } : item 
            ))
            }
            
            
            return [
                ...prev , 
                {
              foodId:food.id,
              title:food.title,
              price:food.price,
              q:1
            }]

         })

    }

  return (
    <CartContext.Provider value={{cart , setCart , selectedFood , setSelectedFood , handleAddToCart }}>
     {children}
    </CartContext.Provider>
  );
}

export const useCart = ()=> {
    return useContext(CartContext)
};
