import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.click}>{props.text}</button>
)

const Feedback = (props) => (
  <>
    <h1>Give feedback</h1>
    <Button click={props.clickGood} text="good" />
    <Button click={props.clickNeutral} text="neutral" />
    <Button click={props.clickBad} text="bad" />
  </>
)

const Statistic = (props) => (
  <p>{props.text} {props.value} {props.unit}</p>
)

const Statistics = (props) => {

  const { good, neutral, bad } = props

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivep = (good / total) * 100

  return( total == 0 ? 
  <>
    <h1>Statistics</h1>
    <p>No feedback given</p>
  </>
  :
  <>
    <h1>Statistics</h1>
    <Statistic text="good" value={good} />
    <Statistic text="neutral" value={neutral} />
    <Statistic text="bad" value={bad} />
    <Statistic text="average" value={average} />
    <Statistic text="positive" unit="%" value={positivep} />
  </>
  )

  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback clickGood={() => setGood(good + 1)} 
                clickNeutral={() => setNeutral(neutral + 1)}
                clickBad={() => console.log(setBad(bad + 1))} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)