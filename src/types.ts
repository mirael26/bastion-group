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
}

export interface ProductInCart extends Product {
  count: number,
}

export type Products = Array<Product>;
export type ProductsInCart = Array<ProductInCart>;

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
  productsInCart: ProductsInCart,
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
  payload: ProductInCart,
}

export interface RemoveProductFromCart {
  type: typeof ActionType.REMOVE_PRODUCT_FROM_CART,
  payload: number,
}

export interface ChangeCountInCart {
  type: typeof ActionType.CHANGE_COUNT_IN_CART,
  payload: {id: number, count: number},
}

export interface ClearCart {
  type: typeof ActionType.CLEAR_CART,
}

export type DataAction = AddProduct | AddProductType;
export type FilterAction = UpdatePriceFilter | UpdateTypeFilter | UpdateGostFilter;
export type CartAction = AddProductToCart | RemoveProductFromCart | ChangeCountInCart | ClearCart;
export type Action = DataAction | FilterAction | CartAction;