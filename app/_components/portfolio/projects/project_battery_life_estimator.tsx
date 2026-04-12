"use client";

import { useLanguageValue } from "../../../language";
import ProjectCardBase from "./project_card_base";

export default function ProjectBatteryLifeEstimatorCard() {
  const copy = useLanguageValue({
    es: {
      summary: "Estimador de vida util y rendimiento de bateria para motocicleta electrica.",
      tools: "Analisis de datos, frontend",
      imageAlt: "Vista previa de Battery Life Estimator",
    },
    en: {
      summary: "Battery lifespan and performance estimator for an electric motorcycle.",
      tools: "Data analysis, frontend",
      imageAlt: "Preview of Battery Life Estimator",
    },
  });

  return (
    <ProjectCardBase
      title="Battery Life Estimator"
      summary={copy.summary}
      tools={copy.tools}
      demoUrl="https://battery-life-estimator.vercel.app/"
      repoUrl="https://github.com/RexbilXD/BatteryLifeEstimator"
      imageSrc="/images/battery-life-estimator.png"
      imageAlt={copy.imageAlt}
    />
  );
}
