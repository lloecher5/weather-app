import { React } from "react";
import { Card, Button } from "react-bootstrap";
import "./CityWeather.css";

const CityWeather = (props) => {
  const saveToFavorites = (e) => {
    console.log(props);
    let favoriteListJSON = localStorage.getItem("favorites");

    //converts the watchlist object from JSON to an array
    let favoriteList = JSON.parse(favoriteListJSON);

    //if favorite list is empty, create new array
    if (!favoriteList) {
      favoriteList = [];
    }

    //push selected city weather into the array
    favoriteList.push(props);

    //converts array back into JSON
    favoriteListJSON = JSON.stringify(favoriteList);

    //adds the brewery to the local storage
    localStorage.setItem("favorites", favoriteListJSON);
  };

  return (
    <div>
      <Card className="current-weather" style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Current Weather</Card.Title>
          <Card.Text>
            <p>
              <em>{props.city}</em>
            </p>
            <img
              alt="weather-icon"
              src={`https://openweathermap.org/img/w/${props.icon}.png`}
            ></img>

            <p>
              <b>Temperature:</b> {props.temp} °F
            </p>
            <p>
              <b>Description:</b> {props.description}
            </p>
          </Card.Text>
          <Button onClick={saveToFavorites} variant="primary">
            Add to Favorites
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CityWeather;
