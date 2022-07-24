import { AddProduct, AddProductToCart, AddProductType, ChangeCountInCart, Product, ProductInCart, RemoveProductFromCart, UpdateGostFilter, UpdatePriceFilter, UpdateTypeFilter } from "../types";

export const ActionType = {
  ADD_PRODUCT: "ADD_PRODUCT",
  ADD_PRODUCT_TYPE: "ADD_PRODUCT_TYPE",
  UPDATE_PRICE_FILTER: "UPDATE_PRICE_FILTER",
  UPDATE_TYPE_FILTER: "UPDATE_TYPE_FILTER",
  UPDATE_GOST_FILTER: "UPDATE_GOST_FILTER",
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",
  CHANGE_COUNT_IN_CART: "CHANGE_COUNT_IN_CART",
} as const;

export const ActionCreator = {
  addProduct: (product: Product): AddProduct => ({
    type: ActionType.ADD_PRODUCT,
    payload: product,
  }),
  addProductType: (type: {id: number, name: string}): AddProductType => ({
    type: ActionType.ADD_PRODUCT_TYPE,
    payload: type,
  }),
  updatePriceFilter: (priceFilter: {min: number, max: number}): UpdatePriceFilter => ({
    type: ActionType.UPDATE_PRICE_FILTER,
    payload: priceFilter,
  }),
  updateTypeFilter: (types: Array<string>): UpdateTypeFilter => ({
    type: ActionType.UPDATE_TYPE_FILTER,
    payload: types,
  }),
  updateGostFilter: (gosts: Array<string>): UpdateGostFilter => ({
    type: ActionType.UPDATE_GOST_FILTER,
    payload: gosts,
  }),
  addProductToCart: (product: ProductInCart): AddProductToCart => ({
    type: ActionType.ADD_PRODUCT_TO_CART,
    payload: product,
  }),
  removeProductFromCart: (id: number): RemoveProductFromCart => ({
    type: ActionType.REMOVE_PRODUCT_FROM_CART,
    payload: id,
  }),
  changeCountInCart: (productInfo: {id: number, count: number}): ChangeCountInCart => ({
    type: ActionType.CHANGE_COUNT_IN_CART,
    payload: productInfo,
  }),
};