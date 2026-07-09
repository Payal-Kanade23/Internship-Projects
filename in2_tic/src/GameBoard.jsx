import React from 'react';
import { useState } from 'react';
function GameBoard({onSelectSquare , activeSquare}) {
    const gameBoard = [
        [null , null , null],
        [null ,null , null],
        [null , null ,null]
    ]
    const [winner , setWinner] = useState(null);
    const [board , setBoard] = useState(gameBoard);

    function handleClick (row , col) {
         if(winner) return;

         setBoard((prev)=>{
            const updatedBoard = [...prev.map((item)=>[...item])]
            updatedBoard[row][col] = activeSquare;
            const result = winnerCheck(updatedBoard);
            console.log(result)
             if(result){
            setWinner(result);
          }

            return updatedBoard

         })
         
            onSelectSquare();
          
        
         


    }

    
function GameOver({winner}) {
  return (
    <div className='gameover'>
      <h1 >Game is Over</h1>
      {winner && <p >{winner} won</p>}
      {!winner && <p >it&apos; s Draw</p>}
      <button onClick={handleReset} >Reset</button>
    </div>
  );
}



 const winnerCheck = (board) => {
    const winCond = [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],

        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],

        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]],
    ];

    for (const [[r1,c1],[r2,c2],[r3,c3]] of winCond) {
        if (
            board[r1][c1] &&
            board[r1][c1] === board[r2][c2] &&
            board[r2][c2] === board[r3][c3]
        ) {
            return board[r1][c1];
        }
    }

    return null;
};

const draw = !winner && board.every((row)=>row.every((cell)=>cell !== null))
const handleReset = () =>
{
    setBoard([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);

    onSelectSquare()
    setWinner(null);
}

  return (
    <div className='game'>
        <ol className='outer'>
            {board.map((row , row_index)=>(
               <li key={row_index} >
                <ol className='inner'>
                   {row.map((col, col_index)=>(
                    <li key={col_index}>
                        <button onClick={()=>handleClick(row_index , col_index)} className='inner-item' disabled={col!==null}>{col}</button>
                        </li>
                   ))}
                </ol>
               </li>
            ))}
        </ol>
      {(winner || draw)?
      (   <GameOver winner={winner}/>      ):undefined}
    </div>
  );
}

export default GameBoard;
