import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { auth } from "../../firebase/firebase.utilities";
import { connect } from "react-redux";
import CartBag from "./cartbag";
import CartDropdown from "../cart-dropdown/CartDropDown.component";
import { ShowDropDown } from "../../Redux/Actions/Cart/cart.action";
import { selectCurrentUser } from "../../Redux/Reducers/User/user.selector";

const Header = (props) => {
  const { currentUser, Hide_DropDown_Value, Show_DropDown } = props;

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser && currentUser != null ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <span onClick={() => Show_DropDown()}>
          <CartBag />
        </span>
      </div>
      {Hide_DropDown_Value ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    Hide_DropDown_Value: state.cart.hidden,
  };
};

const mapDispatchToProps = (dispatch) => ({
  Show_DropDown: () => dispatch(ShowDropDown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
