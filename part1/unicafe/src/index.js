import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Feedback = (props) => (
  <>
    <h1>Give feedback</h1>
    <button onClick={props.clickGood}>good</button>
    <button onClick={props.clickNeutral}>neutral</button>
    <button onClick={props.clickBad}>bad</button>
  </>
)

const Statistics = (props) => (
  <>
    <h1>Statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
  </>
)

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