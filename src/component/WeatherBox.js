import React from "react";

const WeatherBox = ({ weather }) => {
  const temperatureC =
    weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : "";
  const temperatureF =
    weather && weather.main ? (weather.main.temp - 459.67).toFixed(2) : "";

  return (
    <div className="box">
      <div>{weather && weather.name}</div>
      {/* <h2>
        섭씨 : {weather?.main.temp} / 화씨 :{" "}
        {(weather?.main.temp * 1.8 + 32).toFixed(1)}{" "}
      </h2> */}
      <h2> {`${temperatureC} °C / ${temperatureF} °F`}</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
