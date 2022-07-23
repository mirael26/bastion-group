import * as React from "react";

import { Product } from "../../types";

interface ProductCardProps {
  product: Product,
}

const ProductCard = ({product}: ProductCardProps): JSX.Element => {
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
            <button className="product-card__increment-button">+</button>
            <div className="product-card__added-count">3</div>
            <button className="product-card__decrement-button">-</button>
          </div>
        </div>

        <button className="product-card__add-button">В корзину</button>
        <button className="product-card__details-button">Подробнее</button>
      </div>
    </div>
  );
};

export default ProductCard;