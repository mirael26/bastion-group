import * as React from "react";
import { useRef, useEffect } from "react";

interface RangePickerProps {
  minValue: number,
  maxValue: number,
  currentMinValue: number,
  currentMaxValue: number,
  setCurrentMinValue: (newMinValue: number) => void,
  setCurrentMaxValue: (newMaxValue: number) => void,
}

const RangePicker = (props: RangePickerProps): JSX.Element => {
  const {
    minValue,
    maxValue,
    currentMinValue,
    currentMaxValue,
    setCurrentMinValue,
    setCurrentMaxValue,
  } = props;

  const scale = useRef(null);
  const highlight = useRef(null);
  const minPoint = useRef(null);
  const maxPoint = useRef(null);

  useEffect(() => {
    const total = scale.current.clientWidth - minPoint.current.clientWidth;
    const minPosition = (currentMinValue / (maxValue - minValue)) * total;
    const maxPosition = (currentMaxValue / (maxValue - minValue)) * total;
    minPoint.current.style.left = `${minPosition}px`;
    maxPoint.current.style.left = `${maxPosition}px`;
    highlight.current.style.left = `${minPosition}px`;
    highlight.current.style.width = `${maxPosition - minPosition}px`;
  }, [currentMinValue, currentMaxValue]);

  const onMouseDown = (downEvt: React.MouseEvent, point: React.RefObject<HTMLDivElement>) => {
    downEvt.preventDefault();
    const pointWidth = minPoint.current.clientWidth;
    const startCoords = downEvt.clientX;

    const onMouseMove = (moveEvt: MouseEvent) => {
      moveEvt.preventDefault();
      const total = scale.current.clientWidth - minPoint.current.clientWidth;
      let shift = startCoords - moveEvt.clientX;

      if (point === minPoint) {
        const minLimit = scale.current.getBoundingClientRect().x;
        const maxLimit = maxPoint.current.getBoundingClientRect().x - pointWidth;

        if (moveEvt.clientX < minLimit) {
          setCurrentMinValue(minValue);
          return;
        }

        if (moveEvt.clientX > maxLimit) {
          shift = startCoords - maxLimit;
        }

        setCurrentMinValue(currentMinValue - Math.round((shift / total ) * (maxValue - minValue)));
      }

      if (point === maxPoint) {
        const minLimit = minPoint.current.getBoundingClientRect().x + pointWidth * 2;
        const maxLimit = scale.current.getBoundingClientRect().x + scale.current.clientWidth;

        if (moveEvt.clientX > maxLimit) {
          setCurrentMaxValue(maxValue);
          return;
        }

        if (moveEvt.clientX < minLimit) {
          shift = startCoords - minLimit;
        }

        setCurrentMaxValue(currentMaxValue - Math.round((shift / total ) * (maxValue - minValue)));
      }
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className="range-picker">
      <div className="range-picker__min-point" ref={minPoint} onMouseDown={(evt) => onMouseDown(evt, minPoint)}></div>
      <div className="range-picker__max-point" ref={maxPoint} onMouseDown={(evt) => onMouseDown(evt, maxPoint)}></div>

      <div className="range-picker__scale" ref={scale}>
        <div className="range-picker__scale-highlight" ref={highlight}></div>
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