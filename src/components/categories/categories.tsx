import * as React from "react";

const Categories = (): JSX.Element => {
  return (
    <div className="categories">
      <div className="categories__header">
        <h3 className="categories__title">Категории</h3>
      </div>
      <div className="categories__main">
        <ul className="categories__list">
          <li className="categories__item">
            <p className="categories__category-series">Серия 5.904-1 выпуск 1:</p>
            <p className="categories__category-title">Детали крепления воздуховодов <span className="categories__category-amount">95</span></p>
          </li>

          <li className="categories__item">
            <p className="categories__category-series">Серия 4.903-10 Выпуск 4,5,6:</p>
            <p className="categories__category-title">Изделия и детали трубопроводов для тепловых сетей <span className="categories__category-amount">15</span></p>
          </li>

          <li className="categories__item">
            <p className="categories__category-series">Серия 4.900-9 Выпуск 1:</p>
            <p className="categories__category-title">Узлы и детали трубопроводов из пластмассовых труб для систем водоснабжения и канализации <span className="categories__category-amount">247</span></p>
          </li>

          <li className="categories__item">
            <p className="categories__category-series">Серия 3.900-9: </p>
            <p className="categories__category-title">Опорные конструкции и средства крепления трубопроводов <span className="categories__category-amount">2</span></p>
          </li>

          <li className="categories__item">
            <p className="categories__category-series">Л8-508.000 - Л8-524.000: </p>
            <p className="categories__category-title">Опоры и подвески трубопроводов Дн&lt;89мм <span className="categories__category-amount">15</span></p>
          </li>

          <li className="categories__item">
            <p className="categories__category-series">Л8-138.000 - Л8-200.000: </p>
            <p className="categories__category-title">Опоры и подвески станционных трубопроводов <span className="categories__category-amount">247</span></p>
          </li>
          
        </ul>
        <button className="categories__show-all-button">Показать все</button>
      </div>
    </div>
  );
};

export default Categories;