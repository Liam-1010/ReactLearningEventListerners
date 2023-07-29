import React from "react";

export default function Weather(props) {
  //Closure, a function within a function. Has local scopped variables available so can read from props

  function showFarehrenheit(event) {
    event.preventDefault();
    let temperature = (props.temperature * 9) / 5 + 32;
    alert(`The temperature in farehrenheit is ${Math.round(temperature)}°F`);
    //Function returns nothing
  }
  //Weather function returns JSX
  return (
    <p>
      Weather in {props.city} is {props.temperature}°C |{" "}
      <a href="/" onClick={showFarehrenheit}>
        °F
      </a>
    </p>
  );
}
