import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import Header from './components/Header'
import Player from './components/Player'
import Log from './components/Log'

function App() {
  const [activePlayer , setActivePlayer] = useState('X');
  
  function handleSelectSquare (){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }
  return (

    <main>
      <Header/>

      <div id="game-container">
        <ol  id="players" className='highlight-player' >
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player2" symbol="0" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>

    <Log/>

    </main>
  )
}

export default App
