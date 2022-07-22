import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { Products } from "../../types";

import ProductCard from "../product-card/product-card";

interface ProductCardsProps {
  products: Products,
}

const ProductCards = ({products}: ProductCardsProps): JSX.Element => {
  const priceFilter = useSelector((state: RootState) => state.filter.priceFilter);
  const typeFilter = useSelector((state: RootState) => state.filter.typeFilter);
  const gostFilter = useSelector((state: RootState) => state.filter.gostFilter);

  const filterProducts = (products: Products) => {
    if (!priceFilter && !typeFilter.length && !gostFilter.length) {
      return products;
    }

    return products.filter(product => {
      if (priceFilter && (product.price < priceFilter.min || product.price > priceFilter.max)) {
        return false;
      }

      if (typeFilter.length && !typeFilter.includes(product.type)) {
        return false;
      }

      if (gostFilter.length && !gostFilter.includes(product.gost)) {
        return false;
      }
      return true;
    });
  };

  return (
    <div className="product-cards">
      {filterProducts(products).map((product, i) => <ProductCard key={i} product={product} />)}
    </div>
  );
};

export default ProductCards;