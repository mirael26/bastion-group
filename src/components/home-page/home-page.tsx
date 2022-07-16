import * as React from "react";
import Footer from "../footer/footer";

import Header from "../header/header";

const HomePage = ():JSX.Element => {
  return (
    <>
      <h1 className="visually-hidden">Главная</h1>
      <Header />
      <Footer />
    </>
  );
};

export default HomePage;