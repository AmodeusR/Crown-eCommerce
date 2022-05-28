import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { userSignOut } from "../../utils/firebase/firebase";
import { CartIcon, CartDropdown } from "/src/components";

import UserContext from "../../contexts/user.context";
import CartContext, { CART_ACTIONS } from "../../contexts/cart.context";

import { ReactComponent as Logo } from "/src/assets/crown.svg";
import "./navigation.scss";
import { createAction } from "../../utils/reducer/reducer";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { cartDispatch } = useContext(CartContext);

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
            onBlur={() => cartDispatch(createAction(CART_ACTIONS.SET_IS_CART_OPEN, false))}
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
