import { NavLink } from "react-router-dom";

import "./style.css";

function Header() {
  return (
    <header>
      <div className="y-wrap">
        <nav className="navs">
          <p>
            {" "}
            <NavLink to="/"> Home </NavLink>
          </p>

          <h1>Weather App</h1>
          <ul>
            <li>
              <NavLink to="/search"> Search </NavLink>
            </li>
            <li>
              <NavLink to="/favorites"> Favorites </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
