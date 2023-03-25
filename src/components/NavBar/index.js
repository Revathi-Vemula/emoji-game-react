import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  console.log(score)
  return (
    <div className="navbar">
      <div className="emoji-logo-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="game-name">EmojiGame</h1>
      </div>
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
