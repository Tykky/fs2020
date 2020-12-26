import React from 'react'
import service from './service.js'

const PersonForm = (props) => {

    const submitHandler = event => {
        event.preventDefault()
        const obj = {name: props.newName, number: props.newNumber}
        const copy = [...props.persons]
        if (!copy.some(person => person.name === props.newName)) {
          service.create(obj).then(() => {
            copy.push(obj)
            props.setPersons(copy)
          }).catch(error => {
            alert('POST failed', error)
          })
        } else {
          window.alert(`${props.newName} is already added to phonebook`)
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
            copy = copy.filter(item => item.id != person.id)
            service.destroy(person.id).then(props.setPersons(copy))
          }
        }}>
        delete</button> </p>
    ))
}

export {
    PersonForm,
    Filter,
    Persons
}