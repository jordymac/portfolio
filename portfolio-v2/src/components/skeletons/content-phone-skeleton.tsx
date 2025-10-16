export function ContentPhoneSkeleton() {
  return (
    <div className="w-full h-auto bg-white flex items-start justify-start overflow-hidden">
      <svg viewBox="0 0 260 194" className="w-full h-auto" preserveAspectRatio="xMidYMin meet">
        {/* Profile circle */}
        <circle cx="32" cy="18" r="18" fill="#cbd5e1" />

        {/* Username line */}
        <rect x="64" y="10" width="140" height="16" rx="8" fill="#e2e8f0" />

        {/* Video placeholder */}
        <rect x="16" y="54" width="228" height="140" rx="10" fill="#e2e8f0" />

        {/* Play icon */}
        <polygon points="110,114 110,144 140,129" fill="#94a3b8" />
      </svg>
    </div>
  );
}
