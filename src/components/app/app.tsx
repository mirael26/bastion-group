import * as React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "../header/header";
import Catalog from "../catalog/catalog";
import Cart from "../cart/cart";
import NewProduct from "../new-product/new-product";
import NewProductType from "../new-product-type/new-product-type";
import Footer from "../footer/footer";

const App = ():JSX.Element => {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <div className="app__main">

        <Routes>
          <Route path='/' element={<Navigate replace to='/catalog' />}/>
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/new-product' element={<NewProduct />} />
          <Route path='/new-product-type' element={<NewProductType />} />
        </Routes>
        
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;