import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.indexOf(item.product);
      if (existItem > -1) {
        let newCartItems = state.cartItems;
        newCartItems[existItem] = item;

        return {
          ...state,
          cartItems: newCartItems,
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};
