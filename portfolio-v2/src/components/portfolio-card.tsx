"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  total: number;
  onClick: () => void;
}

export function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Just slide up, no scaling
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        y,
      }}
      className="sticky top-[6rem] mb-8 cursor-pointer"
      onClick={onClick}
    >
      <div
        className="rounded-2xl overflow-hidden aspect-video hover:shadow-xl transition-shadow"
        style={{ backgroundColor: item.colorLightest }}
      >
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center h-full">
          {/* Text Content - Left */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              {item.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {item.description}
            </p>
            {item.features && (
              <ul className="space-y-2">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            <button className="flex items-center gap-2 text-foreground font-medium group mt-4">
              <span>{item.ctaText || 'Learn more'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image - Right */}
          <div className="relative h-full rounded-xl overflow-hidden bg-secondary">
            {item.skeleton ? (
              <div className="w-full h-full">{item.skeleton}</div>
            ) : (
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
