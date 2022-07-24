import { CartAction, CartState } from "../../types";
import { ActionType } from "../action";

const initialState: CartState = {
  productsInCart: [],
};

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT_TO_CART:
      return {...state, productsInCart: [...state.productsInCart, action.payload]};
    case ActionType.REMOVE_PRODUCT_FROM_CART:
      const removedId = state.productsInCart.findIndex(el => el.id === action.payload);
      const newProducts = state.productsInCart.slice(); 
      newProducts.splice(removedId, 1);
      return {...state, productsInCart: newProducts};
    case ActionType.CHANGE_COUNT_IN_CART:
      const id = state.productsInCart.findIndex(el => el.id === action.payload.id);
      const updProducts = state.productsInCart.slice(); 
      updProducts[id] = {...state.productsInCart[id], count: action.payload.count};
      return {...state, productsInCart: updProducts};
    case ActionType.CLEAR_CART:
      return {...state, productsInCart: []};
    default:
      return state;
  }
};