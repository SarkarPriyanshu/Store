import { createSelector } from "reselect";

//Input Selector
const SelectCart = (state) => {
  return state.cart;
};

// Output Selector
export const selectCartItems = createSelector(
  [SelectCart],
  (cart) => cart.cartItems
);

export const SelectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
