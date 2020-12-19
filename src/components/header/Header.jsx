import Search from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../Constants";
import "./Header.css";

function Header({ cartItems }) {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={LOGO_URL} alt="" />
        </div>
      </Link>
      <div className="header__address">
        <div className="header__option">
          <span className="header__option__lineOne">Hello,</span>
          <span className="header__option__lineTwo">Select your address</span>
        </div>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIcon">
          <Search />
        </div>
      </div>
      <div className="header__navItems">
        <div className="header__option">
          <span className="header__option__lineOne">Hello, Vamsi</span>
          <span className="header__option__lineTwo">Account & Lists</span>
        </div>
        <div className="header__option">
          <span className="header__option__lineOne">Returns</span>
          <span className="header__option__lineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option__lineOne">Your</span>
          <span className="header__option__lineTwo">Prime</span>
        </div>
        <Link to="/cart">
          <div className="header__optionCart">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__cartCount">
              {getCount()}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
