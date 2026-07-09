import { useState } from 'react'

import './App.css'
import Header from './Header'
import Form from './Form'
import Result from './Result'

function App() {
 const [input , setInput] = useState({
        investment: 10000,
        annualInvestment :500,
        duration:10,
        Ereturn:6
    })
   const handleChange = (e) =>{
        setInput({...input , [e.target.name]: +e.target.value})
    }
  return (
    <>
    <div className='page'>
      <Header/>
     <Form userInput={input} handleChange={handleChange}/>
     <Result userInput={input}/>
    </div>
     
    </>
  )
}

export default App
