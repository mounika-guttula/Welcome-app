import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  render() {
    const {isSubscribe} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>
        <div>
          {isSubscribe ? (
            <button>Subscribe</button>
          ) : (
            <button>Subscribed</button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
