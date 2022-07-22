import * as React from "react";

import PriceFilter from "../price-filter/price-filter";
import TypeFilter from "../type-filter/type-filter";

interface FiltersProps {
  priceMin: number,
  priceMax: number,
  types: Array<string>,
}

const Filters = ({priceMin, priceMax, types}: FiltersProps): JSX.Element => {
  return (
    <div className="filters">
      <div className="filters__header">
        <h3 className="filters__title">Фильтры</h3>
      </div>
      <div className="filters__main">
        <PriceFilter minValue={priceMin} maxValue={priceMax} />
        <TypeFilter types={types} />
      </div>
    </div>
  );
};

export default Filters;