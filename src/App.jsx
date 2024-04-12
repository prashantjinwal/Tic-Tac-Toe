/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import Header from './components/Header'
import Player from './components/Player'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations'

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
  const [gameturn, setGameturn] = useState([]);
  // const [activePlayer , setActivePlayer] = useState('X');
  const activePlayer = derivedActiveplayer(gameturn);


let gameBoard = initialGameBoard;
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
      winner = firstSquareSymbol
    }

  }

  function handleSelectSquare (rowindex, colIndex ){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  
    setGameturn(prevTurns => {

      const currentPlayer = derivedActiveplayer(prevTurns);
      const UpadateTurns = [{ square : {row : rowindex, col : colIndex}, player:currentPlayer },
         ...prevTurns]
         return UpadateTurns;

    });   
    
  }
  return (

    <main>
      <Header/>

      <div id="game-container">
        <ol  id="players" className='highlight-player' >
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player2" symbol="0" isActive={activePlayer === 'O'} />
        </ol>
        {winner && <p>You Won {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

    <Log turns={gameturn} />

    </main>
  )
}

export default App
