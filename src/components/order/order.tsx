import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { RegExpTest } from "../../consts";
import { ActionCreator } from "../../store/action";
import { ProductsInCart } from "../../types";

const ErrorMessages = {
  NAME_FORMAT_ERROR: "Допускаются только буквы и '",
  PHONE_FORMAT_ERROR: 'Неверный формат',
  EMAIL_FORMAT_ERROR: 'Неверный формат',
  COMPANY_FORMAT_ERROR: 'Неверный формат',
};

interface OrderProps {
  sum: number,
  products: ProductsInCart,
}

const Order = ({sum, products}: OrderProps): JSX.Element => {
  const [inputsValue, setInputsValue] = useState({username: '', phone: '', email: '', company: ''});
  const [errors, setErrors] = useState({username: null, phone: null, email: null, company: null});
  const dispatch = useDispatch();

  const resetInputs = () => {
    setInputsValue({username: '', phone: '', email: '', company: ''});
  };

  const onInputChange = (evt: React.SyntheticEvent) => {
    const input = evt.target as HTMLInputElement;
    setErrors({...errors, [input.name]: null});
    setInputsValue({...inputsValue, [input.name]: input.value});
  };

  const onFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    let isFormValid = true;

    const values = Object.keys(inputsValue) as Array<keyof typeof inputsValue>;

    values.forEach(value => {
      const valueUppercase = value.toUpperCase();

      if (!RegExpTest[valueUppercase as keyof typeof RegExpTest].test(inputsValue[value])) {
        setErrors({...errors, [value]: ErrorMessages[`${valueUppercase}_FORMAT_ERROR` as keyof typeof ErrorMessages]});
        isFormValid = false;
      }
    });

    if (isFormValid) {
      console.log('Перечень товаров', products);
      console.log('Данные о покупателе', inputsValue);
      resetInputs();
      dispatch(ActionCreator.clearCart());
    }
  };

  return (
    <div className="order">
      <h3 className="order__title">Заказ</h3>
      <form className="order__form" action="" onSubmit={onFormSubmit}>
        <h4 className="order__form-title">Контактная информация</h4>

        <div className={`order__input-block order__input-block--user${inputsValue.username ? ' order__input-block--filled' : ''}`}>
          <input className="order__input" type="text" id="order-username" name='username' value={inputsValue.username} required placeholder=" " onChange={onInputChange}/>
          <label className="order__label" htmlFor="order-username">ФИО</label>
          {errors.username ? <p className="order__error-message">{errors.username}</p> : null}
        </div>

        <div className={`order__input-block order__input-block--phone${inputsValue.phone ? ' order__input-block--filled' : ''}`}>
          <input className="order__input" type="text" id="order-phone" name='phone' value={inputsValue.phone} required placeholder=" " onChange={onInputChange}/>
          <label className="order__label" htmlFor="order-phone">Контактный телефон</label>
          {errors.phone ? <p className="order__error-message">{errors.phone}</p> : null}
        </div>

        <div className={`order__input-block order__input-block--email${inputsValue.email ? ' order__input-block--filled' : ''}`}>
          <input className="order__input" type="text" id="order-email" name='email' value={inputsValue.email} required placeholder=" " onChange={onInputChange}/>
          <label className="order__label" htmlFor="order-email">Email</label>
          {errors.email ? <p className="order__error-message">{errors.email}</p> : null}
        </div>

        <div className={`order__input-block order__input-block--company${inputsValue.company ? ' order__input-block--filled' : ''}`}>
          <input className="order__input" type="text" id="order-company" name='company' value={inputsValue.company} required placeholder=" " onChange={onInputChange}/>
          <label className="order__label" htmlFor="order-company">Организация / ИНН</label>
          {errors.company ? <p className="order__error-message">{errors.company}</p> : null}
        </div>

        <div className="order__total">
          <p className="order__total-title">Итого</p>
          <p className="order__total-price">{sum} руб.</p>
        </div>

        <button className="order__submit-button" type='submit'>Оформить заказ</button>
        <button className="order__offer-button">Коммерческое предложение</button>

      </form>
    </div>
  );
};

export default Order;