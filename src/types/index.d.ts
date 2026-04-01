export interface IProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  added: boolean;

  rating: string;
  category: string;
  description: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
