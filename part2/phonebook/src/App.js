import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {PersonForm, Filter, Persons, Notification} from './Modules.js'
import './App.css'

const App = () => {

  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ notificationClass, setNotificationClass ] = useState('')

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

      <Notification message={notification} class={notificationClass} />

      <Filter onChange={event => setFilter(event.target.value)} />

      <h3>Add a new</h3>

      <PersonForm nameHandler={event => setNewName(event.target.value)}
                  numberHandler={event => setNewNumber(event.target.value)}
                  persons={persons}
                  newName={newName}
                  newNumber={newNumber}
                  setPersons={setPersons} 
                  setNotification={setNotification}
                  setNotificationClass={setNotificationClass} /> 

      <h3>Numbers</h3>

      <Persons persons={persons} setPersons={setPersons} filter={filter}/>

    </div>
  )
}

export default App;
