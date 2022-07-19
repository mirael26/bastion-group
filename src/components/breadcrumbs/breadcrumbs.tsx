import * as React from "react";

const Breadcrumbs = (): JSX.Element => {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="#" className="breadcrumbs__link">Главная</a>
        </li>
        <li className="breadcrumbs__item">
          <a href="#" className="breadcrumbs__link">Интернет магазин</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Опоры трубопроводов</a>
        </li>
      </ul>
      
    </div>
  );
};

export default Breadcrumbs;