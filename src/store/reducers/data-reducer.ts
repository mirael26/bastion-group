import { DataAction, DataState } from "../../types";
import { ActionType } from "../action";

const initialState: DataState = {
  products: [],
  productTypes: [],
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      return {...state, products: [...state.products, action.payload]};
    case ActionType.ADD_PRODUCT_TYPE:
      return {...state, productTypes: [...state.productTypes, action.payload]};
    case ActionType.CHANGE_COUNT:
      const id = state.products.findIndex(el => el.id === action.payload.id);
      const newProducts = state.products.slice(); 
      newProducts[id] = {...state.products[id], price: action.payload.count};;
      return {...state, products: newProducts};
    default:
      return state;
  }
};