export function CollaborationNetworkSkeleton() {
  return (
    <div className="w-full h-full bg-white flex items-start justify-start overflow-hidden">
      <svg viewBox="0 12 200 181" className="w-full h-auto" preserveAspectRatio="xMidYMin meet">
        {/* Connection lines - more organic knowledge graph style */}
        {/* Central connections */}
        <line x1="100" y1="100" x2="40" y2="40" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="100" y1="100" x2="160" y2="50" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="100" y1="100" x2="180" y2="120" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="100" y1="100" x2="140" y2="170" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="100" y1="100" x2="50" y2="150" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="100" y1="100" x2="30" y2="110" stroke="#cbd5e1" strokeWidth="2" />

        {/* Secondary cluster - top left */}
        <line x1="40" y1="40" x2="20" y2="60" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="40" y1="40" x2="60" y2="20" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="40" y1="40" x2="70" y2="50" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Secondary cluster - top right */}
        <line x1="160" y1="50" x2="170" y2="25" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="160" y1="50" x2="185" y2="45" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Secondary cluster - bottom right */}
        <line x1="140" y1="170" x2="160" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="140" y1="170" x2="120" y2="185" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Secondary cluster - bottom left */}
        <line x1="50" y1="150" x2="30" y2="170" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="50" y1="150" x2="65" y2="175" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Cross connections */}
        <line x1="160" y1="50" x2="180" y2="120" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5" />
        <line x1="30" y1="110" x2="50" y2="150" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5" />

        {/* Central node - largest */}
        <circle cx="100" cy="100" r="20" fill="#1a2332" />
        <circle cx="100" cy="100" r="12" fill="#1a2332" fillOpacity="0.1" />

        {/* Primary ring nodes - medium */}
        <circle cx="40" cy="40" r="14" fill="#4D33D9" />
        <circle cx="160" cy="50" r="14" fill="#A6649D" />
        <circle cx="180" cy="120" r="14" fill="#4D33D9" />
        <circle cx="140" cy="170" r="14" fill="#A6649D" />
        <circle cx="50" cy="150" r="14" fill="#4D33D9" />
        <circle cx="30" cy="110" r="14" fill="#A6649D" />

        {/* Secondary nodes - small */}
        <circle cx="20" cy="60" r="8" fill="#A699E6" />
        <circle cx="60" cy="20" r="8" fill="#D4B2CE" />
        <circle cx="70" cy="50" r="8" fill="#A699E6" />
        <circle cx="170" cy="25" r="8" fill="#D4B2CE" />
        <circle cx="185" cy="45" r="8" fill="#A699E6" />
        <circle cx="160" cy="180" r="8" fill="#D4B2CE" />
        <circle cx="120" cy="185" r="8" fill="#A699E6" />
        <circle cx="30" cy="170" r="8" fill="#D4B2CE" />
        <circle cx="65" cy="175" r="8" fill="#A699E6" />
      </svg>
    </div>
  );
}
