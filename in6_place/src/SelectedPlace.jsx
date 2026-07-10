import React, { useEffect } from 'react';

export default function SelectedPlace({...props}) {
   
    console.log("sele")
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='self-center text-white font-bold text-lg'>{props.title}</h1>
      <div className='flex flex-wrap flex-row gap-5 justify-center'>
         {props.selectedPlace.map((item , index)=>(
        <div key={index} className='flex flex-col justify-center '>
            <img src={item.img} onClick={()=>props.onSelectedPlace(item.id)}/>
            <p>{item.title}</p>
        </div>
      ))}
      </div>
      
    </div>
  );
}
