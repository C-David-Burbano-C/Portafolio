"use client";

import { useLanguageValue } from "../../../language";
import ProjectCardBase from "./project_card_base";

export default function ProjectLumpyMedCard() {
  const copy = useLanguageValue({
    es: {
      summary: "Aplicacion para calculo de dosis en infantes con enfoque clinico.",
      imageAlt: "Vista previa de LumpyMed Frontend",
    },
    en: {
      summary: "Application for infant dosage calculation with a clinical focus.",
      imageAlt: "Preview of LumpyMed Frontend",
    },
  });

  return (
    <ProjectCardBase
      title="LumpyMed Frontend"
      summary={copy.summary}
      tools="Angular, Tailwind"
      demoUrl="https://lumpy-med-frontend.vercel.app/"
      repoUrl="https://github.com/C-David-Burbano-C/LumpyMedFrontend"
      imageSrc="/images/lumpy-med-frontend.png"
      imageAlt={copy.imageAlt}
    />
  );
}
