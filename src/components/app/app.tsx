import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartPage from "../cart-page/cart-page";
import HomePage from "../home-page/home-page";

const App = ():JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cart' element={<CartPage />} />
      </Routes>
   </BrowserRouter>
  );
};

export default App;