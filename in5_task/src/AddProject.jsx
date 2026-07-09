import React from 'react';
import { useState } from 'react';
import EmptyProject from './EmptyProject';
const AddProject = ({onSave , project ,  handleChange , setIsProject}) => {
   
    
  const handleSubmit = (e) =>{
    e.preventDefault();
    onSave(project);
    setIsProject(false)
  }
  const handleCancel = () =>{
    setIsProject(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='border border-gray-200 shadow-lg m-5 w-150 p-10 '>
        <div>
        <label className='text-sm'>Enter Title</label>
        <input type="text" className='border border-gray-200 h-10 w-full ' name="title" value={project.title} onChange={handleChange} required/>
        </div>

        <div>
        <label className='text-sm'>Enter Description</label>
        <textarea row="3" cols="12" name="description" className='border border-gray-200 h-10 w-full ' value={project.description} onChange={handleChange} required/>
        </div>

        <div>
        <label className='text-sm'>Select Date </label>
        <input type="Date" name="date" value={project.date} className='border border-gray-200 h-10 w-full text-sm' onChange={handleChange} req/>
        </div>
        
        <div className='flex flex-row gap-7 mt-5'>
            <button type="submit" className='bg-black text-white h-10 w-20 rounded-lg'>Save</button>
            <button type="submit" onClick={handleCancel} className='border border-black text-black h-10 w-20 rounded-lg'>Cancel</button>
        </div>

      </form>
    </div>
  );
}

export default AddProject;
