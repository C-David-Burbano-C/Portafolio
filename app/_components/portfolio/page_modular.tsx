"use client";

import { useLanguageValue } from "../../language";
import AboutSection from "./about_section";
import ContactPanel from "./contact_panel";
import ExperienceSection from "./experience_section";
import HeroSection from "./hero_section";
import PortfolioFooter from "./portfolio_footer";
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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-sky-50 via-blue-50 to-violet-50 text-slate-800 dark:bg-gradient-to-r dark:from-teal-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <main className="flex-1">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-4 sm:gap-8 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <TopNav />
          <HeroSection />

          <section className="flex flex-col gap-5 sm:gap-6">
            <AboutSection />
            <SkillsSection />
          </section>

          <section id="portafolio" className="scroll-mt-24 flex flex-col gap-5 sm:gap-6">
            <SectionBand title={copy.portfolioTitle} showBottomBar />
            <ProjectCardsAll />
          </section>

          <ExperienceSection />
          <ContactPanel />
        </div>
      </main>
      <PortfolioFooter />
    </div>
  );
}
