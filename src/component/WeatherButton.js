import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherButton = ({cities, setCity}) => {
    console.log("도시", cities)
  return (
    <div>
      <Button variant="primary">Current Location</Button>
      {
        cities.map((item) => (
            console.log("item", item),
            <Button variant="primary" onClick={() => setCity(item) }>{item}</Button>
        )
           
        )
      }
      
    </div>
  )
}

export default WeatherButton
