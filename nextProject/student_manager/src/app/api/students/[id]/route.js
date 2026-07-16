import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Student from "@/models/Student";

export async function GET(request , {params}){
    try{
     await connectDB();
     const {id} = await params;
     const students = await Student.findById(id)
     return NextResponse.json(students,{status:200})
    }catch(error){
       return NextResponse.json({message:"Failed to fetch students"+error},{status:500})

    }
}

export async function PUT(request , {params}){
    try{
     await connectDB();
     
     const {id}= await params;
     const body = await request.json();
     const updatedStudent = await Student.findByIdAndUpdate(id ,body , {new:true , runValidators:true});
     if(!updatedStudent){
        return NextResponse.json({message:"Student not found"},{status:404})
     }

     return NextResponse.json(updatedStudent , {status:200})

    }catch(error){
     return NextResponse.json({message:"Failed to update Student"+error},{status:500})
    }
}


export async function DELETE(request , {params}){
    try{
     await connectDB();
     const {id} = await params;
     const deleteStudents = await Student.findByIdAndDelete(id)
      if(!deleteStudents){
        return NextResponse.json({message:"Student not found"},{status:404})
     }

     return NextResponse.json({message:"Student deleted successfully"},{status:200})
    }catch(error){
       return NextResponse.json({message:"Failed to delete students"+error},{status:500})

    }
}

