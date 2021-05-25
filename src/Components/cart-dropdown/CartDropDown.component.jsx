import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../buttons/button.component";
import { connect } from "react-redux";
import CartItem from "../cartItem/cartItem.component";
import { selectCartItems } from "../../Redux/Reducers/Cart/cart.selector";
import { ShowDropDown } from "../../Redux/Actions/Cart/cart.action";

const CartDropdown = ({ cartItems, history, Show_DropDown }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => {
          return <CartItem item={cartItem} />;
        })
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        Show_DropDown();
        history.push("/cart");
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => {
  return { cartItems: selectCartItems(state) };
};

const mapDispatchToProps = (dispatch) => ({
  Show_DropDown: () => dispatch(ShowDropDown()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
