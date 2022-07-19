import * as React from "react";
import { useState } from "react";

const TypeFilter = (): JSX.Element => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="type-filter">
      <div className="type-filter__header">
        <button className={`type-filter__title${isOpen ? ' open' : ''}`} onClick={() => setOpen(!isOpen)}>Тип продукта</button>
      </div>
      {isOpen
        ? <div className="type-filter__main">
          <ul className="type-filter__list">
            <li className="type-filter__item">
              <button className="type-filter__checkbox checked">Узлы трубопроводов</button>
            </li>
            <li className="type-filter__item">
              <button className="type-filter__checkbox">Детали крепления</button>
            </li>
          </ul>
        </div>
        : null
      }
    </div>
  );
};

export default TypeFilter;