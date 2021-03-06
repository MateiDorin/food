import "./HeaderCartButton.css";
import CartIcon from "../Card/CartIcon";

const HeaderCartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">
        3
      </span>
    </button>
    );
};

export default HeaderCartButton;
