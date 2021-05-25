import React from "react";
import { connect } from "react-redux";
import {
  selectCartItems,
  SelectCartTotal,
} from "../../Redux/Reducers/Cart/cart.selector";
import CartPageItems from "../../Components/CartPageItems/CartPageItems.component";

const Cart = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems &&
      cartItems.map((item) => {
        return <CartPageItems cartItem={item} />;
      })}
    <div className="total">TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
    total: SelectCartTotal(state),
  };
};

export default connect(mapStateToProps)(Cart);
