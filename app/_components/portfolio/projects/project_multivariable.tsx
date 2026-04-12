"use client";

import { useLanguageValue } from "../../../language";
import ProjectCardBase from "./project_card_base";

export default function ProjectMultivariableCard() {
  const copy = useLanguageValue({
    es: {
      summary: "Calculadora de derivadas e integrales con visualizacion matematica interactiva.",
      imageAlt: "Vista previa de Multivariable Explorer",
    },
    en: {
      summary: "Derivative and integral calculator with interactive mathematical visualization.",
      imageAlt: "Preview of Multivariable Explorer",
    },
  });

  return (
    <ProjectCardBase
      title="Multivariable Explorer"
      summary={copy.summary}
      tools="TypeScript, Tailwind"
      demoUrl="https://multivariable-explorer.vercel.app/"
      repoUrl="https://github.com/C-David-Burbano-C/MultivariableExplorer"
      imageSrc="/images/multivariable-explorer.png"
      imageAlt={copy.imageAlt}
    />
  );
}
