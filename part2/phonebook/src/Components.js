import React from 'react'
import service from './Service.js'

const Notification = (props) => {
  if (props.message === null) {
    return null
  }
  return (
    <div class={props.class}>
      {props.message}
    </div>
  )
}

const PersonForm = (props) =>
{
  const submitHandler = event =>
  {
    event.preventDefault()
    const obj = { name: props.newName, number: props.newNumber }
    const copy = [...props.persons]
    if (!copy.some(person => person.name === props.newName)) {
      service.create(obj).then(() => {
        copy.push(obj)
        props.setPersons(copy)
        props.triggerUpdate()
        props.setNotification(`Added ${obj.name}`)
        props.setNotificationClass('success')
        setTimeout(() => props.setNotification(null), 2000)
      })
        .catch(error => {
          console.log(error.response.data)
          props.setNotification(error.response.data.error)
          props.setNotificationClass('error')
          setTimeout(() => props.setNotification(null), 5000)
        })
    } else if (window.confirm(`${props.newName} is already added to phonebook, replace the old number with a new one?`)) {
      const id = props.persons.filter(person => person.name === obj.name)[0].id
      const index = props.persons.findIndex(person => person.id === id)
      service.update(id, obj).then(() => {
        copy[index] = obj
        obj.id = id
        props.setPersons(copy)
      }).catch(error => {
        console.log(error.response.data)
        props.setNotification(error.response.data.error)
        props.setNotificationClass('error')
        setTimeout(() => props.setNotification(null), 5000)
      })
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        name: <input onChange={props.nameHandler}></input>
      </div>
      <div>
        number: <input onChange={props.numberHandler}></input>
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  )
}

const Filter = (props) => (
  <div>
    filter shown with: <input onChange={props.onChange}></input>
  </div>
)

const Persons = (props) => {
  let copy = [...props.persons]

  const filterPersons = () => {
    return copy.filter(person => (
      person.name.toLowerCase().includes(props.filter.toLowerCase())
    ))
  }

  return (filterPersons().map(person =>
    <p>{person.name} {person.number} <button onClick={() => {
      if (window.confirm(`Delete ${person.name}`)) {
        copy = copy.filter(item => item.id !== person.id)
        service.destroy(person.id).then(props.setPersons(copy))
          .catch(() => {
            props.setNotification(`Information of ${person.name} has already been removed from server`)
            props.setNotificationClass('error')
            setTimeout(() => props.setNotification(null), 5000)
          })
        props.triggerUpdate()
      }
    }}>
      delete</button> </p>
  ))
}

export {
  PersonForm,
  Filter,
  Persons,
  Notification
}