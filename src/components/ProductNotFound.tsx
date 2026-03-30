type ProductNotFoundProps = {
  message?: string;
  onReset?: () => void;
};

const ProductNotFound = ({
  message = "Produk tidak ditemukan",
  onReset,
}: ProductNotFoundProps) => {
  return (
    <div className="w-full h-75 flex flex-col items-center justify-center text-center bg-neutral-900 border border-neutral-800 rounded-2xl p-6 max-w-xl">
      {/* Icon */}
      <div className="text-4xl mb-3">📦</div>

      {/* Title */}
      <h2 className="text-lg font-semibold">Product Not Found</h2>

      {/* Message */}
      <p className="text-sm text-neutral-400 mt-1 max-w-xs">{message}</p>

      {/* Action (optional) */}
      {onReset && (
        <button
          onClick={onReset}
          className="mt-4 px-4 py-2 bg-white text-black rounded-lg text-sm hover:opacity-90 transition"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ProductNotFound;
