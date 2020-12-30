import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {PersonForm, Filter, Persons, Notification} from './Components.js'
import './App.css'

const App = () => {

  const baseUrl = 'http://localhost:3001/api/persons'

  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ notificationClass, setNotificationClass ] = useState('')
  const [ update, setUpdate ] = useState(true)

  const triggerUpdate = () => setUpdate(!update)

 useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        setPersons(response.data)
      })
  },[update])

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
                  setNotificationClass={setNotificationClass}
                  triggerUpdate={triggerUpdate} /> 

      <h3>Numbers</h3>

      <Persons persons={persons} 
               setPersons={setPersons} 
               filter={filter}
               setNotification={setNotification}
               setNotificationClass={setNotificationClass}
               triggerUpdate={triggerUpdate} />

    </div>
  )
}

export default App;
