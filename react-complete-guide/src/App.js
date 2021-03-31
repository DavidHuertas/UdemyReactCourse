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
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
            <div>
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons ?
            persons : null
        }
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
