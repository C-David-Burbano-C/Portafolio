import ProjectCardBase from "./project_card_base";

export default function ProjectLumpyMedCard() {
  return (
    <ProjectCardBase
      title="LumpyMed Frontend"
      summary="Aplicacion para calculo de dosis en infantes con enfoque clinico."
      tools="Angular, Tailwind"
      demoUrl="https://lumpy-med-frontend.vercel.app/"
      repoUrl="https://github.com/C-David-Burbano-C/LumpyMedFrontend"
      imageSrc="/images/lumpy-med-frontend.png"
      imageAlt="Vista previa de LumpyMed Frontend"
    />
  );
}
