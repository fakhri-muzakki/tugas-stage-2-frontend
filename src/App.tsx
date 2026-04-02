import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./hooks/useCart";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  stock: number;
  thumbnail: string;
  adding?: boolean;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) {
        throw new Error("Terjadi error pada saat fetch data");
      }

      const json = await res.json();

      setProducts(json.products);
    };

    fetchData();
  }, []);

  const handleClick = async (product: Product): Promise<void> => {
    try {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? { ...p, adding: true } : p)),
      );
      await addToCart(product);
    } catch (error) {
      console.log(error);
    } finally {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? { ...p, adding: false } : p)),
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 relative">
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 bg-white text-black p-3 rounded-full shadow-lg hover:opacity-90"
      >
        <ShoppingCart size={20} />
      </button>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </div>
  );
}
