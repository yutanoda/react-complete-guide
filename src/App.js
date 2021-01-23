import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person.js';

const App = props =>  {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log('personsState');
  console.log(personsState);
  
  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];

    persons[personIndex] = person;

    setPersonsState({ 
      persons: persons,
      showPersons: true
    })
  }

  const deletePersonHandler = (personIndex) => {
    // const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    console.log('押したあと');
    console.log(persons);
    persons.splice(personIndex, 1);
    
    setPersonsState({
      persons: 
        persons,
      showPersons: true
    })
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: !doesShow
    })
  }

  const style = {
    backgroundColor : 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
          {personsState.persons.map((person, index) => {
            return <Person  
              click={() => deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => nameChangeHandler(event, person.id)} />
          })}
      </div> 
    );

    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // };
  }

  const classes = [];

  if(personsState.persons.length <= 2) {
    classes.push('red');
  }
  if(personsState.persons.length <= 1) {
    classes.push('bold'); // classes = ['red', 'bold']
  }

  return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button" onClick={togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
  );
//  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;



