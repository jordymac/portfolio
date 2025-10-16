export function PositioningVennSkeleton() {
  return (
    <div className="w-full h-full bg-white flex items-start justify-start overflow-hidden">
      <svg viewBox="0 0 204 142.8" className="w-full h-auto" preserveAspectRatio="xMidYMin meet">
        {/* Left circle */}
        <circle
          cx="70"
          cy="70"
          r="70"
          fill="#3b82f6"
          fillOpacity="0.3"
        />

        {/* Right circle */}
        <circle
          cx="130"
          cy="70"
          r="70"
          fill="#8b5cf6"
          fillOpacity="0.3"
        />

        {/* Overlap area (darker blend) - using a clipping path */}
        <defs>
          <clipPath id="overlap">
            <circle cx="70" cy="70" r="70" />
          </clipPath>
        </defs>
        <circle
          cx="130"
          cy="70"
          r="70"
          fill="#6366f1"
          fillOpacity="0.5"
          clipPath="url(#overlap)"
        />
      </svg>
    </div>
  );
}
