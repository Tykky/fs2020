import React, { useEffect, useState } from 'react'
import PersonForm from './PersonForm.js'
import Filter from './Filter.js'
import Persons from './Persons.js'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])

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
