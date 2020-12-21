import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.click}>{props.text}</button>
)

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [selectCounter, setSelectCounter] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected]} <br/>
        has {selectCounter[selected]} votes
      </p>
      <Button text="vote" click={() => {
        const copy = [...selectCounter]
        copy[selected] += 1
        setSelectCounter(copy)
      }} />
      <Button text="next anecdote" click={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[selectCounter.indexOf(Math.max(...selectCounter))]} <br/>
        Has {Math.max(...selectCounter)} votes
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)