import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const cities = ["sydney", "paris", "new york", "seoul"];
  const [loading, setLoading] = useState(false);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2adc9641cf0514e2cf35500bb77f249f`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    // console.log("getCurrentLocation")
    navigator.geolocation.getCurrentPosition(showPosition);
  };
  const showPosition = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log("현재위치", lat, lon);
    getWeatherByCurrentLocation(lat, lon);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2adc9641cf0514e2cf35500bb77f249f`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // useEffect(() => {
  //   // console.log("city", city)

  // }, [city]);
  const cityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };
  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#ff0000"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather}></WeatherBox>
          <WeatherButton
            cities={cities}
            setCity={setCity}
            cityChange={cityChange}
          ></WeatherButton>
        </div>
      )}
    </div>
  );
}

export default App;
