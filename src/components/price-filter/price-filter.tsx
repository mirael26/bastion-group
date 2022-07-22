import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionCreator } from "../../store/action";
import { RootState } from "../../store/store";

import RangePicker from "../range-picker/range-picker";

interface PriceFilterProps {
  minValue: number,
  maxValue: number,
}

const PriceFilter = ({minValue, maxValue}: PriceFilterProps): JSX.Element => {
  const [isOpen, setOpen] = useState(true);
  const [currentMinValue, setCurrentMinValue] = useState(minValue);
  const [currentMaxValue, setCurrentMaxValue] = useState(maxValue);
  const [temporaryMinValue, setTemporaryMinValue] = useState(null);
  const [temporaryMaxValue, setTemporaryMaxValue] = useState(null);

  const priceFilter = useSelector((state: RootState) => state.filter.priceFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => setPriceFilter(), 2000);
    return () => clearTimeout(timeoutId);
  }, [currentMinValue, currentMaxValue]);

  useEffect(() => {
    if (priceFilter === null) {
      setCurrentMinValue(minValue);
      setCurrentMaxValue(maxValue);
    }
  }, [priceFilter]);

  const onInputChange = (evt: React.SyntheticEvent) => {
    const input = evt.target as HTMLInputElement;

    if (input.name === 'min-price-input') {
      setTemporaryMinValue(+input.value);
    }

    if (input.name === 'max-price-input') {
      setTemporaryMaxValue(+input.value);
    }

    const onInputBlur = () => {

      if (input.name === 'min-price-input') {
        if (+input.value <= minValue) {
          setCurrentMinValue(minValue);
          setTemporaryMinValue(null);
          return;
        }
        if (+input.value > currentMaxValue) {
          setCurrentMinValue(currentMaxValue);
          setTemporaryMinValue(null);
          return;
        }
        setCurrentMinValue(+input.value);
        setTemporaryMinValue(null);
      }

      if (input.name === 'max-price-input') {
        if (+input.value >= maxValue) {
          setCurrentMaxValue(maxValue);
          setTemporaryMaxValue(null);
          return;
        }
        if (+input.value < currentMinValue) {
          setCurrentMaxValue(currentMinValue);
          setTemporaryMaxValue(null);
          return;
        }
        setCurrentMaxValue(+input.value);
      }
      
      input.removeEventListener('blur', onInputBlur);
      input.removeEventListener('keydown', onInputEnter);
      input.blur();
    }

    const onInputEnter = (evt: KeyboardEvent) => {
      if (evt.key === "Enter") {
        onInputBlur();
        input.blur();
      }
    }

    input.addEventListener('blur', onInputBlur);    
    input.addEventListener('keydown', onInputEnter);
  };

  const setPriceFilter = () => {
    if (currentMinValue === minValue && currentMaxValue === maxValue) {
      dispatch(ActionCreator.updatePriceFilter(null));
      return;
    }
    dispatch(ActionCreator.updatePriceFilter({min: currentMinValue, max: currentMaxValue}));
  };

  return (
    <div className="price-filter">
      <div className="price-filter__header">
        <button className={`price-filter__title${isOpen ? ' open' : ''}`} onClick={() => setOpen(!isOpen)}>Цена, руб.</button>
      </div>
      {isOpen
        ? <div className="price-filter__main">
          <div className="price-filter__inputs-block">
            <div className="price-filter__input-wrapper price-filter__input-wrapper--from">
              <input className="price-filter__input" type="number" name="min-price-input" value={temporaryMinValue ?? currentMinValue} onChange={onInputChange}/>
            </div>
            <div className="price-filter__input-wrapper price-filter__input-wrapper--to">
              <input className="price-filter__input" type="number" name="max-price-input" value={temporaryMaxValue ?? currentMaxValue} onChange={onInputChange}/>
            </div>
          </div>
          <div className="price-filter__range-picker">
            <RangePicker
              minValue={minValue}
              maxValue={maxValue}
              currentMinValue={currentMinValue}
              currentMaxValue={currentMaxValue}
              setCurrentMinValue={setCurrentMinValue}
              setCurrentMaxValue={setCurrentMaxValue}/>
          </div>
        </div>
        : null
      }
    </div>
  );
};

export default PriceFilter;