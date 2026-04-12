# Portafolio Modular

Implementacion del portafolio en `Next.js 16`, `TypeScript` y `Tailwind CSS`, tomando como fuente el kit modular ubicado en `figma_layers/`.

## Requisitos

- Node.js 20 o superior
- npm

## Ejecucion

Instalar dependencias:

```bash
npm install
```

Levantar el entorno local:

```bash
npm run dev
```

Abrir en navegador:

```text
http://localhost:3000
```

## Validacion

Lint:

```bash
npm run lint
```

Build de produccion:

```bash
npm run build
```

## Estructura principal

- `app/page.tsx`: entrada de la ruta `/`
- `app/layout.tsx`: layout raiz y metadata base
- `app/globals.css`: tema global, tipografia y tokens simples
- `app/_components/portfolio/page_modular.tsx`: ensamblador de la pagina
- `app/_components/portfolio/`: secciones del portafolio
- `app/_components/portfolio/projects/`: base de tarjetas y 5 proyectos
- `public/images/`: imagenes reales conectadas a la interfaz
- `figma_layers/`: material fuente usado para replicar el kit

## Mapa de componentes

### Ensamblador

- `page_modular.tsx`
  - Renderiza el flujo completo de la home
  - Orden actual: `TopNav`, `HeroSection`, `AboutSection`, `SkillsSection`, `SectionBand`, `ProjectCardsAll`, `ExperienceSection`, `ContactPanel`

### Navegacion

- `top_nav.tsx`
  - Navbar responsive
  - Menu desktop centrado
  - Sidebar simple para mobile

### Bloques principales

- `hero_section.tsx`
  - Titulo principal, rol, CTA y señal visual del hero

- `about_section.tsx`
  - Presentacion personal y foto de perfil

- `skills_section.tsx`
  - Tres bloques de habilidades

- `section_band.tsx`
  - Banda reutilizable para encabezados de seccion

- `experience_section.tsx`
  - Timeline vertical de experiencia

- `contact_panel.tsx`
  - CTA, datos de contacto y placeholders visuales de formulario

### Portafolio

- `projects/project_card_base.tsx`
  - Base reutilizable para cada tarjeta
  - Renderiza imagen, resumen, stack y links externos

- `projects/project_cards_all.tsx`
  - Grilla responsive de proyectos

- `projects/project_multivariable.tsx`
- `projects/project_lumpymed.tsx`
- `projects/project_integracion_continua.tsx`
- `projects/project_labwise.tsx`
- `projects/project_battery_life_estimator.tsx`
  - Cada archivo define el contenido de una tarjeta individual

## Notas de handoff

- Las imagenes publicas estan en `public/images`.
- Los enlaces externos de proyectos y contacto ya estan activos.
- `figma_layers/` se conserva como referencia y no participa en lint ni build.
- Hay un cambio local no versionado en `.gitignore` que no forma parte de los commits del portafolio.
