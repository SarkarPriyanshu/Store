import React from "react";
import { connect } from "react-redux";
import { RemoveItem } from "../../Redux/Actions/Cart/cart.action";

const CartPageItems = ({ cartItem, dispatch, ...otherProps }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(RemoveItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(CartPageItems);
