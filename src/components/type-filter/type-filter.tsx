import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { ActionCreator } from "../../store/action";

interface TypeFilterProps {
  types: Array<string>;
}

const TypeFilter = ({types}: TypeFilterProps): JSX.Element => {
  const [isOpen, setOpen] = useState(true);
  const [checkedTypes, setCheckedTypes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => dispatch(ActionCreator.updateTypeFilter(checkedTypes)), 2000);
    return () => clearTimeout(timeoutId);
  }, [checkedTypes]);

  const onCheckboxClick = (evt: React.SyntheticEvent) => {
    const checkbox = evt.target as Element;

    if (checkbox.classList.contains('checked')) {
      const index = checkedTypes.findIndex(el => el === checkbox.textContent);
      const newTypes = checkedTypes.slice();
      newTypes.splice(index, 1);
      setCheckedTypes(newTypes);
    } else {
      setCheckedTypes([...checkedTypes, checkbox.textContent]);
    }
  };

  return (
    <div className="type-filter">
      <div className="type-filter__header">
        <button className={`type-filter__title${isOpen ? ' open' : ''}`} onClick={() => setOpen(!isOpen)}>Тип продукта</button>
      </div>
      {isOpen
        ? <div className="type-filter__main">
          <ul className="type-filter__list">
            {types.map((type, i) => {
              const isChecked = !checkedTypes.length ? false : checkedTypes.includes(type);
              return <li key={i} className="type-filter__item">
                <button className={`type-filter__checkbox${isChecked ? ' checked' : ''}`} onClick={onCheckboxClick}>{type}</button>
              </li>
            })}
          </ul>
        </div>
        : null
      }
    </div>
  );
};

export default TypeFilter;