import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../../store/action";
import { RootState } from "../../store/store";

import { Product } from "../../types";

interface ProductCardProps {
  product: Product,
}

const ProductCard = ({product}: ProductCardProps): JSX.Element => {
  const productsInCart = useSelector((state: RootState) => state.cart.productsInCart);
  const dispatch = useDispatch();

  const incrementCount = () => {
    if (!count) {
      dispatch(ActionCreator.addProductToCart({...product, count: 1}));
    } else {
      dispatch(ActionCreator.changeCountInCart({id: product.id, count: ++count}));
    }
  };

  const decrementCount = () => {
    if (count === 1) {
      dispatch(ActionCreator.removeProductFromCart(product.id));
    } else {
      dispatch(ActionCreator.changeCountInCart({id: product.id, count: --count}));
    }
  };

  const getCount = () => {
    const index = productsInCart.findIndex(el => el.id === product.id);
    if (index >= 0) {
      return productsInCart[index].count;
    }
    return null;
  };

  let count = getCount();

  return (
    <div className="product-card">
      <div className="product-card__wrapper">
        <div className="product-card__tags">
          {product.hit ? <div className="product-card__tag product-card__tag--hit">Хит</div> : null}
          {product.discount ? <div className="product-card__tag product-card__tag--discount">Скидка</div> : null}
          {product.promotion ? <div className="product-card__tag product-card__tag--promotion">Акция</div> : null}
        </div>

        <button className="product-cart__favorite-button">В избранное</button>

        <div className="product-card__image-wrapper">
          <img className="product-card__image" src={product.image} alt="Изображение товара" />
        </div>

        <div className="product-card__gost">{product.gost}</div>
        <h5 className="product-card__title">{product.title}</h5>

        <div className="product-card__purchase-block">
          <p className="product-card__price">{product.price} руб.</p>

          <div className="product-card__add-block">
            <button className="product-card__increment-button" onClick={incrementCount}>+</button>
            <div className="product-card__added-count">{count ?? 0}</div>
            <button className="product-card__decrement-button" disabled={!count} onClick={decrementCount}>-</button>
          </div>
        </div>

        <button className="product-card__add-button" onClick={incrementCount}>В корзину</button>
        <button className="product-card__details-button">Подробнее</button>
      </div>
    </div>
  );
};

export default ProductCard;