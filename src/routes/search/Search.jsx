import { React, useState } from "react";

import { getCurrentWeather } from "../../redux/actions/getCurrentWeather";
import { getWeeklyForecast } from "../../redux/actions/getWeeklyForecast";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import CityWeather from "../../components/CityWeather";
import CityForecast from "../../components/CityForecast";
import Header from "../../sectioning/header/header";
import Footer from "../../sectioning/footer/footer";
import "./style.css";

const Input = ({ getCurrentWeather, results, getWeeklyForecast, forecast }) => {
  const temperature = results
    ? Math.round((results.main.temp - 273.15) * (9 / 5) + 32)
    : "";

  const name = results ? results.name : "";

  const icon = results ? results.weather[0].icon : "";

  const description = results ? results.weather[0].description : "";

  // const [lat, setLat] = useState(null);
  // const [lon, setLon] = useState(null);

  const lat = results ? results.coord.lat : 40;

  const lon = results ? results.coord.lon : 90;

  const days = forecast ? forecast.daily : "";

  //sets the initial state of the input to null
  const [cityInput, setCityInput] = useState("");

  const handleChange = (e) => {
    //updates state to be what is in the input box
    const city = e.target.value;
    setCityInput(city);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //calls the action with the inputted city
    getCurrentWeather(cityInput);

    //sets the input value back to an empty string
    setCityInput("");
  };

  const handleClick = () => {
    getWeeklyForecast(lat, lon);
  };

  return (
    <div>
      <Header />
      <div className="content">
        <p>Search for a city to find it's current weather.</p>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" value={cityInput}></input>
          <button className="submit" variant="primary">
            Submit
          </button>
        </form>
        {results && (
          <div className="results">
            <CityWeather
              description={description}
              city={name}
              temp={temperature}
              lat={lat}
              lon={lon}
              icon={icon}
            />
            <Button
              variant="primary"
              className="forecast-btn"
              onClick={handleClick}
            >
              Click for Weekly Forecast
            </Button>
          </div>
        )}
        <div className="forecast">
          {days.length > 0 &&
            days.map((day, index) => {
              return (
                <CityForecast
                  clasName="forecast-card"
                  city={name}
                  key={index}
                  day={day}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

//not located in the store, therefore you do not need state. allows you to map the actions as a prop. Need reducer to pick up these actions
const mapDispatchToProps = {
  getCurrentWeather,
  getWeeklyForecast,
};

//mapping the redux store to the props of the component. This allows you to consume data from redux store.
const mapStateToProps = (state) => {
  return {
    results: state.currentWeather.results[0],
    forecast: state.weeklyForecast.results[0],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
