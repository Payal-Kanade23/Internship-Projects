import { useState } from 'react'
import Player from './Player'
import GameBoard from './GameBoard'


function App() {
  const [activePlayer , setActivePlayer] = useState("X");

  function handleSelectSquare(){
    setActivePlayer((curr)=>curr === "X" ? "O" :"X");
  }

  return (
    <>
    <main>
     <div className='my-game'>
      <ol className='player'>
      <Player Initialname="Player-1" symbol="X" isActive={activePlayer === "X" } />
      <Player Initialname="Player-2" symbol="O" isActive={activePlayer === "O"}/>
      </ol>

      <GameBoard onSelectSquare={handleSelectSquare} activeSquare={activePlayer}/>
  
     </div>
     </main>
    </>
  )
}

export default App
