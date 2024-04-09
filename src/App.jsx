import './App.css'
import Header from './components/Header'
import Player from './components/Player'

function App() {

  return (

    <main>
      <Header/>

      <div id="game-container">
        <ol  id="players">
          <Player initialName="Player1" symbol="X"/>
          <Player initialName="Player2" symbol="0"/>
        </ol>
        Game Board
      </div>
    log
    </main>
  )
}

export default App
