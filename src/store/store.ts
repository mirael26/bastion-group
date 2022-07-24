import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './reducers/cart-reducer';
import { dataReducer } from './reducers/data-reducer';
import { filterReducer } from './reducers/filter-reducer';

const saveToLocalStorage = (state: RootState) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const store = configureStore({
  reducer: {data: dataReducer, cart: cartReducer, filter: filterReducer},
  preloadedState: loadFromLocalStorage(),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;