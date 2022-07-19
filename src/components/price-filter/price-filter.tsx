import * as React from "react";
import { useState } from "react";

import RangePicker from "../range-picker/range-picker";

interface PriceFilterProps {
  minValue: number,
  maxValue: number,
}

const PriceFilter = ({minValue, maxValue}: PriceFilterProps): JSX.Element => {
  const [isOpen, setOpen] = useState(true);
  const [currentMinValue, setCurrentMinValue] = useState(null);
  const [currentMaxValue, setCurrentMaxValue] = useState(null);

  return (
    <div className="price-filter">
      <div className="price-filter__header">
        <button className={`price-filter__title${isOpen ? ' open' : ''}`} onClick={() => setOpen(!isOpen)}>Цена, руб.</button>
      </div>
      {isOpen
        ? <div className="price-filter__main">
          <div className="price-filter__inputs-block">
            <div className="price-filter__input-wrapper price-filter__input-wrapper--from">
              <input className="price-filter__input" type="text" value={currentMinValue ?? minValue}/>
            </div>
            <div className="price-filter__input-wrapper price-filter__input-wrapper--to">
              <input className="price-filter__input" type="text" value={currentMaxValue ?? maxValue}/>
            </div>
          </div>
          <div className="price-filter__range-picker">
            <RangePicker
              minValue={minValue}
              maxValue={maxValue}
              currentMinValue={currentMinValue}
              currentMaxValue={currentMaxValue}/>
          </div>
        </div>
        : null
      }
    </div>
  );
};

export default PriceFilter;