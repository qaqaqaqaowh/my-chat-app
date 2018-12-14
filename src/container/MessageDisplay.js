import React, { Component } from 'react'
import moment from 'moment'

class MessageDisplay extends Component {

  componentDidMount() {
    this.end.scrollIntoView()
  }

  componentDidUpdate() {
    this.end.scrollIntoView()
  }

  render() {
    return(
      <div className='message-container' style={{overflowY: 'scroll', flex: 1}}>
        {
          this.props.messages.map((msg, index) => (
            <div className='message-container' key={index}>
              <img src={`https://api.adorable.io/avatars/150/${msg.username}.png`} alt={`https://api.adorable.io/avatars/150/${msg.username}.png`} onLoad={this.end.scrollIntoView()}/>
              <h2><strong>{msg.username}</strong>: {msg.message}</h2>
              <p className='text-muted'>{moment(msg.timestamp).format("DD-MMM-YYYY hh:mm:ss A")}</p>
            </div>
          ))
        }
        <div ref={(el) => {this.end = el}}></div>
      </div>
    )
  }
}

export default MessageDisplay