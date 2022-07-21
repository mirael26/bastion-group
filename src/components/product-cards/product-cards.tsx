import * as React from "react";

import { Products } from "../../types";

import ProductCard from "../product-card/product-card";

interface ProductCardsProps {
  products: Products,
}

const ProductCards = ({products}: ProductCardsProps): JSX.Element => {
  return (
    <div className="product-cards">
      {products.map((product, i) => <ProductCard key={i} product={product} />)}
    </div>
  );
};

export default ProductCards;