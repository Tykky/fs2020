import React from 'react'

const PersonForm = (props) => {

    const submitHandler = (event) => {
        event.preventDefault()
        const obj = {name: props.newName, number: props.newNumber}
        const copy = [...props.persons]
        if (!copy.some(person => person.name === props.newName)) {
          copy.push(obj)
          props.setPersons(copy)
        } else {
          window.alert(`${props.newName} is already added to phonebook`)
        }
      }

    return <form onSubmit={submitHandler}>
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
    }
  
  export default PersonForm