

function GameBoard({ onSelectSquare, turns  }) {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    let gameBoard = initialGameBoard;
    for(const turn of turns){
        const {square, player} = turn;
        const {row , col} = square;
        gameBoard[row][col] = player;
    }


    
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
        {gameBoard.map((row,rowindex)=>
            <li key={rowindex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => <li key={colIndex} ><button onClick={() => onSelectSquare(rowindex, colIndex)}>{playerSymbol}</button></li>) }
                </ol>
            </li>
        )}
    </ol>
      
    </>
  )
}

export default GameBoard;