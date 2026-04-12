"use client";

import { useLanguageValue } from "../../../language";
import ProjectCardBase from "./project_card_base";

export default function ProjectLabWiseCard() {
  const copy = useLanguageValue({
    es: {
      summary: "Plataforma inteligente para gestion y enriquecimiento de guias de laboratorio.",
      tools: "Web app, gestion academica",
      imageAlt: "Vista previa de LabWise",
    },
    en: {
      summary: "Intelligent platform for managing and enriching laboratory guides.",
      tools: "Web app, academic management",
      imageAlt: "Preview of LabWise",
    },
  });

  return (
    <ProjectCardBase
      title="LabWise"
      summary={copy.summary}
      tools={copy.tools}
      demoUrl="https://lab-wise.vercel.app/dashboard"
      repoUrl="https://github.com/RexbilXD/LabWise"
      imageSrc="/images/lab-wise.png"
      imageAlt={copy.imageAlt}
    />
  );
}
