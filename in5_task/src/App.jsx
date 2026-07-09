import { useState } from 'react'

import './App.css'
import EmptyProject from './EmptyProject'
import AddProject from './AddProject';
import ProjectPage from './ProjectPage';

function App() {
  const [ isProject , setIsProject ] = useState(false);
  const [ project , setProject] = useState({
    title: "",
    description:"",
    date:""
  })
  const [projects , setProjects] = useState([])
  const [activeProject , setActiveProject] = useState(null);
  const handleChange = (e) =>{
        setProject({...project , [e.target.name]:e.target.value})
    }

   
  function handleAddedData(data) {
    console.log(projects);
   
    setProjects((prev)=>[...prev , data])
    setProject({
       title: "",
    description: "",
    date: "",
    })
  }
  function handleEachProject(title) {
      
      const exists = projects.find((project) => project.title === title)
      setActiveProject(exists)
      console.log(exists)
      setIsProject(true)

  }
  

  return (
    <>
    <div className='flex flex-row  h-screen '>
      {/* Side Bar */}
      <div className='bg-black text-white w-[30%] rounded-tr-lg mt-10 flex flex-col justify-start px-5 py-5 gap-5 h-screen '>
        <h1 >Your Project</h1>
        <button className='bg-gray-400 text-gray-900 rounded-lg h-10 w-30 ' onClick={()=>setIsProject(true)}> + Add Project</button>
        
        <ol className='flex flex-col m-2 justify-start'>{projects.map((item)=> (
            <li className='text-white' key={item.title} onClick={()=>handleEachProject(item.title)}>{item.title}</li>
        
        ))}</ol>
      </div>

      {/* Main */}
      <div className='flex flex-col justify-center items-center h-screen gap-10 w-screen'>
        { activeProject &&  <ProjectPage activeProject={activeProject} setProjects={setProjects} projects={projects} setActiveProject={setActiveProject}/> } 
        {!isProject ? (<EmptyProject  setIsProject={setIsProject}/> ): !activeProject ? (<AddProject onSave={handleAddedData} project={project} handleChange={handleChange} setIsProject={setIsProject}/>) : undefined}
       
      </div>

    </div>
    </>
  )
}

export default App
