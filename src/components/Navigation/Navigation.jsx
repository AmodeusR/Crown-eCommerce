import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { userSignOut } from "../../utils/firebase/firebase";
import { CartIcon, CartDropdown } from "/src/components";

import "./navigation.scss";
import { ReactComponent as Logo } from "/src/assets/crown.svg";
import { createAction } from "../../utils/reducer/reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CART_ACTIONS } from "../../store/cart/cart.types";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  
  const handleSignOut = async () => {
    await userSignOut();
  };

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <Link to="/">
            <Logo
              className="navbar__logo"
              alt="Crown logo. Click to go to homepage."
            />
          </Link>
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link className="navbar__list-link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link className="navbar__list-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="navbar__list-item">
              {currentUser ? (
                <span className="navbar__list-link" onClick={handleSignOut}>
                  Sign Out
                </span>
              ) : (
                <Link className="navbar__list-link" to="/auth">
                  Sign In
                </Link>
              )}
            </li>
          </ul>
          <div
            tabIndex="0"
            className="cart-container"
            onBlur={() => dispatch(createAction(CART_ACTIONS.SET_IS_CART_OPEN, false))}
          >
            <CartIcon />
            <CartDropdown />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
