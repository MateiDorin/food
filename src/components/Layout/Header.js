import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>Restaurant</h1>
          <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of food." />
      </div>
    </Fragment>
  );
};

export default Header;
