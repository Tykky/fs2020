import React from 'react'

const Persons = (props) => {
    const filterPersons = () => {
      const copy = [...props.persons]
      return copy.filter(person => (
        person.name.toLowerCase().includes(props.filter.toLowerCase())
      ))
    }
    return (filterPersons().map(person =>
        <p>{person.name} {person.number}</p>
      ))
}

export default Persons