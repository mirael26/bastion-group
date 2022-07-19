import * as React from "react";

import Categories from "../categories/categories";
import Filters from "../filters/filters";
import GostFilter from "../gost-filter/gost-filter";
import ProductCards from "../product-cards/product-cards";

const ProductsTable = (): JSX.Element => {
  return (
    <div className="products-table">
      <div className="products-table__menu">
        <div className="products-table__categories">
          <Categories />
        </div>
        <div className="products-table__filters">
          <Filters />
        </div>
      </div>

      <div className="products-table__content">
        <GostFilter />
        <ProductCards />
      </div>
    </div>
  );
};

export default ProductsTable;