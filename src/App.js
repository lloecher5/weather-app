import Header from "./sectioning/header/header";
import Footer from "./sectioning/footer/footer";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  // const getCurrentLocation = () => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     const lat = position.coords.latitude;
  //     const lon = position.coords.longitude;
  //     console.log(lat, lon);
  //   });
  // };

  return (
    <div className="App">
      <Header />
      <main>
        <Card className="welcome" style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Welcome to the Weather App!</Card.Title>
            <Card.Text>
              <p>
                Welcome to the weather app. Go to the search page where you are
                able to discover the current weather of any city. You can also
                see the weekly forecast for each city as well! Add your favorite
                cities to your favorites page!
              </p>
            </Card.Text>
            <NavLink to="/search">
              <Button variant="primary">Search for Cities!</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default App;
