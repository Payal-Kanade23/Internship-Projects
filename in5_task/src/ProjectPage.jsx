import React, { useState } from 'react';

function ProjectPage({activeProject, setActiveProject ,projects, setProjects}) {
    const [task , setTask] = useState("");
    const [tasks , setTasks] = useState([]);

    const handleChange = (e) =>{
        setTask(e.target.value);
    }
    const AddTask = () =>{
        console.log(task)
        
        setTasks((prev)=>[...prev , task])
        console.log(tasks)
        setTask("");
    }
    const deleteTask = (id) =>{
        console.log(id)
        const updatedTask = tasks.filter((_,index)=>index !== id);
        setTasks(updatedTask);
    }
    const deleteProject = () =>{
        const updatedProjects = projects.filter((p)=>p.title !== activeProject.title)
        setProjects(updatedProjects);
        setActiveProject(null)
    }

    
  return (
  <div className="p-8">
  {activeProject && (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {activeProject.title}
        </h1>

        <button
          onClick={deleteProject}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black transition"
        >
          Delete
        </button>
      </div>

      {/* Project Details */}
      <p className="text-sm text-gray-500 mb-2">
        {activeProject.date}
      </p>

      <p className="text-gray-700 mb-8 whitespace-pre-wrap">
        {activeProject.description}
      </p>

      {/* Tasks */}
      <h2 className="text-2xl font-semibold mb-4">
        Tasks
      </h2>

      {/* Add Task */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          name="task"
          value={task}
          onChange={handleChange}
          placeholder="Enter task..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={AddTask}
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-black transition"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ol className="space-y-3">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg"
          >
            <span>{t}</span>

            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Delete
            </button>
          </li>
        ))}
      </ol>

    </div>
  )}
</div>
  );
}

export default ProjectPage;
