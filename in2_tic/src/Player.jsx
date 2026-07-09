import React from 'react';
import { useState } from 'react';
function Player({Initialname , symbol , isActive}) {
    const [isEdit , setIsEdit ] = useState(false);
    const [name , setName ] = useState(Initialname);
    const handleEdit = () =>{
        setIsEdit((prev)=>!prev)
       
    }
    let playerName =  <span className='player-name'>{name}</span>
    if(isEdit){

    playerName = <input type="text" required value={name}  onChange={(e)=>setName(e.target.value)}></input>
    }
  return (
    <>
    
        <li className={isActive ? 'active' : undefined}>
        <p className='player-name'>{playerName}</p>
        <h1 className='player-symbol'>{symbol}</h1>
        <button className='player-btn' onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</button>
               </li>

    </>
  );
}

export default Player;
