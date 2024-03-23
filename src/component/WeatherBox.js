import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className="box">
      <div>{weather && weather.name}</div>
      <h2>섭씨 : {weather?.main.temp} / 화씨 : {(weather?.main.temp *1.8 + 32).toFixed(1)} </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
