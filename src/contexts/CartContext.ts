import { createContext } from "react";
import type { Cart } from "../types";
type CartContextType = {
  carts: Cart[];
  addToCart: (cart: Cart) => Promise<void>;
  updateCart: (cart: Cart) => Promise<void>;
  deleteCart: (id: string) => Promise<void>;
  updateStock: ({ id, stock }: { id: string; stock: number }) => Promise<void>;
};
export const CartContext = createContext<CartContextType | null>(null);
