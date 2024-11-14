import './index.css'

const EmojiCard = props => {
  const {emoji, cardclicked} = props
  const {id, emojiName, emojiUrl} = emoji

  const buttonclicked = () => {
    cardclicked(id)
  }

  return (
    <li>
      <button type="button" onClick={buttonclicked} className="pic">
        <img src={emojiUrl} className="imgs" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
