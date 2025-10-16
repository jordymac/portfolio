"use client";

import { useState } from "react";
import { PortfolioCard } from "./portfolio-card";
import { PortfolioModal } from "./portfolio-modal";
import { portfolioItems, PortfolioItem } from "@/data/portfolio";

export function PortfolioSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleCardClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleNavigate = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground">
              Featured work and projects
            </p>
          </div>

          {/* Portfolio Cards with Stacking Effect */}
          <div className="relative">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                total={portfolioItems.length}
                onClick={() => handleCardClick(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      {selectedItem && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
          allItems={portfolioItems}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
}
