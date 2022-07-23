import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionCreator } from "../../store/action";
import { RootState } from "../../store/store";
import { RegExpTest } from "../consts";

const ErrorMessages = {
  ID_EXIST: 'Такой ID уже существует',
  ID_FORMAT_ERROR: 'ID должен состоять из цифр',
  TYPE_EXIST: 'Такой тип товара уже существует',
  TYPE_FORMAT_ERROR: 'Недопустимый формат. В названии допускаются только буквы русского и латинского алфавита, цифры и знаки -/()., ',
};

const NewProductType = (): JSX.Element => {
  const [idValue, setIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [idError, setIdError] = useState(null);
  const [nameError, setNameError] = useState(null);

  const existTypes = useSelector((state: RootState) => state.data.productTypes);
  const dispatch = useDispatch();

  const validateId = () => {
    if (!RegExpTest.ID.test(idValue)) {
      setIdError(ErrorMessages.ID_FORMAT_ERROR);
      return false;
    }

    if (existTypes.some(type => type.id === +idValue)) {
      setIdError(ErrorMessages.ID_EXIST);
      return false;
    }
    return true;
  };

  const validateName = () => {
    if (!RegExpTest.TYPE_NAME.test(nameValue)) {
      setNameError(ErrorMessages.TYPE_FORMAT_ERROR);
      return false;
    }

    if (existTypes.some(type => type.name === nameValue)) {
      setNameError(ErrorMessages.TYPE_EXIST);
      return false;
    }
    return true;
  };

  const resetInputs = () => {
    setIdValue('');
    setNameValue('');
  };

  const onIdInputChange = (evt: React.SyntheticEvent) => {
    setIdError(null);
    setIdValue((evt.target as HTMLInputElement).value);
  };

  const onNameInputChange = (evt: React.SyntheticEvent) => {
    setNameError(null);
    setNameValue((evt.target as HTMLInputElement).value);
  };

  const onFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    const isIdValid = validateId();
    const isNameValid = validateName();
    
    if (isIdValid && isNameValid) {
      console.log('Проверка пройдена')
      dispatch(ActionCreator.addProductType({id: +idValue, name: nameValue}));
      resetInputs();
    }
  };

  return (
    <div className="new-product-type">
      <div className="new-product-type__wrapper">
        <form className="new-product-type__form" onSubmit={onFormSubmit}>
        <h2 className="new-product-type__title">Добавить новый тип товара</h2>
          <input className="new-product-type__input" type="text" required={true} value={idValue} placeholder="ID типа" onChange={onIdInputChange}/>
          {idError ? <p className="new-product-type__error-message">{idError}</p> : null}

          <input className="new-product-type__input" type="text" required={true} value={nameValue} placeholder="Название типа" onChange={onNameInputChange}/>
          {nameError ? <p className="new-product-type__error-message">{nameError}</p> : null}

          <button className="new-product-type__submit-button" type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default NewProductType;