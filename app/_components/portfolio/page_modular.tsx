import AboutSection from "./about_section";
import ContactPanel from "./contact_panel";
import ExperienceSection from "./experience_section";
import HeroSection from "./hero_section";
import SectionBand from "./section_band";
import SkillsSection from "./skills_section";
import TopNav from "./top_nav";
import ProjectCardsAll from "./projects/project_cards_all";

export default function PortfolioModularPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <TopNav />
        <HeroSection />

        <section className="flex flex-col gap-6">
          <AboutSection />
          <SkillsSection />
        </section>

        <section id="portafolio" className="flex flex-col gap-6">
          <SectionBand title="Portafolio" />
          <ProjectCardsAll />
        </section>

        <ExperienceSection />
        <ContactPanel />
      </div>
    </main>
  );
}
