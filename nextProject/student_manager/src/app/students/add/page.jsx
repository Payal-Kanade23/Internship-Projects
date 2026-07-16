"use client";

import { useState } from "react";
import axios from "axios";
export default function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    enroll: "",
    course: "",
    sem:"",
    gender:""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.age) {
      newErrors.age = "Age is required";
    } else if (form.age < 1 || form.age > 100) {
      newErrors.age = "Age must be between 1 and 100";
    }

    if (!form.enroll.trim()) {
      newErrors.enroll = "Enrollment number is required";
    }

    if (!form.course.trim()) {
      newErrors.course = "Course is required";
    }
    if (!form.gender) {
  newErrors.gender = "Gender is required";
}

if (!form.sem) {
  newErrors.sem = "Semester is required";
}

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post("http://localhost:3000/api/students",form);
      alert("Student Added Successfully");
      console.log(response.data)
      setForm({
        name: "",
        email: "",
        age: "",
        enroll: "",
        course: "",
        sem:"",
        gender:""
      });
    } catch (error) {
        alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg space-y-4"
      >
        <h1 className="text-3xl font-bold text-center mb-4">
          Add Student
        </h1>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <p className="text-red-500 text-sm">{errors.name}</p>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <p className="text-red-500 text-sm">{errors.email}</p>
        </div>

        <div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <p className="text-red-500 text-sm">{errors.age}</p>
        </div>

        <div>
          <input
            type="text"
            name="enroll"
            placeholder="Enrollment Number"
            value={form.enroll}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <p className="text-red-500 text-sm">{errors.enroll}</p>
        </div>

        <div>
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={form.course}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <p className="text-red-500 text-sm">{errors.course}</p>
        </div>
        <select
  name="gender"
  value={form.gender}
  onChange={handleChange}
  className="w-full border rounded-lg p-3"
>
  <option value="">Select Gender</option>
  <option value="Female">Female</option>
  <option value="Male">Male</option>
</select>

<p className="text-red-500 text-sm">{errors.gender}</p>

      <select
  name="sem"
  value={form.sem}
  onChange={handleChange}
  className="w-full border rounded-lg p-3"
>
  <option value="">Select Semester</option>
  <option value="1">Semester 1</option>
  <option value="2">Semester 2</option>
  <option value="3">Semester 3</option>
  <option value="4">Semester 4</option>
  <option value="5">Semester 5</option>
  <option value="6">Semester 6</option>
</select>

<p className="text-red-500 text-sm">{errors.sem}</p>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}