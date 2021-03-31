import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      {username: 'David in UserOutput'},
      {username: 'Laura in UserOutput'}
    ]
  };

  usernameStateHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render () {
    const usernameBoxStyle = {
      width: '60%',
      margin: '16px auto',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '16px',
      textAlign: 'center'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <div style={usernameBoxStyle}>
        <UserInput
          username={this.state.usernames[0].username}
          changed={this.usernameStateHandler}/>
        <UserOutput
          username={this.state.usernames[0].username}/>
        </div>
        <div style={usernameBoxStyle}>
        <UserInput
          username={this.state.usernames[1].username}
          changed={this.usernameStateHandler}/>
        <UserOutput
          username={this.state.usernames[1].username}/>
        </div>
      </div>
    );
  }
}

export default App;
