export interface Product {
  id: string,
  title: string,
  type: string,
  price: string,
  gost: string,
  image: string,
  hit?: boolean,
  discount?: boolean,
  promotion?: boolean,
}

export type Products = Array<Product>;