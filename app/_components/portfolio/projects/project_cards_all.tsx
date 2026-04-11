import ProjectBatteryLifeEstimatorCard from "./project_battery_life_estimator";
import ProjectIntegracionContinuaCard from "./project_integracion_continua";
import ProjectLabWiseCard from "./project_labwise";
import ProjectLumpyMedCard from "./project_lumpymed";
import ProjectMultivariableCard from "./project_multivariable";

export default function ProjectCardsAll() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <ProjectMultivariableCard />
      <ProjectLumpyMedCard />
      <ProjectIntegracionContinuaCard />
      <ProjectLabWiseCard />
      <ProjectBatteryLifeEstimatorCard />
    </div>
  );
}
