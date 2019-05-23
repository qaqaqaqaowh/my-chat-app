import React, { Component } from 'react';
import MessageForm from './container/MessageForm'
import MessageDisplay from './container/MessageDisplay'
import UserList from './component/UserList'
import Socket from './utils/socket'
import MQ from 'react-responsive'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      users: [],
      currentUser: ""
    }
  }

  handleNewMessage = (msg) => {
    Socket.emit("BROADCAST_MESSAGE", {username: "Itsa me Mario", message: msg, timestamp: Date.now()})
  }

  componentDidMount() {

    Socket.on('GET_CURRENT_USER', user => {
      this.setState({currentUser: user.username})
    })

    Socket.on('UPDATE_USER_LIST', users => {
      this.setState({users: [...users]})
    })

    Socket.on("RECEIVE_BROADCAST", msg => {
      this.setState({messages: [...this.state.messages, msg]})
    })

    Socket.emit('NEW_USER')
  }

  render() {
    return (
      <div onKeyPress={() => {this.form.input.focus()}} tabIndex="0" className="App" style={{textAlign: 'center', display: 'flex', height: '100vh', flexDirection: 'column'}}>
        <MQ query="(min-device-width: 576px)">
          <UserList users={this.state.users}/>
        </MQ>
        <MessageDisplay messages={this.state.messages}/>
        <MQ query="(max-device-width: 1025px)">
          <MessageForm isMobile={true} newMessage={this.handleNewMessage} ref={(form) => {this.form = form}}/>
        </MQ>
        <MQ query="(min-device-width: 1026px)">
          <MessageForm newMessage={this.handleNewMessage} ref={(form) => {this.form = form}}/>
        </MQ>
      </div>
    );
  }
}

export default App;

// setInterval(() => {
// let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
// nativeInputValueSetter.call(document.querySelector("form input"), 'spam');

// let ev2 = new Event('input', { bubbles: true});
// document.querySelector("form input").dispatchEvent(ev2);
// document.querySelector("form input[type=submit]").click()
// }, 0.001)
