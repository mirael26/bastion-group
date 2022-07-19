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

          <div className="catalog__controls">
            <div className="catalog__view-count">
              <p className="catalog__view-count-text">Выводить по</p>
              <button className="catalog__view-count-button active">9</button>
              <button className="catalog__view-count-button">15</button>
              <button className="catalog__view-count-button">21</button>
            </div>

            <div className="catalog__page-slider">
              <button className="catalog__page-slider-button catalog__page-slider-button--prev"></button>
              <button className="catalog__page-slider-button active">1</button>
              <button className="catalog__page-slider-button">2</button>
              <button className="catalog__page-slider-button">3</button>
              <button className="catalog__page-slider-button">4</button>
              <button className="catalog__page-slider-button">5</button>
              <button className="catalog__page-slider-button catalog__page-slider-button--next"></button>
            </div>

            <button className="catalog__showall-button">Показать все товары</button>
          </div>
        </div>
        
        <div className="catalog__description">
          <h3 className="catalog__description-title">
            Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1
          </h3>
          <p className="catalog__description-text">
            Надежность работы трубопровода в значительной мере зависит от правильности и прочности его крепления. Основные средства крепления трубопроводов — это опора, подвеска, кронштейны, скобы и другие части опорных конструкций.<br/>
            Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным существующим нормативным документам, а также изготовим любые нестандартные опоры трубопроводов по чертежам заказчика.
          </p>
          <p className="catalog__description-text">
            Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку горизонтальных и вертикальных участков трубопровода. Основным материалом деталей является сталь 17гс-12, 17г1с-12, 14г2-12, 09г2с-14, 20, 20к и пр.
          </p>
          <p className="catalog__description-text">
            Марка стали выбирается исходя от параметров окружающей среды, опоры могут использоваться при температуре от -60°C.<br/>
            Конструкции опор, представленные на сайте, отличаются между собой методом крепления с трубопроводом и несущей способностью.
          </p>
          <p className="catalog__description-text">
            Подвески являются сборными устройствами, соединяются при помощи сварки. Сварные швы отвечают требованиям СНиП III-18-75, СНиП II-23-81. Резьбовые части опор обрабатываются антикоррозионной смазкой ПВК по ГОСТ 19537-83 или ее аналогом.
          </p>
          <button className="catalog__description-hide-button">Скрыть описание</button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;