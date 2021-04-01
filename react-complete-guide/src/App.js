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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'David', age: 33},
        { name: event.target.value, age: 31},
        { name: 'Eris', age: 3}
      ]
    } )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
              {this.state.persons.map((person, index) => {
                return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} />
              })}
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
