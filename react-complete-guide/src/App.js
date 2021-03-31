import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'David', age: 33},
      { name: 'Laura', age: 31},
      { name: 'Eris', age: 3}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Dave';
    this.setState({
      persons: [
        { name: newName, age: 33},
        { name: 'Laura', age: 31},
        { name: 'Eris', age: 3}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'David', age: 33},
        { name: event.target.value, age: 31},
        { name: 'Eris', age: 3}
      ]
    } )
  }

  render () {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={buttonStyle}
          onClick={() => this.switchNameHandler('Dave the pave')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Super Dave')} >My hobbies: Music</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
