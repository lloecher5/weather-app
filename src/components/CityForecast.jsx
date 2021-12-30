import "./CityForecast.css";
import { React } from "react";
import { Card } from "react-bootstrap";

const CityForecast = (props) => {
  return (
    <Card className="forecast-card" style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className="day-name">
          {new Date(props.day.dt * 1000).toLocaleDateString("en", {
            weekday: "long",
          })}
        </Card.Title>
        <Card.Text>
          <p className="city-name">
            <em>{props.city}</em>
          </p>

          <img
            alt="weather-icon"
            src={`https://openweathermap.org/img/w/${props.day.weather[0].icon}.png`}
          ></img>

          <p>
            <b>Temperature:</b>{" "}
            {Math.round((props.day.feels_like.day - 273.15) * (9 / 5) + 32)}°F
          </p>
          <p>
            <b>Description:</b> {props.day.weather[0].description}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CityForecast;
