/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import Header from './components/Header'
import Player from './components/Player'
import Log from './components/Log'

function App() {
  const [gameturn, setGameturn] = useState([]);
  const [activePlayer , setActivePlayer] = useState('X');
  
  function handleSelectSquare (rowindex, colIndex ){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameturn(prevTurns => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = "O";
      }
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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameturn} />
      </div>

    <Log turns={gameturn} />

    </main>
  )
}

export default App
