

function GameBoard({ onSelectSquare, board  }) {


    
    // const [gameBoard, setgameBoard] = useState(initialGameBoard);

    // function handlebtn(rowindex,colIndex){
    //     setgameBoard((prevGameBoard) =>{
    //     const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updateBoard[rowindex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     })
    //     onSelectSquare();
    // }

  return (
    <>
    <ol id="game-board">
        {board.map((row,rowindex)=>
            <li key={rowindex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => <li key={colIndex} ><button onClick={() => onSelectSquare(rowindex, colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button></li>) }
                </ol>
            </li>
        )}
    </ol>
      
    </>
  )
}

export default GameBoard;