import type { IProduct } from "../types";

export async function searchProduct(search: string): Promise<IProduct[]> {
  const apiUrl = `https://dummyjson.com/products/search?q=${search}`;
  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error("Failed to retrieve data");
  }

  const json = await res.json();

  return json.products;
}
