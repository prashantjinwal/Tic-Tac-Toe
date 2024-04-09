import logo from "../../public/game-logo.png"

function Header() {
  return (
    <div>
        <header>
          <img src={logo} alt="logo" />
          <h1>Tic-Tac-Toe</h1>
        </header>
      
    </div>
  )
}

export default Header
