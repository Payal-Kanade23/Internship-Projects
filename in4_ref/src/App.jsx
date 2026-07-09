import { useRef, useState } from 'react'

import './App.css'

function App() {
const [player , setPlayer] = useState(null);
const user = useRef();

const handle = ()=>{
  setPlayer(user.current.value)
}
  return (
    <>
     <div>
      <p>Welcome {player ?? "unknown"} </p>
      <div>
        <input type="text"
                ref={user}
                
      />
      <button onClick={handle}>SetUSer</button></div>
     </div>
    </>
  )
}

export default App
