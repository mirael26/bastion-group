import * as React from "react";

import { productsMocks } from "../../mocks";

import ProductCard from "../product-card/product-card";

const ProductCards = (): JSX.Element => {
  return (
    <div className="product-cards">
      {productsMocks.map((product, i) => <ProductCard key={i} product={product} />)}
    </div>
  );
};

export default ProductCards;