import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { auth } from "../../firebase/firebase.utilities";
import { connect } from "react-redux";

const Header = (props) => {
  const { currentUser } = props;

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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.User_Reducer.currentUser };
};

export default connect(mapStateToProps)(Header);
