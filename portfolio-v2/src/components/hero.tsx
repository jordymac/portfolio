import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* Text Content */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-accent">Jordy McIntyre</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Five years as a B2B SaaS marketer. I built marketing that generated millions of impressions, had buyers referencing my content in sales meetings, and influenced 7-figures in pipeline.
          </p>
        </div>

        {/* When You Hire Section */}
        <div className="bg-card rounded-2xl overflow-hidden p-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex h-full">
            {/* Column 1: What you get (2/9) */}
            <div className="w-2/9 flex flex-col py-6 pl-6 gap-[2em]">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  What you get
                </h3>
              </div>
              <div></div>
              <div></div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="w-px bg-border h-4/5"></div>
            </div>

            {/* Column 2: Checkmarks (5/9) */}
            <div className="w-5/9 flex flex-col px-6 pr-8 py-6 gap-[2em]">
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl flex-shrink-0 leading-[1.75rem]">✓</span>
                <p className="text-lg text-muted-foreground">
                  Content buyers actually remember and reference in meetings, that's also engaging
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl flex-shrink-0 leading-[1.75rem]">✓</span>
                <p className="text-lg text-muted-foreground">
                  Positioning and messaging that buyers understand
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl flex-shrink-0 leading-[1.75rem]">✓</span>
                <p className="text-lg text-muted-foreground">
                  Sales Enablement that actually gets used and helps close deals
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="w-px bg-border h-4/5"></div>
            </div>

            {/* Column 3: The Numbers (2/9) */}
            <div className="w-2/9 flex flex-col px-6 py-6 gap-[2em]">
              <div>
                <p className="text-2xl font-bold text-foreground">1,000,000s</p>
                <p className="text-xs text-muted-foreground">Impressions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Sales love it</p>
                <p className="text-xs text-muted-foreground">Feedback</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">250+</p>
                <p className="text-xs text-muted-foreground">Created</p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Header */}
            <h3 className="text-2xl font-bold text-foreground">
              What you get
            </h3>

            {/* Checklist */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl flex-shrink-0 leading-[1.75rem]">✓</span>
                <p className="text-lg text-muted-foreground">
                  Content buyers actually remember and reference in meetings, that's also engaging
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl flex-shrink-0 leading-[1.75rem]">✓</span>
                <p className="text-lg text-muted-foreground">
                  Positioning and messaging that buyers understand
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl flex-shrink-0 leading-[1.75rem]">✓</span>
                <p className="text-lg text-muted-foreground">
                  Sales Enablement that actually gets used and helps close deals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
