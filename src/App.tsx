import { useState } from "react";
import type { IProduct } from "./types";
import { productsData } from "./assets/data";
import Cart from "./components/Cart";
import Product from "./components/Product";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>(productsData);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAddToCart = (product: IProduct) => {
    setProducts((products) =>
      products.map((p) =>
        p.id === product.id ? { ...p, added: !p.added } : p,
      ),
    );

    if (product.added) {
      setCart((prev) => prev.filter((p) => p.id !== product.id));
      return;
    }

    setCart((prev) => [...prev, { ...product, added: true }]);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Toggle Button */}
      <div className="fixed top-4 left-4 ">
        <button
          onClick={() => setIsOpen(true)}
          className=" bg-neutral-800 hover:bg-neutral-700 px-3 py-2 rounded-lg relative"
        >
          {!!cart.length && (
            <span className="absolute -top-2 -right-2 size-5 bg-stone-500 rounded-full text-white text-sm">
              {cart.length}
            </span>
          )}
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <Cart cart={cart} isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              toggleAddToCart={toggleAddToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
