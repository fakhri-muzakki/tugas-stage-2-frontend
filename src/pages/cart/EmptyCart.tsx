import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="text-center space-y-6 max-w-md">
        {/* Icon / Illustration */}
        <div className="text-6xl">🛒</div>

        {/* Title */}
        <h1 className="text-2xl font-semibold tracking-tight">
          Your cart is empty
        </h1>

        {/* Description */}
        <p className="text-muted-foreground">
          Looks like you haven't added anything yet. Start exploring our
          products and find something you love.
        </p>

        {/* CTA */}
        <Button asChild size="lg">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    </section>
  );
}
