import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import AvailablePlace from './AvailablePlace'
import data  from './data.js'
import SelectedPlace from './SelectedPlace.jsx'
import Model from './Model.jsx'

function App() {
  console.log("app")
  const [availablePlace , setAvailablePlace] = useState([]);
  const [selectedPlace , setSelectedPlace] = useState([]);
  const model = useRef();
  const selectedTop =useRef();
     useEffect(()=>{
    setAvailablePlace(data);
  
},[])
  const handleStartModel =(id) =>{
    model.current.open();
    selectedTop.current = id;
  }

  const handleRemovePlace = ()=>{
    setSelectedPlace((prev)=>prev.filter((p)=>p.id !== selectedTop.current))
        model.current.close();

  }

  const handleCanclePlace = ()=>{
   model.current.close();
  }

  const handlePickPlace = (id) =>{
    console.log(id)
    setSelectedPlace((prev)=>{
      const existPlace = prev.some((p)=>p.id === id)
      if(existPlace){
        return prev;
      }
      const newPlace = availablePlace.find((p)=>p.id === id);
      console.log(newPlace)
      if(!newPlace){return prev}
      return [...prev , newPlace]
    })
  }

 
 

  return (
    <>
    <div className='flex flex-col justify-center '>
      <Model ref={model}>
            <div className='flex flex-col justify-center gap-5 bg-gray-500 h-40 w-80 rounded-lg top-20 left-30 '>
            <h1 className='text-lg text-white self-center'>Are you sure to Delete this Place?</h1>
            <div className='flex flex-row justify-center gap-5 '>
                <button onClick={handleRemovePlace} className='rounded-lg bg-white text-black h-10 w-25 border border-black'>Yes</button>
            <button onClick={handleCanclePlace} className='rounded-lg bg-white text-black h-10 w-25 border border-black'>No</button>
            </div>
            
            </div>  
      </Model>


    <Header />
    <SelectedPlace selectedPlace={selectedPlace} title="Selected Places" onSelectedPlace={handleStartModel}/>
    <AvailablePlace availablePlace={availablePlace}  
    handlePickPlace={handlePickPlace}/>      

    </div>
   
    </>
  )
}

export default App
