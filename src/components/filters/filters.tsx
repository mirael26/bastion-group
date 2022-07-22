import * as React from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../store/action";

import PriceFilter from "../price-filter/price-filter";
import TypeFilter from "../type-filter/type-filter";

interface FiltersProps {
  priceMin: number,
  priceMax: number,
  types: Array<string>,
}

const Filters = ({priceMin, priceMax, types}: FiltersProps): JSX.Element => {
  const dispatch = useDispatch();

  const clearFilters = () => {
    dispatch(ActionCreator.updatePriceFilter(null));
    dispatch(ActionCreator.updateTypeFilter([]));
  };

  return (
    <div className="filters">
      <div className="filters__header">
        <h3 className="filters__title">Фильтры</h3>
      </div>
      <div className="filters__main">
        <PriceFilter minValue={priceMin} maxValue={priceMax} />
        <TypeFilter types={types} />
      </div>
      <button className="filters__clear-filters" onClick={clearFilters}>Сбросить фильтры</button>
    </div>
  );
};

export default Filters;