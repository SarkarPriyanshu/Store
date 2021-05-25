import { addItemToCart } from "./cart.utilites";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_DROP_DOWN":
      return { ...state, hidden: !state.hidden };

    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
