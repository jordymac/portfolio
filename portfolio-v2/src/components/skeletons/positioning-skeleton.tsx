export function PositioningSkeleton() {
  return (
    <div className="w-full h-full bg-white p-8 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-900">
        <div className="h-8 w-80 bg-gray-900 rounded"></div>
        <div className="h-10 w-32 bg-gray-200 rounded border border-gray-900"></div>
      </div>

      {/* Positioning Option Bar */}
      <div className="mb-6 p-4 border-2 border-gray-900 rounded-lg bg-white">
        <div className="flex items-center gap-2">
          <div className="h-5 w-40 bg-gray-900 rounded"></div>
          <div className="h-5 flex-1 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-12 gap-4">
        {/* Left Sidebar - Anchors & Components */}
        <div className="col-span-3 space-y-4">
          {/* Primary Anchors */}
          <div className="border-2 border-gray-900 rounded-lg overflow-hidden">
            <div className="bg-yellow-100 p-3 border-b-2 border-gray-900">
              <div className="h-5 w-32 bg-gray-700 rounded"></div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 bg-gray-700 rounded"></div>
                  <div className="h-4 w-24 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Anchors */}
          <div className="border-2 border-gray-900 rounded-lg overflow-hidden">
            <div className="bg-blue-100 p-3 border-b-2 border-gray-900">
              <div className="h-5 w-36 bg-gray-700 rounded"></div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-28 bg-gray-700 rounded"></div>
                  <div className="h-4 w-32 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="border-2 border-gray-900 rounded-lg overflow-hidden">
            <div className="bg-red-100 p-3 border-b-2 border-gray-900">
              <div className="h-5 w-20 bg-gray-700 rounded"></div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-20 bg-gray-700 rounded"></div>
                  <div className="space-y-1">
                    <div className="h-3 w-full bg-gray-400 rounded"></div>
                    <div className="h-3 w-full bg-gray-400 rounded"></div>
                    <div className="h-3 w-3/4 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Differentiator */}
          <div className="border-2 border-gray-900 rounded-lg overflow-hidden">
            <div className="bg-green-100 p-3 border-b-2 border-gray-900">
              <div className="h-5 w-28 bg-gray-700 rounded"></div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-1"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-28 bg-gray-700 rounded"></div>
                  <div className="space-y-1">
                    <div className="h-3 w-full bg-gray-400 rounded"></div>
                    <div className="h-3 w-4/5 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Preview */}
        <div className="col-span-6 border-2 border-gray-900 rounded-lg p-8 bg-gray-50 flex flex-col items-center justify-center">
          {/* Logo placeholder */}
          <div className="mb-8">
            <div className="h-6 w-24 bg-gray-400 rounded"></div>
          </div>

          {/* Main Positioning Statement */}
          <div className="text-center mb-6 space-y-4">
            <div className="space-y-2">
              <div className="h-8 w-48 bg-yellow-600 rounded mx-auto"></div>
              <div className="h-8 w-16 bg-gray-700 rounded mx-auto"></div>
              <div className="h-8 w-56 bg-blue-600 rounded mx-auto"></div>
            </div>

            <div className="h-4 w-96 bg-gray-400 rounded mx-auto mt-6"></div>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-2 mt-4">
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Sidebar - Thesis & Risks */}
        <div className="col-span-3 space-y-4">
          {/* Thesis */}
          <div className="border-2 border-gray-900 rounded-lg overflow-hidden">
            <div className="bg-gray-200 p-3 border-b-2 border-gray-900">
              <div className="h-5 w-16 bg-gray-700 rounded"></div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-700 rounded-full mt-1.5"></div>
                <div className="space-y-1 flex-1">
                  <div className="h-3 w-full bg-gray-400 rounded"></div>
                  <div className="h-3 w-4/5 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Risks */}
          <div className="border-2 border-gray-900 rounded-lg overflow-hidden">
            <div className="bg-gray-200 p-3 border-b-2 border-gray-900">
              <div className="h-5 w-14 bg-gray-700 rounded"></div>
            </div>
            <div className="p-4">
              {/* Empty for now */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="mt-4 flex justify-center">
        <div className="h-12 w-48 bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
}
