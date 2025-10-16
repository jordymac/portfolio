export function PositioningComparison() {
  return (
    <div className="my-8 bg-card rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left Column - Competitors */}
        <div className="p-8 bg-red-50/30 dark:bg-red-950/10 border-r border-border">
          <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
            Other Workplace Apps
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl flex-shrink-0">❌</span>
              <span className="text-muted-foreground">Just a dashboard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl flex-shrink-0">❌</span>
              <span className="text-muted-foreground">Single source of truth</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl flex-shrink-0">❌</span>
              <span className="text-muted-foreground">Vendor lock-in (specific sensors required)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl flex-shrink-0">❌</span>
              <span className="text-muted-foreground">Can&apos;t scale across different buildings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl flex-shrink-0">❌</span>
              <span className="text-muted-foreground">Hard-coded apps with limited flexibility</span>
            </li>
          </ul>
        </div>

        {/* Right Column - PlaceOS */}
        <div className="p-8 bg-green-50/30 dark:bg-green-950/10">
          <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
            PlaceOS
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl flex-shrink-0">✅</span>
              <span className="text-foreground font-medium">Platform with automation capabilities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl flex-shrink-0">✅</span>
              <span className="text-foreground font-medium">Cross-references multiple data sources</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl flex-shrink-0">✅</span>
              <span className="text-foreground font-medium">Vendor agnostic - works with any hardware</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl flex-shrink-0">✅</span>
              <span className="text-foreground font-medium">Configurable architecture</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl flex-shrink-0">✅</span>
              <span className="text-foreground font-medium">Scales globally across any building</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Key Insight */}
      <div className="px-8 py-6 bg-secondary/30 border-t border-border">
        <p className="text-center text-lg italic text-muted-foreground">
          &ldquo;They&apos;re apps. We&apos;re the architecture apps run on.&rdquo;
        </p>
      </div>
    </div>
  );
}
