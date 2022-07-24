import * as React from "react";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionCreator } from "../../store/action";
import { RootState } from "../../store/store";
import { RegExpTest } from "../../consts";

const ErrorMessages = {
  ID_EXIST: 'Такой ID уже существует',
  ID_FORMAT_ERROR: 'ID должен состоять из цифр',
  TITLE_FORMAT_ERROR: 'Недопустимый формат. В названии допускаются только буквы русского и латинского алфавита, цифры и знаки -/()., ',
  PRICE_FORMAT_ERROR: 'Недопустимый формат. Цена должна быть положительным числом и содержать только цифры и . ',
  GOST_FORMAT_ERROR: 'Недопустимый формат. ГОСТ должен содержать только буквы русского и латинского алфавита, цифры и знаки .-/ ',
};

const NewProduct = (): JSX.Element => {
  const [inputsValue, setInputsValue] = useState({id: '', type: '', title: '', price: '', gost: '', image: ''});
  const [errors, setErrors] = useState({id: null, type: null, title: null, price: null, gost: null, image: null});
  const imageInput = useRef(null);

  const productTypes = useSelector((state: RootState) => state.data.productTypes);
  const products = useSelector((state: RootState) => state.data.products);
  const dispatch = useDispatch();

  const validateId = () => {
    if (!RegExpTest.ID.test(inputsValue.id)) {
      setErrors({...errors, id: ErrorMessages.ID_FORMAT_ERROR});
      return false;
    }

    if (products.some(product => product.id === +inputsValue.id)) {
      setErrors({...errors, id: ErrorMessages.ID_EXIST});
      return false;
    }
    return true;
  };

  const resetInputs = () => {
    setInputsValue({id: '', type: '', title: '', price: '', gost: '', image: ''});
    imageInput.current.value = '';
  };

  const onInputChange = (evt: React.SyntheticEvent, input: string) => {
    if (input === 'image') {
      const file = (evt.target as HTMLInputElement).files[0];
      const imageUrl = URL.createObjectURL(file);
      setInputsValue({...inputsValue, [input]: imageUrl});
      return;
    }
    
    setErrors({...errors, [input]: null});
    setInputsValue({...inputsValue, [input]: (evt.target as HTMLInputElement).value});
  };

  const onFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    let isFormValid = true;

    const isIdValid = validateId();

    if (!RegExpTest.PRODUCT_TITLE.test(inputsValue.title)) {
      setErrors({...errors, title: ErrorMessages.TITLE_FORMAT_ERROR});
      isFormValid = false;
    }

    if (!RegExpTest.PRODUCT_PRICE.test(inputsValue.price)) {
      setErrors({...errors, price: ErrorMessages.PRICE_FORMAT_ERROR});
      isFormValid = false;
    }

    if (!RegExpTest.PRODUCT_GOST.test(inputsValue.gost)) {
      setErrors({...errors, gost: ErrorMessages.GOST_FORMAT_ERROR});
      isFormValid = false;
    }
    
    if (isIdValid && isFormValid) {
      dispatch(ActionCreator.addProduct({
        id: +inputsValue.id,
        type: inputsValue.type,
        title: inputsValue.title,
        price: +inputsValue.price,
        gost: inputsValue.gost,
        image: inputsValue.image,
        hit: /о/i.test(inputsValue.title),
        promotion: /а/i.test(inputsValue.title),
      }));
      resetInputs();
    }
  };

  return (
    <div className="new-product">
      <div className="new-product__wrapper">
        {}

        <form className="new-product__form" onSubmit={onFormSubmit}>

          {!productTypes.length
            ? <p className="new-product__no-types-message">Пожалуйста, сначала добавьте типы товаров</p>
            : <>
              <h2 className="new-product__title">Добавить новый товар</h2>
              <input className="new-product__input" type="text" required value={inputsValue.id} placeholder="ID товара" onChange={(evt) => onInputChange(evt, 'id')}/>
              {errors.id ? <p className="new-product__error-message">{errors.id}</p> : null}

              <input className="new-product__input" type="text" required value={inputsValue.title} placeholder="Название" onChange={(evt) => onInputChange(evt, 'title')}/>
              {errors.title ? <p className="new-product__error-message">{errors.title}</p> : null}

              <select className="new-product__input" value={inputsValue.type} required onChange={(evt) => onInputChange(evt, 'type')} >
                <option value=''>Выберите тип товара</option>
                {productTypes.map((type, i) => <option key={i} value={type.name}>{type.name}</option>)}
              </select>

              <input className="new-product__input" type="text" required value={inputsValue.price} placeholder="Цена товара" onChange={(evt) => onInputChange(evt, 'price')}/>
              {errors.price ? <p className="new-product__error-message">{errors.price}</p> : null}

              <input className="new-product__input" type="text" required value={inputsValue.gost} placeholder="ГОСТ" onChange={(evt) => onInputChange(evt, 'gost')}/>
              {errors.gost ? <p className="new-product__error-message">{errors.gost}</p> : null}

              <input className="new-product__input" type="file" accept=".png, .jpeg" required ref={imageInput} onChange={(evt) => onInputChange(evt, 'image')}/>

              <button className="new-product__submit-button" type="submit">Добавить</button>
            </>
            }

          
        </form>
      </div>
    </div>
  );
};

export default NewProduct;