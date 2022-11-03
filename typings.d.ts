export interface IProperty {
  img: string;
  location: string;
  distance: string;
}

export interface ICard {
  img: string;
  title: string;
}

export interface ISearch {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long?: number;
  lat?: number;
}