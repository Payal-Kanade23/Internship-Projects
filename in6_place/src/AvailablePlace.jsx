import React, { useEffect, useState } from 'react';
import  data  from './data.js'
 function AvailablePlace({...props}){
    console.log("han")
    const handlePlace=(id)=>{
       props.handlePickPlace(id);
    }

  return (
    <div className='flex flex-col justify-center'>
                <h1 className='self-center text-white font-bold text-lg'>Available Place</h1>
      <div className='flex flex-wrap flex-row gap-5 m-10 justify-center'>
      {props.availablePlace.map((item )=>(
       <div key={item.id} className='flex flex-wrap flex-col m-10'>
        <img src={item.img} onClick={()=>handlePlace(item.id)}/>
        <div>{item.title}</div>
        </div>
      ))}
    </div>

    </div>
   
  );
}

export default AvailablePlace;
