import Header from "./sectioning/header/header";
import Footer from "./sectioning/footer/footer";
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
      <p>
        Welcome to the weather app. Go to the search page where you are able to
        discover the current weather of any city.You can also see the weekly
        forecast for each city as well!
      </p>
      <Footer />
    </div>
  );
}

export default App;
