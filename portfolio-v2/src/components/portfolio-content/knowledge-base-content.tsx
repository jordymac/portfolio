export function KnowledgeBaseContent() {
  return (
    <div className="space-y-12">
      {/* Hero Image */}
      <section>
        <div className="aspect-video rounded-xl overflow-hidden mb-8">
          <img
            src="/images/knowledge-base.jpg"
            alt="Interactive Knowledge Base Graph Visualization"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center mb-8">
          <a
            href="https://publish.obsidian.md/placeos/All+Topics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors"
            style={{
              backgroundColor: '#7F3576',
              color: 'white',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A2452'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7F3576'}
          >
            View Interactive Knowledge Base
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Built a graph-based knowledge hub to help workplace, campus, and facilities teams explore how key smart building concepts like occupancy, utilization, and automation connect — with one goal in mind: make it easier to understand whether a space is delivering value.
        </p>
      </section>

      {/* LinkedIn Post */}
      <section>
        <div className="rounded-xl overflow-hidden">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7314887707183222784"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
      </section>

      {/* Key Achievements */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Key Achievements</h2>
        <ul className="space-y-3 text-muted-foreground text-lg">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Developed and launched a content-led resource designed for consultants, buyers, and internal teams</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Reframed complex technical ideas into clear, navigable concepts tied to business outcomes</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Generated over 100 inbound leads on launch, including from previously untapped markets</span>
          </li>
        </ul>
      </section>

      {/* Challenge */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Challenge</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our platform solves problems that span departments — but few stakeholders understood the full scope. Technical concepts like occupancy modelling or systems orchestration were hard to explain, especially without a shared mental model.
        </p>
      </section>

      {/* Insight */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Insight</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Decision-makers didn&apos;t need more technical specs — they needed clarity. A graph-style tool could show how all the moving parts fit together and help users self-navigate toward relevant solutions and use cases.
        </p>
      </section>

      {/* Action */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Action</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Created an interactive knowledge base that mapped key concepts to challenges, use cases, and modules across the platform. Wrote and structured content to emphasise clarity, cross-functional relevance, and business value.
        </p>
      </section>

      {/* Results */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-4">Results</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The tool became a top-of-funnel lead generator and strategic asset in sales conversations. It also served as a teaching tool for consultants and new hires, making PlaceOS&apos;s capabilities easier to explain and position.
        </p>
      </section>
    </div>
  );
}
