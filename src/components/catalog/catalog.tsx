import * as React from "react";

import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import ProductsTable from "../products-table/products-table";

const Catalog = (): JSX.Element => {
  return (
    <div className="catalog">
      <h1 className="visually-hidden">Каталог</h1>
      <div className="catalog__wrapper">
        <div className="catalog__header">
          <div className="catalog__breadcrumbs">
            <Breadcrumbs />
          </div>
          <button className="catalog__back-button"></button>
          <h2 className="catalog__title">Опоры трубопроводов</h2>
          <button className="catalog__sort-button">Сначала популярные</button>

          <div className="catalog__view-controls">
            <button className="catalog__view-button catalog__view-button--cards active">Карточки</button>
            <button className="catalog__view-button catalog__view-button--list">Список</button>
          </div>
        </div>

        <div className="catalog__main">
          <ProductsTable />
        </div>
       
      </div>
    </div>
  );
};

export default Catalog;