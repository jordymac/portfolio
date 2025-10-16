"use client";

import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PortfolioItem } from "@/data/portfolio";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem;
  allItems: PortfolioItem[];
  onNavigate: (item: PortfolioItem) => void;
}

export function PortfolioModal({
  isOpen,
  onClose,
  item,
  allItems,
  onNavigate,
}: PortfolioModalProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background overflow-auto"
        >
          {/* Fixed Header Bar */}
          <div className="sticky top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur-sm border-b border-border z-10">
            {/* Project Badge - Left */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <span className="font-medium text-foreground">{item.title}</span>
                <ChevronDown className="w-4 h-4 text-foreground" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                  {allItems.map((portfolioItem) => (
                    <button
                      key={portfolioItem.id}
                      onClick={() => {
                        onNavigate(portfolioItem);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-secondary transition-colors ${
                        item.id === portfolioItem.id
                          ? "bg-secondary font-medium"
                          : ""
                      }`}
                    >
                      <div className="text-sm font-medium text-foreground">
                        {portfolioItem.title}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Close Button - Right */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Content Header */}
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                {item.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Case Study Content */}
            {item.detailedContent ? (
              <div className="prose max-w-none">
                {item.detailedContent}
              </div>
            ) : (
              /* Placeholder content for items without detailed content */
              <div className="space-y-8">
                <div className="aspect-video bg-secondary rounded-xl"></div>

                <div className="prose max-w-none">
                  <div className="h-6 w-48 bg-muted rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-muted/50 rounded"></div>
                    <div className="h-4 w-full bg-muted/50 rounded"></div>
                    <div className="h-4 w-3/4 bg-muted/50 rounded"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video bg-secondary rounded-xl"></div>
                  <div className="aspect-video bg-secondary rounded-xl"></div>
                </div>

                <div className="prose max-w-none">
                  <div className="h-6 w-48 bg-muted rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-muted/50 rounded"></div>
                    <div className="h-4 w-full bg-muted/50 rounded"></div>
                    <div className="h-4 w-full bg-muted/50 rounded"></div>
                    <div className="h-4 w-2/3 bg-muted/50 rounded"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
