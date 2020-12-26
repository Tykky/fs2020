import axios from 'axios'
import React, {useEffect, useState} from 'react'

const Data = (props) => {

  const filter = (data) => (
    data.filter(country =>
      country.name.toLowerCase().includes(props.input.toLowerCase())
    )
  )

  const dataFiltered = filter(props.data)

  if (dataFiltered.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (dataFiltered.length > 1) {
    return(
      <table>
        {dataFiltered.map(country =>
          <li>{country.name}</li>
        )}
      </table>
    )
  } else if (dataFiltered.length === 1) {
    const country = dataFiltered[0]
    console.log(country)
    return  (
      <>
        <h2>{country.name}</h2>
        <p>capital {country.capital}<br/>
           population {country.population}</p>
        <h2>languages</h2>
        <table>
          {country.languages.map(lang =>
            <li>{lang.name}</li>  
          )}
        </table>
        <img src={country.flag} height="150px" />
      </>
    )
  }
  return <></>
}

const App = () => {

  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  useEffect(() =>
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setData(response.data))
  ,[])

  return (
    <div>
      find countries <input onChange={event => 
      setInput(event.target.value)}></input>
      <Data data={data} input={input} />
    </div>
  )
}

export default App;
