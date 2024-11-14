import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

// Write your code here.
class EmojiGame extends Component {
  state = {
    topscore: 0,
    selectedlist: [],
    isgameon: true,
  }

  playagain = () => {
    this.setState({selectedlist: [], isgameon: true})
  }

  finishandsetscore = current => {
    const {topscore} = this.state
    let newscore = topscore
    if (current > topscore) {
      newscore = current
    }
    this.setState({topscore: newscore, isgameon: false})
  }

  cardclicked = id => {
    const {emojisList} = this.props
    const {selectedlist} = this.state
    if (selectedlist.includes(id)) {
      this.finishandsetscore(selectedlist.length)
    } else {
      if (emojisList.length - 1 === selectedlist.length) {
        this.finishandsetscore(emojisList.length)
      }
      this.setState(prev => ({
        selectedlist: [...prev.selectedlist, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  scorerecord = () => {
    const {emojisList} = this.props
    const {selectedlist} = this.state
    const wonorlost = selectedlist.length === emojisList.length

    return (
      <WinOrLoseCard
        wonorlost={wonorlost}
        score={selectedlist.length}
        playagain={this.playagain}
      />
    )
  }

  renderEmojilist = () => {
    const suffle = this.shuffledEmojisList()

    return (
      <ul className="listcontainer">
        {suffle.map(each => (
          <EmojiCard
            key={each.id}
            emoji={each}
            cardclicked={this.cardclicked}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topscore, selectedlist, isgameon} = this.state

    return (
      <div className="bg">
        <NavBar
          topscore={topscore}
          count={selectedlist.length}
          isgameon={isgameon}
        />
        <div className="container">
          {isgameon ? this.renderEmojilist() : this.scorerecord()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
