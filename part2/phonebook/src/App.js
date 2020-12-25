import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const inputHandler = (event) => {
    setNewName(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const obj = {name: newName}
    const copy = [...persons]
    if (!copy.some(person => person.name === newName)) {
      setPersons(copy)
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input onChange={inputHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p>{person.name}</p>
      ))}
    </div>
  )
}

export default App;
