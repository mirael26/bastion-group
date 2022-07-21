import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import Categories from "../categories/categories";
import Filters from "../filters/filters";
import GostFilter from "../gost-filter/gost-filter";
import ProductCards from "../product-cards/product-cards";

const ProductsTable = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.data.products);

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
              <Filters />
            </div>
          </div>

          <div className="products-table__content">
            <GostFilter />
            <ProductCards products={products} />
          </div>
        </>
      }      
    </div>
  );
};

export default ProductsTable;