import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Kamu belum pasang provider di app.tsx");
  }

  return context;
}
