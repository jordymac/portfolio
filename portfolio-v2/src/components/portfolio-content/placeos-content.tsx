import dynamic from 'next/dynamic';
import { PositioningComparison } from './positioning-comparison';

const PDFCarousel = dynamic(() => import('../pdf-carousel').then(mod => ({ default: mod.PDFCarousel })), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[1500/844] flex items-center justify-center bg-secondary">
      <p className="text-muted-foreground">Loading PDF...</p>
    </div>
  ),
});

export function PlaceOSContent() {
  return (
    <div className="space-y-12">
      {/* Overview Section */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">The Challenge</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          PlaceOS was a bootstrapped B2B SaaS company selling custom smart building solutions to companies like McKinsey and International Towers. With low 7-figures in revenue from $50K-500K custom projects, they needed to launch their first packaged product and build a marketing function from scratch.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          When I joined as their first proper marketing hire, sales were creating their own decks, there was no formal positioning, and no scalable way to support the complex enterprise sales process.
        </p>
      </section>

      {/* What I Did */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">What I Did</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Over 5 years as the sole marketer (promoted to Marketing Lead at 1.5 years), I built the complete marketing function - from launching their first product to creating the thought leadership and enablement that supported the sales process. My work helped buyers know and trust PlaceOS before sales conversations began, then provided the materials that helped move deals forward.
        </p>

        {/* Year 1 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-3">Year 1: Launched PlaceOS ONE (First Packaged Product)</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            In my first few months, I launched PlaceOS ONE - the company&apos;s first packaged product, a smart building platform combining room booking, space utilisation, and desk booking into one workplace management tool.
          </p>

          <div className="bg-secondary/30 rounded-lg p-6 mb-4">
            <h4 className="text-xl font-semibold text-foreground mb-3">My role:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Named the product</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Developed initial positioning: &ldquo;All-in-one workplace management&rdquo; (early to market, limited competition)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Built complete launch assets: website, product demos, animations, sales decks, partner marketplace listings, paid campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Executed go-to-market: PR announcements, partner amplification, LinkedIn campaigns, mailouts</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-foreground mb-3">Result:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>~20 customers adopted PlaceOS ONE (later rebranded to WorkMate)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Nestle deployed across 50 buildings globally</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Product became a core revenue driver alongside custom solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Years 2-5 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-3">Years 2-5: Built Sales Enablement System That Scaled</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Through weekly collaboration with sales, I built a complete enablement system focused on getting reps up to speed faster and winning deals.
          </p>

          <div className="bg-secondary/30 rounded-lg p-6 mb-4">
            <h4 className="text-xl font-semibold text-foreground mb-3">What I built:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>100+ product demo videos (scripted, directed, edited)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Webinar program (15+ over tenure)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sales assets: mockups, one-pagers, case studies, battlecards</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Organised screenshot library and asset management system</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Thought leadership program: 1-3 videos/week with CEO (I scripted, shot, edited; he provided insights)</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-4 font-medium">Most-used by sales: Webinars and mockups with clear messaging</p>
          </div>

          {/* PDF Carousel */}
          <div className="mt-6">
            <PDFCarousel
              pdfPath="/documents/Air Conditioning Empty Rooms is Costing Everyone.pdf"
              title="Air Conditioning Empty Rooms is Costing Everyone"
            />
          </div>
        </div>
      </section>

      {/* Content That Won Deals */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Content That Won Deals</h2>

        <div className="space-y-6">
          <div className="bg-secondary/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">McMaster University Case Study</h3>
            <p className="text-muted-foreground mb-3">
              Created case study focused on government mandates (incentives/penalties for buildings), waste reduction, and ease of deployment. Repurposed into 50+ pieces of content that:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Drove multiple Canadian deals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Won first US customer (UCLA)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Became go-to sales asset for education sector</span>
              </li>
            </ul>

            {/* Embedded Video */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/2dXcl3CpwCw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">Cisco Partner Program</h3>
            <p className="text-muted-foreground">
              Created sales decks and presentations for Cisco events (Integrate, Cisco Live) focused on university/education market. Partner earned &ldquo;Partner of the Month&rdquo; recognition.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">MENA Pipeline Unlock</h3>
            <p className="text-muted-foreground mb-3">
              When deals stalled due to missing visitor management features:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Identified gap through sales partner feedback</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Coordinated with Product to prioritise development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Built launch campaign: webinars, content, demos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sales partner invited prospects to webinars with new feature content</span>
              </li>
            </ul>
            <p className="text-muted-foreground font-medium mb-4">
              Result: Closed 2-3 large enterprise deals including PWC and government building
            </p>

            {/* Embedded Video */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/S341t1IzUSs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Channel Marketing */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Multi-Channel Marketing Execution</h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-foreground mb-3">Campaigns</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>CEO thought leadership (LinkedIn):</strong> Built CEO&apos;s LinkedIn presence from 1-4K impressions per post to 100K+ average, with posts hitting 1M+ impressions through strategic content program (I scripted, shot, edited videos; CEO provided insights)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>LinkedIn paid ads:</strong> $10K/month for 6 months, 20-30 meetings/quarter (eventually shifted all-in on organic due to targeting challenges and organic success)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Sales Navigator + Lemlist:</strong> Targeted similar roles at similar companies, shared case studies</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Content marketing:</strong> 1-5 blog posts every 1-2 months</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>SEO optimisation</strong> (focus in final year)</span>
            </li>
          </ul>
        </div>

        {/* LinkedIn Embed */}
        <div className="my-8">
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7292749142601211904"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-3">Events</h3>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Integrate, Cisco Live, Chrome Partner Summit</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Partner enablement (~10% of time)</span>
            </li>
          </ul>

          {/* Embedded Video */}
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fiBF8LvbCJY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Positioning Evolution */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Positioning Evolution</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          As the market matured and competition increased, I evolved our positioning strategy through continuous sales feedback:
        </p>

        <div className="space-y-4 mb-4">
          <div className="bg-secondary/30 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-foreground mb-2">Phase 1 (Launch): &ldquo;All-in-one workplace management&rdquo;</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Early to market advantage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sufficient differentiation when few competitors existed</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-foreground mb-2">Phase 2 (Market Maturity): &ldquo;The first workplace management system to combine out-of-the-box simplicity with enterprise-level configuration & scalability&rdquo;</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Market became crowded with &ldquo;all-in-one&rdquo; claims</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Needed sharper differentiation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Key insight from sales: Buyers weren&apos;t choosing based on features - they needed scalable architecture with enterprise flexibility</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Applied this positioning evolution thinking across multiple product lines: WorkMate, Stagehand, PlaceOS, BackOffice.
        </p>

        {/* Positioning Comparison Visual */}
        <PositioningComparison />
      </section>

      {/* Results */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Results</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Over 5 years as sole marketer:
        </p>
        <div className="bg-secondary/30 rounded-lg p-6">
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>7-figures+ pipeline influenced</strong> through marketing that accelerated sales conversations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Built CEO thought leadership:</strong> Scaled LinkedIn impressions from 1-4K per post to 100K+ average, with posts hitting 1M+ impressions - buyers knew and trusted the CEO before first contact</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Sales enablement:</strong> My content helped move deals forward - case studies, demos, and battlecards that addressed buyer questions and objections</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>250+ pieces of content produced</strong> (videos, case studies, decks, one-pagers, blogs)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Launched 1 product from scratch</strong> and supported evolution of multiple product lines</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Stayed lean:</strong> Remained solo marketer supporting &lt;15-person company through growth and market challenges</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What I'm Most Proud Of */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">What I&apos;m Most Proud Of</h2>
        <ul className="space-y-3 text-muted-foreground text-lg">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>The university campus content strategy that resonated so strongly it became our Canadian and US market entry tool</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Developing positioning across multiple product lines (WorkMate, Stagehand, PlaceOS, BackOffice) that clarified our value for different buyer personas</span>
          </li>
        </ul>
      </section>

      {/* What I Learned */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">What I Learned</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I discovered I&apos;m naturally inquisitive with strong instincts for identifying what&apos;s not working and solving it. I thrive working independently but accelerate even faster with mentorship and collaboration - which is why weekly sales check-ins and cross-functional coordination became the foundation of everything I built.
        </p>
      </section>
    </div>
  );
}
