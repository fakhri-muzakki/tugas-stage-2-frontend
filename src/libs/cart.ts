import type { Cart } from "../types";

export async function createCart(cart: Cart) {
  const res = await fetch("http://localhost:3000/api/carts", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...cart, userId: "cmnhhosoc0000wb2gg9o9za09" }),
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Terjadi error pada saat create cart");
  }

  const json = await res.json();
  return json.data;
}

export async function removeCart(id: string) {
  const res = await fetch(`http://localhost:3000/api/carts/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Terjadi error pada saat delete cart");
  }

  return res.json();
}

export async function editStockCart({
  id,
  stock,
}: {
  id: string;
  stock: number;
}) {
  const res = await fetch(`http://localhost:3000/api/carts/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({ stock }),
  });

  if (!res.ok) {
    throw new Error("Terjadi error pada saat update stock cart");
  }
  const json = await res.json();
  return json;
}
