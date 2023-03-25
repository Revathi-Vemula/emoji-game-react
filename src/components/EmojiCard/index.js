import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const selectedEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="btn-image" onClick={selectedEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
