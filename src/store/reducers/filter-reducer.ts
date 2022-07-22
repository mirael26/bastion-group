import { FilterAction, FilterState } from "../../types";
import { ActionType } from "../action";

const initialState: FilterState = {
  priceFilter: null,
  typeFilter: [],
};

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case ActionType.UPDATE_PRICE_FILTER:
      return {...state, priceFilter: action.payload};
    case ActionType.UPDATE_TYPE_FILTER:
      return {...state, typeFilter: action.payload};
    default:
      return state;
  }
};