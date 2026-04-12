"use client";

import { useLanguageValue } from "../../language";
import AboutSection from "./about_section";
import ContactPanel from "./contact_panel";
import ExperienceSection from "./experience_section";
import HeroSection from "./hero_section";
import SectionBand from "./section_band";
import SkillsSection from "./skills_section";
import TopNav from "./top_nav";
import ProjectCardsAll from "./projects/project_cards_all";

export default function PortfolioModularPage() {
  const copy = useLanguageValue({
    es: {
      portfolioTitle: "Portafolio",
    },
    en: {
      portfolioTitle: "Portfolio",
    },
  });

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_85%_12%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#edf4ff_48%,#f6f3ff_100%)] text-slate-800 dark:bg-none dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-4 sm:gap-8 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <TopNav />
        <HeroSection />

        <section className="flex flex-col gap-5 sm:gap-6">
          <AboutSection />
          <SkillsSection />
        </section>

        <section id="portafolio" className="flex flex-col gap-5 sm:gap-6">
          <SectionBand title={copy.portfolioTitle} showBottomBar />
          <ProjectCardsAll />
        </section>

        <ExperienceSection />
        <ContactPanel />
      </div>
    </main>
  );
}
