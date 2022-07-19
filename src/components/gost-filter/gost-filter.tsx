import * as React from "react";

const GostFilter = (): JSX.Element => {
  return (
    <div className="gost-filter">
      <button className="gost-filter__button active">ГОСТ 14911-82</button>
      <button className="gost-filter__button">ГОСТ 1491</button>
    </div>
  );
};

export default GostFilter;