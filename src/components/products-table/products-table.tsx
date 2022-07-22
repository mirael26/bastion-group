import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import Categories from "../categories/categories";
import Filters from "../filters/filters";
import GostFilter from "../gost-filter/gost-filter";
import ProductCards from "../product-cards/product-cards";

const ProductsTable = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.data.products);

  let priceMin = products[0]?.price;
  let priceMax = 0;
  let types: Array<string> = [];
  let gosts: Array<string> = [];

  if (products.length) {
    products.forEach(product => {
      if (product.price < priceMin) {
        priceMin = product.price;
      }
      if (product.price > priceMax) {
        priceMax = product.price;
      }
      types.push(product.type);
      gosts.push(product.gost);
    });

    types = Array.from(new Set(types));
    gosts = Array.from(new Set(gosts));
  }

  return (
    <div className="products-table">
      {!products.length
        ? <p className="products-table__no-products-message">Каталог пуст<br/>Пожалуйста, добавьте товары</p>

        : <>
          <div className="products-table__menu">
            <div className="products-table__categories">
              <Categories />
            </div>
            <div className="products-table__filters">
              <Filters priceMin={priceMin} priceMax={priceMax} types={types} />
            </div>
          </div>

          <div className="products-table__content">
            <GostFilter gosts={gosts} />
            <ProductCards products={products} />
          </div>
        </>
      }      
    </div>
  );
};

export default ProductsTable;