import * as React from "react";

import Categories from "../categories/categories";
import Filters from "../filters/filters";

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
        
      </div>
    </div>
  );
};

export default ProductsTable;