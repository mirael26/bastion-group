import * as React from "react";

import PriceFilter from "../price-filter/price-filter";
import TypeFilter from "../type-filter/type-filter";

const Filters = (): JSX.Element => {
  return (
    <div className="filters">
      <div className="filters__header">
        <h3 className="filters__title">Фильтры</h3>
      </div>
      <div className="filters__main">
        <PriceFilter minValue={104} maxValue={9990} />
        <TypeFilter />
      </div>
    </div>
  );
};

export default Filters;