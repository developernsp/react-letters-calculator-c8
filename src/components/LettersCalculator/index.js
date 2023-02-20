import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onType = event => {
    const {count} = this.state
    const counting = event.target.value.length
    this.setState({count: counting})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <div>
            <h1 className="title">Calculate the Letters you enter</h1>
            <label className="note" htmlFor="input">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input"
              onChange={this.onType}
              placeholder="Enter the phrase"
              id="input"
            />
            <br />
            <p className="count">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
