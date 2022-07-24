import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";

const CartButton = (): JSX.Element => {
  const productsInCart = useSelector((state: RootState) => state.cart.productsInCart);

  const productsCount = productsInCart.reduce((accumulator, product) => {
    return accumulator + product.count;
  }, 0); 

  return (
    <div className="cart-button">
      <Link to='/cart'>
        <div className="cart-button__icon">Корзина
          {productsCount ? <div className="cart-button__count">{productsCount}</div> : null}
        </div>
      </Link>
    </div>
  );
};

export default CartButton;