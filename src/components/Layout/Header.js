import { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg';
import './Header.css'

const Header = () => {
  return (
    <Fragment>
      <header className='header'>
        <h1>Restaurant</h1>
        <button>Cart</button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of food." />
      </div>
    </Fragment>
  );
};

export default Header;
