import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bruno', age: 30 },
      { name: 'Marcello', age: 29 },
      { name: 'Amandah', age: 21 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DONT DO THIS: this.state.persons[0].name = 'Borta';
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Marcello', age: 29 },
        { name: 'Amandah', age: 22 },
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Bruno', age: 30 },
        { name: event.target.value, age: 29 },
        { name: 'Amandah', age: 22 },
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style}
          onClick={() => this.togglePersonsHandler}>
            Toggle Persons
        </button>
        {this.state.showPersons
          ? <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Borta!!')}>My hobbies: Videogames</Person>
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}/>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
          : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi! I'm a React App!!!"));
  }
}

export default App;
