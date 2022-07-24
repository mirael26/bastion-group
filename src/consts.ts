export const RegExpTest = {
  ID: /^\d{1,}$/,
  TYPE_NAME: /^[A-Za-zА-Яа-я0-9 .,\(\)/-]+$/,
  PRODUCT_TITLE: /^[A-Za-zА-Яа-я0-9 .,\(\)/-]+$/,
  PRODUCT_PRICE: /^[0-9.]+$/,
  PRODUCT_GOST: /^[A-Za-zА-Яа-я0-9 ./-]+$/,
  USERNAME: /^[A-Za-zА-Яа-я ']+$/,
  PHONE: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  EMAIL: /.+@.+\..+/i,
  COMPANY: /^[A-Za-zА-Яа-я0-9 .,/-]+$/,
};