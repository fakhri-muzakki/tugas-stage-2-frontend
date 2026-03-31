import { useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { IProduct } from "@/types";

export default function ProductDetail() {
  const product = useLoaderData() as IProduct;

  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="max-w-5xl mx-auto grid gap-2 md:grid-cols-2">
        {/* IMAGE */}
        <div className="w-full">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="aspect-square h-100 object-cover rounded-xl border"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between space-y-6">
          {/* Title & Category */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              {product.title}
            </h1>
          </div>

          {/* Rating */}
          <div className="text-sm text-muted-foreground">
            ⭐ {product.rating}
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* Price + Action */}
          <Card>
            <CardContent className="flex items-center justify-between ">
              <span className="text-2xl font-semibold">${product.price}</span>

              <Button size="lg">Add to Cart</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
