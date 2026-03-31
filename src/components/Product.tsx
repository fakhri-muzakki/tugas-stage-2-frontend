import { Link } from "react-router";
import type { IProduct } from "../types";

type ProductProps = {
  product: IProduct;
  toggleAddToCart: (product: IProduct) => void;
};

const Product = ({ product, toggleAddToCart }: ProductProps) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      {/* Image */}
      <Link
        to={{
          pathname: `/products/${product.id}`,
        }}
      >
        <img
          src={product.thumbnail}
          className=" aspect-square object-cover"
          alt={product.title}
        />
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 bg-neutral-800">
        {/* Top Info */}
        <div className="space-y-1">
          <h3 className="font-medium">{product.title}</h3>

          <p className="text-neutral-300 text-sm">
            Rp {product.price.toLocaleString()}
          </p>
        </div>

        {/* Category + Rating */}
        <div className="flex items-center justify-between mt-2 text-xs text-neutral-400">
          <span className="bg-neutral-700 px-2 py-1 rounded-md capitalize">
            {product.category}
          </span>

          <span>⭐ {product.rating}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-300 mt-3 line-clamp-2">
          {product.description}
        </p>

        {/* Spacer biar button selalu di bawah */}
        <div className="flex-1" />

        {/* Button */}
        <button
          onClick={() => toggleAddToCart(product)}
          className="w-full mt-4 bg-white text-black py-2 rounded-lg hover:opacity-90 transition disabled:bg-stone-100"
        >
          {product.added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
