import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { ActionCreator } from "../../store/action";

interface GostFilterProps {
  gosts: Array<string>,
}

const GostFilter = ({gosts}: GostFilterProps): JSX.Element => {
  const [activeGosts, setActiveGosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => dispatch(ActionCreator.updateGostFilter(activeGosts)), 2000);
    return () => clearTimeout(timeoutId);
  }, [activeGosts]);

  const onButtonClick = (evt: React.SyntheticEvent) => {
    const button = evt.target as Element;

    if (button.classList.contains('active')) {
      const index = activeGosts.findIndex(el => el === button.textContent);
      const newGosts = activeGosts.slice();
      newGosts.splice(index, 1);
      setActiveGosts(newGosts);
    } else {
      setActiveGosts([...activeGosts, button.textContent]);
    }
  };

  return (
    <div className="gost-filter">
      {gosts.map((gost, i) => {
        const isActive = !activeGosts.length ? false : activeGosts.includes(gost);
        return <button key={i} className={`gost-filter__button${isActive ? ' active' : ''}`} onClick={onButtonClick}>{gost}</button>
      })}
    </div>
  );
};

export default GostFilter;