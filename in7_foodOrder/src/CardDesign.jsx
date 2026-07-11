import React from 'react';
import Card from './Card';
function CardDesign({ product , modalEnd}) {
  return (
    
        <div className='flex flex-row flex-wrap gap-5 bg-red-500'>
         <Card product={product} modalEnd={modalEnd}/>    
       
        </div>

  );
}
export default CardDesign;
