export function RotationSkeleton() {
  return (
    <div className="w-full h-full bg-black text-white flex">
      {/* Left Sidebar - Filters */}
      <div className="w-80 border-r border-gray-800 p-6 space-y-6">
        {/* Filters Header */}
        <div>
          <div className="h-8 w-24 bg-gray-800 rounded mb-4"></div>
          <div className="h-8 w-40 bg-gray-700 rounded-full"></div>
        </div>

        {/* All Stores Button */}
        <div className="h-12 bg-gray-800 rounded"></div>

        {/* Search */}
        <div className="h-12 bg-gray-800 rounded"></div>

        {/* Price Range */}
        <div className="space-y-3">
          <div className="h-4 w-24 bg-gray-700 rounded"></div>
          <div className="flex gap-2">
            <div className="flex-1 h-10 bg-gray-800 rounded"></div>
            <div className="flex-1 h-10 bg-gray-800 rounded"></div>
          </div>
        </div>

        {/* Format Dropdown */}
        <div className="space-y-3">
          <div className="h-4 w-16 bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-800 rounded"></div>
        </div>

        {/* Condition Dropdown */}
        <div className="space-y-3">
          <div className="h-4 w-20 bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-800 rounded"></div>
        </div>

        {/* Year Input */}
        <div className="space-y-3">
          <div className="h-4 w-12 bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-800 rounded"></div>
        </div>

        {/* Clear Filters */}
        <div className="h-10 bg-gray-800 rounded"></div>

        {/* Results Count */}
        <div className="h-4 w-48 bg-gray-700 rounded mx-auto"></div>
      </div>

      {/* Center - Record Card */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="w-full max-w-2xl space-y-6">
          {/* Record Image/Video Player */}
          <div className="aspect-square bg-gray-900 rounded-xl relative">
            {/* Video Controls Overlay */}
            <div className="absolute bottom-4 left-4 right-4 space-y-2">
              <div className="h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="flex-1"></div>
                <div className="h-6 w-24 bg-gray-700 rounded"></div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Record Info */}
          <div className="space-y-3">
            <div className="h-8 w-32 bg-gray-800 rounded"></div>
            <div className="h-6 w-24 bg-gray-700 rounded"></div>
            <div className="h-5 w-40 bg-gray-700 rounded"></div>

            {/* Genre Tags */}
            <div className="flex gap-2">
              <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-700 rounded-full"></div>
            </div>

            {/* Year, Track, Duration */}
            <div className="flex gap-4">
              <div className="h-4 w-12 bg-gray-700 rounded"></div>
              <div className="h-4 w-16 bg-gray-700 rounded"></div>
              <div className="h-4 w-12 bg-gray-700 rounded"></div>
            </div>

            {/* Price */}
            <div className="h-10 w-32 bg-gray-800 rounded"></div>
            <div className="h-5 w-40 bg-gray-700 rounded"></div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <div className="flex-1 h-12 bg-gray-800 rounded-lg"></div>
            <div className="flex-1 h-12 bg-green-600 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Crate & Track List */}
      <div className="w-80 border-l border-gray-800 p-6 space-y-6">
        {/* Items in Crate */}
        <div className="flex items-center justify-between">
          <div className="h-6 w-32 bg-gray-700 rounded"></div>
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="h-12 bg-gray-800 rounded-lg"></div>
          <div className="h-12 bg-blue-600 rounded-lg"></div>
          <div className="h-12 bg-green-600 rounded-lg"></div>
        </div>

        {/* Track List */}
        <div>
          <div className="h-6 w-24 bg-gray-700 rounded mb-4"></div>
          <div className="space-y-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-gray-800 rounded">
                <div className="h-4 w-32 bg-gray-700 rounded"></div>
                <div className="h-4 w-12 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
