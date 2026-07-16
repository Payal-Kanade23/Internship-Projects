import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    enroll:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    sem:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    course:{
    type:String,
    required:true
}

})

const Student =
  mongoose.models.Student ||
  mongoose.model("Student", studentSchema);
  export default Student;