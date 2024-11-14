import './index.css'

const NavBar = props => {
  const {topscore, count, isgameon} = props

  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isgameon && (
          <div className="scores">
            <p>Score: {count}</p>
            <p>Top Score: {topscore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
