"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function page() {
    const [students , setStudents] = useState([]);
    console.log("hello")
    const handleDelete = async(id) =>{
        try{
        const user = await axios.delete(`http://localhost:3000/api/students/${id}`)
        console.log(user.data.message);

        }
        catch(error){
            console.log(error);
        }

    }
    useEffect(()=>{
        async function fetchStudents(){
            try{
              const res = await axios.get("http://localhost:3000/api/students")
            setStudents(res.data);
            }catch(error){
                console.log(error);
            }
            
        }
        fetchStudents();
    },[])
  return (
    <div>
        <h1>All Students</h1>
        
            {
                students.map((student,index)=>(
                    <div key={index}>
                        <h1>{student.name}</h1>
                        <button><Link href={`/students/view/${student._id}`}>View Student</Link></button>
                        <button><Link href={`/students/edit/${student._id}`}>Edit</Link></button>
                        <button onClick={()=>handleDelete(student._id)}>Delete</button>
                        </div>
                ))
            }

      
    </div>
  );
}

export default page;
