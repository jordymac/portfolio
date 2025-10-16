"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import { ResearchSkeleton } from "./skeletons/research-skeleton";
import { PositioningVennSkeleton } from "./skeletons/positioning-venn-skeleton";
import { ContentPhoneSkeleton } from "./skeletons/content-phone-skeleton";
import { CollaborationNetworkSkeleton } from "./skeletons/collaboration-network-skeleton";

interface WhatIDoItem {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  bullets: string[];
  skeleton: React.ReactNode;
}

const whatIDoItems: WhatIDoItem[] = [
  {
    id: "research",
    label: "Research",
    heading: "Research & Market Intelligence",
    subheading: "Understanding buyers, competitors, and market dynamics",
    bullets: [
      "Market research to identify trends and opportunities",
      "Analysing sales conversations and RFPs for pain point signals",
      "Competitive intelligence and positioning analysis",
      "Validating product-market fit through channel partner feedback",
    ],
    skeleton: <ResearchSkeleton />,
  },
  {
    id: "positioning",
    label: "Positioning",
    heading: "Positioning & Messaging",
    subheading: "Making complex products clear and compelling",
    bullets: [
      "Product launch positioning and differentiation",
      "Landing page and website messaging",
      "Partner and channel enablement positioning",
      "Competitive comparison frameworks",
    ],
    skeleton: <PositioningVennSkeleton />,
  },
  {
    id: "content",
    label: "Content",
    heading: "Content & Sales Enablement",
    subheading: "Creating assets that drive awareness and close deals",
    bullets: [
      "Case studies and customer stories",
      "Product demo videos and walkthroughs",
      "Sales collateral (one-pagers, decks)",
      "Blog posts, YouTube content, newsletters",
      "Partner enablement materials",
      "Content repurposing and distribution",
    ],
    skeleton: <ContentPhoneSkeleton />,
  },
  {
    id: "execution",
    label: "Collaboration",
    heading: "Cross-Functional Execution",
    subheading: "Collaborating across sales, product, and partners to drive results",
    bullets: [
      "Sales partnership for pipeline strategy",
      "Product collaboration for feature prioritisation",
      "Partner marketing initiatives (Cisco, Google, NTT)",
      "Trade show and event coordination",
      "Aligning teams on messaging and strategy",
    ],
    skeleton: <CollaborationNetworkSkeleton />,
  },
];

export function WhatIDoSection() {
  const [activeTab, setActiveTab] = useState(whatIDoItems[0].id);
  const activeItem = whatIDoItems.find((item) => item.id === activeTab) || whatIDoItems[0];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="bg-card rounded-2xl p-12 mb-12 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground">
            Full-stack B2B SaaS marketing across GTM strategy, sales enablement, and content
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-card rounded-2xl p-12">
          {/* Tabs Row */}
          <div className="flex items-center justify-between mb-8">
            <Briefcase className="w-6 h-6 text-foreground" />
            <div className="flex gap-6">
              {whatIDoItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-medium transition-colors pb-2 ${
                    activeTab === item.id
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {activeItem.heading}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {activeItem.subheading}
                </p>
              </div>
              <ul className="space-y-3">
                {activeItem.bullets.map((bullet, index) => (
                  <li key={index} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                    <span className="text-foreground mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Skeleton */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-white">
              {activeItem.skeleton}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
