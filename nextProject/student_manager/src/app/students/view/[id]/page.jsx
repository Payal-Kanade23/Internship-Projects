"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect , useState } from 'react';

function page() {
    const [student , setStudent] = useState([]);
    console.log("me")
    const {id} = useParams();
    useEffect(()=>{
      const fetchStudent =async()=>{
        try{
        const res = await axios.get(`/api/students/${id}`)
        setStudent(res.data);
        console.log(res.data)
        }catch(error){
            console.log(error);
        }
        
      }
      fetchStudent();
    },[])
  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.email}</p>
      <p>{student.age}</p>
      <p>{student.course}</p>
      <p>{student.gender}</p>
    </div>
  );
}

export default page;
