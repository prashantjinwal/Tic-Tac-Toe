import { useState } from "react";


function GameBoard({ onSelectSquare , activePlayerSymbol }) {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    
    const [gameBoard, setgameBoard] = useState(initialGameBoard);

    function handlebtn(rowindex,colIndex){
        setgameBoard((prevGameBoard) =>{
        const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updateBoard[rowindex][colIndex] = activePlayerSymbol;
            return updateBoard;
        })
        onSelectSquare();
    }

  return (
    <>
    <ol id="game-board">
        {gameBoard.map((row,rowindex)=>
            <li key={rowindex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => <li key={colIndex} ><button onClick={() => handlebtn(rowindex,colIndex)} >{playerSymbol}</button></li>) }
                </ol>
            </li>
        )}
    </ol>
      
    </>
  )
}

export default GameBoard