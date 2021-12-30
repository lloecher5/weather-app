import Header from "../../sectioning/header/header";
import Footer from "../../sectioning/footer/footer";
import "./style.css";
import { Card, Button } from "react-bootstrap";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));

  const removeFromFavorites = (e) => {
    let favoriteList = JSON.parse(localStorage.getItem("favorites"));

    //find the object that you want to remove. This will return the object that matches the name of the card where the remove button is clicked
    const elementRemoved = favoriteList.find((element) => {
      return element.city === e.target.dataset.name;
    });

    //loop through the local storage. If the name matches the name of object that you want to remove, splice that object from the array
    for (let i = 0; i < favoriteList.length; i++) {
      if (favoriteList[i].city === elementRemoved.city) {
        favoriteList.splice(i, 1);
      }
    }

    //removes the top most parent of the remove button
    e.target.parentNode.parentNode.remove();

    //turn the local storage array back into JSON
    favoriteList = JSON.stringify(favoriteList);
    //Reset the local storage to the new JSON object that has removed the desired item
    localStorage.setItem("favorites", favoriteList);
  };

  return (
    <div>
      <Header />
      <div className="favorites">
        {favorites &&
          favorites.map((favorite, index) => {
            return (
              <Card
                className="favorite-city clear"
                key={index}
                style={{ width: "18rem" }}
                data-name={favorite.city}
              >
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Text>
                    <p>
                      <em>{favorite.city}</em>
                    </p>
                    <img
                      alt="weather-icon"
                      src={`https://openweathermap.org/img/w/${favorite.icon}.png`}
                    ></img>

                    <p>
                      <b>Temperature:</b> {favorite.temp} °F
                    </p>
                    <p>
                      <b>Description:</b> {favorite.description}
                    </p>
                  </Card.Text>
                  <Button
                    onClick={removeFromFavorites}
                    className="remove-btn"
                    variant="danger"
                    data-name={favorite.city}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
