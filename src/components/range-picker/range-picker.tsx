import * as React from "react";

interface RangePickerProps {
  minValue: number,
  maxValue: number,
  currentMinValue: number,
  currentMaxValue: number,
}

const RangePicker = ({minValue, maxValue, currentMinValue, currentMaxValue}: RangePickerProps): JSX.Element => {




  return (
    <div className="range-picker">
      <div className="range-picker__min-point"></div>
      <div className="range-picker__max-point"></div>

      <div className="range-picker__scale">
        <div className="range-picker__scale-highlight"></div>

      </div>
      <div className="range-picker__scale-stripes">
        <div className="range-picker__scale-stripe"></div>
        <div className="range-picker__scale-stripe"></div>
        <div className="range-picker__scale-stripe"></div>
        <div className="range-picker__scale-stripe"></div>
        <div className="range-picker__scale-stripe"></div>
        <div className="range-picker__scale-stripe"></div>
        <div className="range-picker__scale-stripe"></div>
      </div>
    </div>
  );
};

export default RangePicker;