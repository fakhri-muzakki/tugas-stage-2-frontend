import type { Product } from "../App";

const ProductCard = ({
  product,
  handleClick,
}: {
  product: Product;
  handleClick: (product: Product) => Promise<void>;
}) => {
  return (
    <div
      key={product.id}
      className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition"
    >
      <div className=" overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover hover:scale-105 transition aspect-square"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{product.title}</h2>

        <p className="text-sm text-white/60 line-clamp-2 min-h-10">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium">
            Rp {Number(product.price).toLocaleString("id-ID")}
          </span>
          <span className="text-xs text-white/50">Stock: {product.stock}</span>
        </div>

        <button
          onClick={() => handleClick(product)}
          className="mt-3 w-full bg-white text-black py-2 rounded-xl hover:opacity-90 transition text-sm font-medium"
        >
          {product.adding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
