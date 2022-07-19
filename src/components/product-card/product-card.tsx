import * as React from "react";

import { Product } from "../../types";

interface ProductCardProps {
  product: Product,
}

const ProductCard = ({product}: ProductCardProps): JSX.Element => {
  return (
    <div className="product-card">
      <div className="product-card__tags">
        <div className="product-card__tag product-card__tag--hit">Хит</div>
        <div className="product-card__tag product-card__tag--discount">Скидка</div>
        <div className="product-card__tag product-card__tag--promotion">Акция</div>
      </div>

      <div className="product-card__image-wrapper">
        <img className="product-card__image" src={require(`../../img/${product.image}`)} alt="Изображение товара" />
      </div>

      <div className="product-card__gost">{product.gost}</div>
      <h5 className="product-card__title">{product.title}</h5>
      <p className="product-card__price">{product.price} руб.</p>
      
    </div>
  );
};

export default ProductCard;