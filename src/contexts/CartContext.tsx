import type { IProduct } from "@/types";
import { createContext } from "react";

type CartContextType = {
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
};

const CartContext = createContext<CartContextType | null>(null);

export default CartContext;
