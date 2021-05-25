import React from "react";
import { connect } from "react-redux";
import CustomButton from "../buttons/button.component";
import { AddItem } from "../../Redux/Actions/Cart/cart.action";

const CollectionItem = ({ item, AddItemToCart }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <>
      <div key={id} className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>

        <CustomButton onClick={() => AddItemToCart(item)} inverted>
          ADD TO CART
        </CustomButton>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddItemToCart: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
