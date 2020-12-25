import React, { useState } from 'react'
import PersonForm from './PersonForm.js'
import Filter from './Filter.js'
import Persons from './Persons.js'

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

  return (
    <div>
      
      <h2>Phonebook</h2>

      <Filter onChange={event => setFilter(event.target.value)} />

      <h3>Add a new</h3>

      <PersonForm nameHandler={event => setNewName(event.target.value)}
                  numberHandler={event => setNewNumber(event.target.value)}
                  persons={persons}
                  newName={newName}
                  newNumber={newNumber}
                  setPersons={setPersons} /> 

      <h3>Numbers</h3>

      <Persons persons={persons} filter={filter}/>

    </div>
  )
}

export default App;
