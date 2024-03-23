import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
const [weather, setWeather] = useState(null)
const [city, setCity] = useState('')
const cities = ['sydney', 'paris', 'new york', 'seoul']

const getCurrentLocation = () =>{
  // console.log("getCurrentLocation")
  navigator.geolocation.getCurrentPosition(showPosition);
}
const showPosition = (position) =>{
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log("현재위치", lat, lon)
  getWeatherByCurrentLocation(lat, lon);
  
}

const getWeatherByCity = ()=>{
  let url= `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=2adc9641cf0514e2cf35500bb77f249f`
  
}

const getWeatherByCurrentLocation = async(lat, lon) =>{

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2adc9641cf0514e2cf35500bb77f249f&units=metric`
  let response = await fetch(url)
  let data = await response.json()
  console.log("data", data)
  setWeather(data);
}
  useEffect(()=>{
    getCurrentLocation();
  }, [])

  useEffect(()=>{
    // console.log("city", city)
    getWeatherByCity()
  }, [city])


  return (
    <div className="container">
     <WeatherBox weather = {weather}></WeatherBox>
     <WeatherButton cities = {cities} setCity={setCity}></WeatherButton>
    </div>
  );
}

export default App;
