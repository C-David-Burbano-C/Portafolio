import ProjectCardBase from "./project_card_base";

export default function ProjectBatteryLifeEstimatorCard() {
  return (
    <ProjectCardBase
      title="Battery Life Estimator"
      summary="Estimador de vida util y rendimiento de bateria para motocicleta electrica."
      tools="Analisis de datos, frontend"
      demoUrl="https://battery-life-estimator.vercel.app/"
      repoUrl="https://github.com/RexbilXD/BatteryLifeEstimator"
      imageSrc="/images/battery-life-estimator.png"
      imageAlt="Vista previa de Battery Life Estimator"
    />
  );
}
