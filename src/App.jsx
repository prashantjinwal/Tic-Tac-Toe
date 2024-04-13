/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import Header from './components/Header'
import Player from './components/Player'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from './components/GameOver'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActiveplayer(gameturn){
  let currentPlayer = 'X';

      if(gameturn.length > 0 && gameturn[0].player === 'X'){
        currentPlayer = "O";
      }
  return currentPlayer;
}


function App() {
  const [playerNames , setPlayerName] = useState ({
    'X' : "Player 1",
    'O' : 'Player 2'
})

  const [gameturn, setGameturn] = useState([]);
  // const [activePlayer , setActivePlayer] = useState('X');
  const activePlayer = derivedActiveplayer(gameturn);


let gameBoard = [...initialGameBoard.map((array) => [...array])];
let winner ;
  for(const turn of gameturn){
    const {square, player} = turn;
    const {row , col} = square;
    gameBoard[row][col] = player;
  }

  for(const combinations of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combinations[0].row] [combinations[0].column];
    const SecondSquareSymbol = gameBoard[combinations[1].row] [combinations[1].column]; 
    const ThirdSquareSymbol = gameBoard[combinations[2].row] [combinations[2].column];

    if(firstSquareSymbol && firstSquareSymbol === SecondSquareSymbol && firstSquareSymbol === ThirdSquareSymbol){
      winner = playerNames[firstSquareSymbol];
    }

  }

  const hasDraw = gameturn.length === 9 && !winner;

  function handleSelectSquare (rowindex, colIndex ){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  
    setGameturn(prevTurns => {

      const currentPlayer = derivedActiveplayer(prevTurns);
      const UpadateTurns = [{ square : {row : rowindex, col : colIndex}, player:currentPlayer },
         ...prevTurns]
         return UpadateTurns;

    });   
    
  }

  function handleRematch (){
    setGameturn([]);
  }

  function handlePlayerName (symbol, newName){
    setPlayerName((prevName) => {
      return{
        ...prevName,
        [symbol]: newName
      }
    }
    
  )
  }
  

  return (

    <main>
      <Header/>

      <div id="game-container">
        <ol  id="players" className='highlight-player' >
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'} onchangeName={handlePlayerName} />
          <Player initialName="Player2" symbol="0" isActive={activePlayer === 'O'} onchangeName={handlePlayerName} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

    <Log turns={gameturn} />

    <div className=" bottom-0 px-[2em] inline-flex ml-[2em] bg-black items-center  h-[4em] border-[3px] border-dashed border-white">
      <h2 className=' font-semibold inline text-yellow-400 font-mono '>Developed By Prashant </h2>
    </div>

    </main>
  )
}

export default App
