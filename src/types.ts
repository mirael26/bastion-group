import { ActionType } from "./store/action";

//data types

export interface Product {
  id: number,
  title: string,
  type: string,
  price: number,
  gost: string,
  image: string,
  hit?: boolean,
  discount?: boolean,
  promotion?: boolean,
  countInCart?: number,
}

export type Products = Array<Product>;

// reducers types

export interface DataState {
  products: Products,
  productTypes: Array<{id: number, name: string}>,
};

export interface FilterState {
  priceFilter: {
    min: number,
    max: number
  },
  typeFilter: Array<string>,
  gostFilter: Array<string>,
}

export interface CartState {
  productsInCart: Array<Product>,
}

// action types

export interface AddProduct {
  type: typeof ActionType.ADD_PRODUCT,
  payload: Product
}

export interface AddProductType {
  type: typeof ActionType.ADD_PRODUCT_TYPE,
  payload: {id: number, name: string},
}

export interface ChangeCount {
  type: typeof ActionType.CHANGE_COUNT,
  payload: {id: number, count: number},
}

export interface UpdatePriceFilter {
  type: typeof ActionType.UPDATE_PRICE_FILTER,
  payload: {min: number, max: number},
}

export interface UpdateTypeFilter {
  type: typeof ActionType.UPDATE_TYPE_FILTER,
  payload: Array<string>,
}

export interface UpdateGostFilter {
  type: typeof ActionType.UPDATE_GOST_FILTER,
  payload: Array<string>,
}

export interface AddProductToCart {
  type: typeof ActionType.ADD_PRODUCT_TO_CART,
  payload: Product,
}

export interface RemoveProductFromCart {
  type: typeof ActionType.REMOVE_PRODUCT_FROM_CART,
  payload: number,
}

export interface ChangeCountInCart {
  type: typeof ActionType.CHANGE_COUNT_IN_CART,
  payload: {id: number, count: number},
}

export type DataAction = AddProduct | AddProductType | ChangeCount;
export type FilterAction = UpdatePriceFilter | UpdateTypeFilter | UpdateGostFilter;
export type CartAction = AddProductToCart | RemoveProductFromCart | ChangeCountInCart;
export type Action = DataAction | FilterAction | CartAction;