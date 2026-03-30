const WeatherCardSkeleton = () => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 pb-[1.13rem] shadow-lg space-y-4 animate-pulse">
      {/* Header */}
      <div className="space-y-2 mb-[1.15rem]">
        <div className="h-6 w-40 bg-neutral-800 rounded-md" />
        <div className="h-4 w-32 bg-neutral-800 rounded-md" />
      </div>

      {/* Main Info */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-neutral-800 rounded-xl px-3 py-4 space-y-2"
          >
            <div className="h-3 w-20 bg-neutral-700 rounded" />
            <div className="h-5 w-16 bg-neutral-700 rounded" />
          </div>
        ))}

        {/* Full width item */}
        <div className="bg-neutral-800 rounded-xl p-3 space-y-2 col-span-2">
          <div className="h-5 w-24 bg-neutral-700 rounded" />
          <div className="h-8 w-20 bg-neutral-700 rounded" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCardSkeleton;
