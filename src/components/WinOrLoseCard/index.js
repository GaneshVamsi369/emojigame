import './index.css'

const winimage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseimage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {wonorlost, score, playagain} = props
  const imgurl = wonorlost ? winimage : loseimage
  const status = wonorlost ? 'You Won' : 'You Lose'
  const scorelabel = wonorlost ? 'Best Score' : 'Score'

  const playagainclicked = () => {
    playagain()
  }

  return (
    <div className="cardcontainer">
      <div className="scorecontainer">
        <h1>{status}</h1>
        <p>{scorelabel}</p>
        <p className="scorepara">{score}/12</p>
        <button type="button" className="playbtn" onClick={playagainclicked}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imgurl} alt="win or lose" className="finalimg" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
