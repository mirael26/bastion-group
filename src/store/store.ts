import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './reducers/cart-reducer';
import { dataReducer } from './reducers/data-reducer';
import { filterReducer } from './reducers/filter-reducer';


const store = configureStore({
  reducer: {data: dataReducer, cart: cartReducer, filter: filterReducer},
  devTools: true,
});

export default store;