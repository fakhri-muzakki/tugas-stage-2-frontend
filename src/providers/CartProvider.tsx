import { useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import type { Cart } from "../types";
import { createCart, editStockCart, removeCart } from "../libs/cart";

// Import context yang udah di buat
interface CartProviderProps {
  children: React.ReactNode;
}
const CartProvider = ({ children }: CartProviderProps) => {
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetch(
        "http://localhost:3000/api/carts?userId=cmnhhosoc0000wb2gg9o9za09",
      );

      if (!res.ok) {
        throw new Error("Terjadi error pada saat fetch");
      }

      const json = await res.json();
      setCarts(json.data);
    };

    fetchData();
  }, []);

  const addToCart = async (cart: Cart): Promise<void> => {
    const existingCart = carts.find((p) => p.id === cart.id);

    if (existingCart) {
      updateStock({ id: cart.id, stock: 1 });
      return;
    }

    setCarts((prev) => [...prev, { ...cart, stock: 1 }]);
    await createCart({ ...cart, stock: 1 });
  };

  const updateCart = async (cart: Cart): Promise<void> => {
    setCarts((prev) =>
      prev.map((p) => (p.id === cart.id ? { ...p, ...cart } : p)),
    );
  };

  const deleteCart = async (id: string): Promise<void> => {
    setCarts((prev) => prev.filter((p) => p.id !== id));
    await removeCart(id);
  };

  const updateStock = async ({
    id,
    stock,
  }: {
    id: string;
    stock: number;
  }): Promise<void> => {
    setCarts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock + stock } : p)),
    );

    const cart = carts.find((c) => c.id === id);

    await editStockCart({ id, stock: (cart?.stock || 0) + stock });
  };

  return (
    <CartContext.Provider
      value={{ carts, addToCart, deleteCart, updateCart, updateStock }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
