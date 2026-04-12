import Image from "next/image";

function Portrait() {
  return (
    <div className="bg-blue-500 rounded-full p-1 shadow-md">
      <div className="border-slate-700 bg-slate-950 relative h-24 w-24 overflow-hidden rounded-full border sm:h-28 sm:w-28 lg:h-32 lg:w-32">
      <Image
        src="/images/FOTO_PERFIL.jpg"
        alt="Foto de perfil de Carlos David Burbano Cuchala"
        fill
        sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
        className="object-cover"
      />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="bg-slate-900 relative overflow-hidden rounded-3xl border border-slate-700 px-5 py-6 sm:px-8 sm:py-8"
    >
      <div className="bg-cyan-500 absolute right-0 top-0 h-28 w-28 rounded-full opacity-10 blur-3xl" />

      <div className="relative grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:items-center">
        <div>
          <p className="text-cyan-300 text-sm font-medium uppercase tracking-[0.2em]">
            About
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Sobre Mi
          </h2>
        </div>

        <div className="flex justify-end lg:justify-center">
          <Portrait />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="text-sm leading-6 text-slate-200 sm:text-base sm:leading-7 lg:text-lg">
            Inicie en soporte y mantenimiento, fortaleciendo mi pensamiento
            analitico en hardware, redes y resolucion de problemas.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-base sm:leading-7 lg:text-lg">
            Hoy desarrollo productos web, combinando programacion, diseno y
            electronica, con enfoque en soluciones reales y mejora continua.
          </p>
        </div>
      </div>
    </section>
  );
}
