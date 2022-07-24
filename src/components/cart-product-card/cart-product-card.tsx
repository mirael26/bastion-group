import * as React from "react";
import { useDispatch } from "react-redux";

import { ActionCreator } from "../../store/action";
import { ProductInCart } from "../../types";

interface CartProductCardProps {
  product: ProductInCart;
}

const CartProductCard = ({product}: CartProductCardProps): JSX.Element => {
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(ActionCreator.changeCountInCart({id: product.id, count: product.count + 1}));  
  };

  const decrementCount = () => {
    if (product.count === 1) {
      dispatch(ActionCreator.removeProductFromCart(product.id));
    } else {
      dispatch(ActionCreator.changeCountInCart({id: product.id, count: product.count - 1}));
    }
  };

  const deleteProduct = () => {
    dispatch(ActionCreator.removeProductFromCart(product.id));
  }

  const sum = product.count * product.price;

  return (
    <div className="cart-product-card">
      <div className="cart-product-card__image-wrapper">
        <img className="cart-product-card__image" src={product.image} alt="Изображение товара" />
      </div>

      <div className="cart-product-card__info">
        <div className="cart-product-card__gost">{product.gost}</div>
        <h5 className="cart-product-card__title">{product.title}</h5>
        <p className="cart-product-card__price">{product.price} руб.</p>
      </div>

      <div className="cart-product-card__edit-count-block">
        <button className="cart-product-card__increment-button" onClick={incrementCount}>+</button>
        <div className="cart-product-card__count">{product.count}</div>
        <button className="cart-product-card__decrement-button" onClick={decrementCount}>-</button>
      </div>

      <p className="cart-product-card__sum">{sum} руб.</p>
      <button className="cart-product-card__delete-button" onClick={deleteProduct}>Удалить</button>
    </div>
  );
};

export default CartProductCard;