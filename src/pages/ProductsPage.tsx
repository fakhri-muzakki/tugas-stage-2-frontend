import Product from "@/components/Product";
import ProductForm from "@/components/ProductForm";
import ProductNotFound from "@/components/ProductNotFound";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import { useCart } from "@/hooks/useCart";
import { useDebounce } from "@/hooks/useDebounce";
import { searchProduct } from "@/lib/product";
import type { IProduct } from "@/types";
import { useEffect, useState } from "react";

type Status = "Loading" | "Error" | "EmptyProduct";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { setCart } = useCart();
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
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* Content */}
      <div className="flex flex-col items-center justify-center  px-6 w-full pt-32 pb-20">
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
    </>
  );
};

export default App;
