import axios from 'axios'
import React, {useEffect, useState} from 'react'

const api_url = (city) => (
  `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${city}`
)

const Data = (props) => {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState()

  useEffect(() => {
    if (!(city === '')) {
    axios
      .get(api_url(city))
      .then(response => setWeather(response.data))
    }
  },[city])

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
          <li>{country.name} <button onClick={() => 
            props.setInput(country.name)
          }>show</button> </li>
        )}
      </table>
    )
  } else if (dataFiltered.length === 1) {
    const country = dataFiltered[0]
    if (!(city === country.capital)) {
      setCity(country.capital)
    }
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
        {
          weather != null ? 
          <>
            <h2>Weather in {city}</h2>
            <p><b>temperature: </b>  {weather.current.temperature} celcius</p>
            <img src={weather.current.weather_icons[0]}></img>
            <p><b>wind: </b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
          </> : <></>
        }
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
      <Data data={data} input={input} setInput={setInput}/>
    </div>
  )
}

export default App;
