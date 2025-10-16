export function ResearchSkeleton() {
  return (
    <div className="w-full h-full bg-white flex items-start justify-start p-4">
      <svg viewBox="0 0 160 120" className="w-full h-auto" preserveAspectRatio="xMinYMin meet">
        {/* Open Book */}
        <g>
          {/* Book base */}
          <rect x="0" y="0" width="160" height="120" fill="#f8f9fa" />

          {/* Left page - Text lines */}
          <line x1="15" y1="20" x2="70" y2="20" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
          <line x1="15" y1="35" x2="70" y2="35" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
          <line x1="15" y1="50" x2="65" y2="50" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
          <line x1="15" y1="65" x2="70" y2="65" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
          <line x1="15" y1="80" x2="68" y2="80" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
          <line x1="15" y1="95" x2="70" y2="95" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />

          {/* Right page - Bar chart */}
          {/* Y-axis */}
          <line x1="90" y1="20" x2="90" y2="105" stroke="#1a2332" strokeWidth="2" />
          {/* X-axis */}
          <line x1="90" y1="105" x2="145" y2="105" stroke="#1a2332" strokeWidth="2" />

          {/* Bars */}
          <rect x="97" y="75" width="12" height="30" fill="#3b82f6" opacity="0.8" />
          <rect x="115" y="50" width="12" height="55" fill="#3b82f6" opacity="0.8" />
          <rect x="133" y="30" width="12" height="75" fill="#3b82f6" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
