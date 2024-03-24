import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, cityChange }) => {
  console.log("도시", cities);
  return (
    <div className="cityBt">
      <Button
        variant={`${setCity == null ? "outline-warning" : "warning"}`}
        onClick={() => cityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((city) => (
        <Button
          variant={`${setCity == null ? "outline-warning" : "primary"}`}
          onClick={() => cityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
