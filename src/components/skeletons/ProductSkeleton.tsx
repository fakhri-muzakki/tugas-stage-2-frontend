const ProductSkeleton = () => {
  return (
    <div className="h-128.25 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col animate-pulse">
      {/* Image */}
      <div className="aspect-square bg-neutral-800 -mt-1" />

      {/* Content */}
      <div className="p-2 flex flex-col flex-1 bg-neutral-800">
        {/* Title + Price */}
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-neutral-700 rounded" />
          <div className="h-4 w-1/3 bg-neutral-700 rounded" />
        </div>

        {/* Category + Rating */}
        <div className="flex items-center justify-between mt-3">
          <div className="h-5 w-16 bg-neutral-700 rounded-md" />
          <div className="h-4 w-10 bg-neutral-700 rounded" />
        </div>

        {/* Description */}
        <div className="space-y-2 mt-3">
          <div className="h-3 w-full bg-neutral-700 rounded" />
          <div className="h-3 w-5/6 bg-neutral-700 rounded" />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Button */}
        <div className="h-10 w-full bg-neutral-700 rounded-lg mt-4" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
