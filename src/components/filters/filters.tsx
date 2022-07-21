import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import PriceFilter from "../price-filter/price-filter";
import TypeFilter from "../type-filter/type-filter";

const Filters = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.data.products);
  
  let priceMin = products[0].price;
  let priceMax = 0;
  const types: Array<string> = [];
  products.forEach(product => {
    if (product.price < priceMin) {
      priceMin = product.price;
    }
    if (product.price > priceMax) {
      priceMax = product.price;
    }
    types.push(product.type);
  });

  const uniqueTypes = Array.from(new Set(types));

  return (
    <div className="filters">
      <div className="filters__header">
        <h3 className="filters__title">Фильтры</h3>
      </div>
      <div className="filters__main">
        <PriceFilter minValue={priceMin} maxValue={priceMax} />
        <TypeFilter types={uniqueTypes} />
      </div>
    </div>
  );
};

export default Filters;