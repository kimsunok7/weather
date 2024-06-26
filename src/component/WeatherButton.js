import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, cityChange }) => {
  console.log("도시", cities);
  return (

    <div className="cityBt">
    <Button className={cityChange === '' ? 'active' : ''}
     
      onClick={() => setCity('')}
     >
      Current Location
    </Button>
    {cities.map((item, index) => (
      <Button key = {index} className={cityChange === item ? 'active' : ''}
     
       
        onClick={() =>  setCity(item)}
      >
        {item}
      </Button>
    ))}
  </div>


    // <div className="cityBt">
    //   <Button 
    //     // variant={`${setCity === null ? "outline-primary" : "warning"}`}
    //     onClick={() => cityChange("current")}
    //    >
    //     Current Location
    //   </Button>
    //   {cities.map((city) => (
    //     <Button 
       
    //       variant={`${setCity === null ? "outline-warning" : "primary"}`}
    //       onClick={() => cityChange(city)}
    //     >
    //       {city}
    //     </Button>
    //   ))}
    // </div>
  );
};

export default WeatherButton;
