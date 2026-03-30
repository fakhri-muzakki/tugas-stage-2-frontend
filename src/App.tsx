import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import type { IProduct } from "./types";
import Product from "./components/Product";
import { searchProduct } from "./lib/product";
import { useDebounce } from "./hooks/useDebounce";
import ProductForm from "./components/ProductForm";
import ProductSkeleton from "./components/skeletons/ProductSkeleton";
import ProductNotFound from "./components/ProductNotFound";

type Status = "Loading" | "Error" | "EmptyProduct";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<Status | null>(null);

  const debounceValue = useDebounce(search, 500);

  useEffect(() => {
    if (debounceValue.length === 0) {
      return;
    }

    const fetchData = async (): Promise<void> => {
      try {
        setStatus("Loading");
        const result = await searchProduct(debounceValue);
        setProducts(result);

        if (result.length === 0) {
          setStatus("EmptyProduct");
        } else {
          setStatus(null);
        }
      } catch (error) {
        console.log(error);
        setStatus("Error");
      }
    };

    fetchData();
  }, [debounceValue]);

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
    <main className="min-h-screen bg-neutral-950 text-white w-full">
      {/* Toggle Button */}
      <div className="fixed top-4 left-4">
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
      <div className="flex flex-col items-center justify-center min-h-screen px-6 w-full pt-32 pb-20">
        <ProductForm search={search} setSearch={setSearch} />

        {status === "EmptyProduct" && <ProductNotFound />}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full">
          {status === "Loading" ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          ) : (
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                toggleAddToCart={toggleAddToCart}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
