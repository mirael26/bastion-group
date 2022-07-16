import * as React from "react";

const Header = ():JSX.Element => {
  return (
    <div className="header">
      <div className="header__header">
        <div className="header__header-wrapper">
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <button className="header__nav-button">Типы продуктов</button>
              </li>
              <li className="header__nav-item">
                <button className="header__nav-button">Продукты</button>
              </li>
            </ul>
          </nav>
          <a href="tel:+74993807890" className="header__phone">+7 (499) 380-78-90</a>
          <button className="header__city">Москва</button>
          <a href="mailto:info@bastion.pro" className="header__mail">info@bastion.pro</a>
        </div>
      </div>

      <div className="header__main">
        <div className="header__main-wrapper">
          <div className="header__logo">
            <img className="header__logo-image" src={require('../../img/bastion-group-logo.png')} alt="Логотип Bastion group"/>
            <p className="header__logo-text">Производитель металлических изделий №1</p>
          </div>

          <button className="header__catalog-button button">Каталог</button>

          <div className="header__search">
            <input className="header__search-input" type="text" placeholder="Поиск по названию..."/>
            <button className="header__search-button" />
          </div>

          <button className="header__favorite">Избранное</button>
          <button className="header__cart">Корзина</button>
        </div>
      </div>
    </div>
  );
};

export default Header;