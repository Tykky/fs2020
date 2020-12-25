import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    const obj = {name: newName, number: newNumber}
    const copy = [...persons]
    if (!copy.some(person => person.name === newName)) {
      copy.push(obj)
      setPersons(copy)
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const filterPersons = () => {
    const copy = [...persons]
    return copy.filter(person => (
      person.name.toLowerCase().includes(filter.toLowerCase())
    ))
  }

  console.log(filterPersons())

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input onChange={(event) => setFilter(event.target.value)}></input>
      <form onSubmit={submitHandler}>
        <h2>add a new</h2>
        <div>
          name: <input onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input onChange={(event) => setNewNumber(event.target.value)}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterPersons().map(person => 
        <p>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App;
