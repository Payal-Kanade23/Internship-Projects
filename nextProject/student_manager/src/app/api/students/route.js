import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Student from "@/models/Student";

export async function GET(){
    try{
     await connectDB();
     const students = await Student.find()
     return NextResponse.json(students,{status:200})
    }catch(error){
       return NextResponse.json({message:"Failed to fetch students"+error},{status:500})

    }
}

export async function POST(request){
    try{
     await connectDB();

     const body = await request.json();
     const existingStudent = await Student.findOne({ $or:[{email:body.email},{enroll:body.enroll}] });

if (existingStudent) {
  return Response.json(
    { message: "Email or enrollment number is already exists" },
    { status: 400 }
  );
}
     const student = await Student.create(body);
      
     return NextResponse.json(student , {status:201})

    }catch(error){
     return NextResponse.json({message:"Failed to create Student"+error},{status:500})
    }
}