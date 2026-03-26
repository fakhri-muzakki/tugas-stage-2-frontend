import type { IProduct } from "../types";

type ProductProps = {
  product: IProduct;
  toggleAddToCart: (product: IProduct) => void;
};

const Product = ({ product, toggleAddToCart }: ProductProps) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg">
      <img src={product.image} className="w-full h-40 object-cover" />

      <div className="p-4 space-y-2">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-neutral-400 text-sm">
          Rp {product.price.toLocaleString()}
        </p>

        <button
          onClick={() => toggleAddToCart(product)}
          className="w-full mt-2 bg-white text-black py-2 rounded-lg hover:opacity-90 transition disabled:bg-stone-100"
        >
          {product.added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
