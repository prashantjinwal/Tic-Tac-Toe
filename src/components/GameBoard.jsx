const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard() {
  return (
    <>
    <ol id="game-board">
        {intialGameBoard.map((row,rowindex)=>
            <li key={rowindex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => <li key={colIndex} ><button>{playerSymbol}</button></li>) }
                </ol>
            </li>
        )}
    </ol>
      
    </>
  )
}

export default GameBoard
