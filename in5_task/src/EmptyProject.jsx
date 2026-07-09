import React from 'react';

function EmptyProject({ setIsProject}) {
   
  return (
    <div className='flex flex-col justify-center gap-5  w-200'>
        <h1 className='text-xl font-bold m-auto'>No Project Selected </h1>
        <p className='text-center '>Select a project or get started with a new one</p>
         <button className='bg-black text-white h-10 w-50 rounded self-center' onClick={()=>setIsProject(true)}>Create new project</button>
    </div>
  );
}

export default EmptyProject;
