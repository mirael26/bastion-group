import { productsMocks } from "../../mocks";
import { DataAction, DataState } from "../../types";
import { ActionType } from "../action";

const initialState: DataState = {
  products: productsMocks,
  productTypes: [],
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      return {...state, products: [...state.products, action.payload]};
    case ActionType.ADD_PRODUCT_TYPE:
      return {...state, productTypes: [...state.productTypes, action.payload]};
    default:
      return state;
  }
};