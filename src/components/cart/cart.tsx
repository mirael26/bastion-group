import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../../store/action";

import { RootState } from "../../store/store";

import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import CartProductCard from "../cart-product-card/cart-product-card";
import Order from "../order/order";

const Cart = (): JSX.Element => {
  const productsInCart = useSelector((state: RootState) => state.cart.productsInCart);
  const dispatch = useDispatch();


  const sum = productsInCart.reduce((accumulator, product) => accumulator + product.count * product.price, 0);

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__breadcrumbs"><Breadcrumbs/></div>
        <h1 className="cart__title">Корзина</h1>
        <div className="cart__table">

          {!productsInCart.length
            ? <p className="cart__no-products-message">Корзина пуста</p>
            : <>
              <div className="cart__products">
              {productsInCart.map((product, i) => {
                return <div key={i} className="cart__product-card">
                  <CartProductCard product={product}/>
                </div>
              })}
              
              <button className="cart__clear-cart-button" onClick={() => dispatch(ActionCreator.clearCart())}>Очистить корзину</button>
            </div>
            <Order sum={sum} products={productsInCart}/>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;