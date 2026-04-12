"use client";

import { useLanguageValue } from "../../../language";
import ProjectCardBase from "./project_card_base";

export default function ProjectIntegracionContinuaCard() {
  const copy = useLanguageValue({
    es: {
      title: "Integracion Continua",
      summary: "Programa educativo orientado al aprendizaje infantil.",
      tools: "TypeScript, web app",
      imageAlt: "Vista previa de Integracion Continua",
    },
    en: {
      title: "Integracion Continua",
      summary: "Educational program focused on children's learning.",
      tools: "TypeScript, web app",
      imageAlt: "Preview of Integracion Continua",
    },
  });

  return (
    <ProjectCardBase
      title={copy.title}
      summary={copy.summary}
      tools={copy.tools}
      demoUrl="https://integracion-continua-nu.vercel.app/"
      repoUrl="https://github.com/C-David-Burbano-C/integracion_continua"
      imageSrc="/images/integracion-continua.png"
      imageAlt={copy.imageAlt}
    />
  );
}
