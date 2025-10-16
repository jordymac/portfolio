import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PortfolioSection } from "@/components/portfolio-section";
import { WhatIDoSection } from "@/components/what-i-do-section";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioSection />
        <WhatIDoSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
