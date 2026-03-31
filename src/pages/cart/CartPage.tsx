// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import EmptyCart from "./EmptyCart";
import CartCard from "./CartCard";

export default function Cart() {
  const { cart, setCart } = useCart();

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>

        <div className="space-y-4">
          {cart.map((product) => (
            <CartCard
              key={product.id}
              removeFromCart={removeFromCart}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
