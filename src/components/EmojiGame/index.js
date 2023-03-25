/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {isGameInProgress: true, topScore: 0, selectedEmojiIds: []}

  resetGame = () => {
    this.setState({isGameInProgress: true, selectedEmojiIds: []})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {selectedEmojiIds} = this.state
    const isEmojiExistInSelected = selectedEmojiIds.includes(id)
    const lengthOfSelectedEmojis = selectedEmojiIds.length

    if (isEmojiExistInSelected) {
      this.finishGameAndSetTopScore(lengthOfSelectedEmojis)
    } else {
      if (lengthOfSelectedEmojis === emojisList.length - 1) {
        this.finishGameAndSetTopScore(lengthOfSelectedEmojis)
      }
      this.setState(prevState => ({
        selectedEmojiIds: [...prevState.selectedEmojiIds, id],
      }))
    }
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emoji-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  renderScoreCard = () => {
    const {selectedEmojiIds} = this.state
    const {emojisList} = this.props
    const isWon = emojisList.length === selectedEmojiIds.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={selectedEmojiIds.length}
      />
    )
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {isGameInProgress, topScore, selectedEmojiIds} = this.state

    return (
      <div className="app-container">
        <NavBar topScore={topScore} score={selectedEmojiIds.length} />
        <div className="emoji-game-container">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
