import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameResult = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  const onClickResetGame = () => {
    onClickPlayAgain()
  }

  return (
    <div className="result-container">
      <div className="score-container">
        <h1 className="game-result">{gameResult}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-result">{score}/12</p>
        <button
          type="button"
          className="btn-play-again"
          onClick={onClickResetGame}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard
