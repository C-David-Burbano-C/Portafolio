"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

function NavLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className={
        active
          ? "bg-accent text-slate-950 rounded-full px-4 py-2 text-sm font-semibold"
          : "text-muted rounded-full px-4 py-2 text-sm font-medium"
      }
    >
      {label}
    </a>
  );
}

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncActive = () => {
      setActiveHref(window.location.hash || "#inicio");
    };

    syncActive();
    window.addEventListener("hashchange", syncActive);

    return () => {
      window.removeEventListener("hashchange", syncActive);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = (href: string) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-surface border-line sticky top-4 z-40 rounded-2xl border px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="bg-base border-line text-cyan flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-semibold">
              CB
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                Carlos David Burbano Cuchala
              </p>
              <p className="text-muted hidden text-sm md:block">
                Frontend Developer
              </p>
            </div>
          </div>

          <nav className="border-line bg-base hidden items-center gap-1 rounded-full border p-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={activeHref === item.href}
                onNavigate={() => handleNavigate(item.href)}
              />
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contacto"
              onClick={() => handleNavigate("#contacto")}
              className="bg-accent inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Hablemos
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-sidebar"
            aria-label="Abrir menu"
            onClick={() => setIsOpen((current) => !current)}
            className="border-line bg-base flex h-11 w-11 items-center justify-center rounded-2xl border md:hidden"
          >
            <span className="flex flex-col gap-1">
              <span className="bg-foreground block h-0.5 w-5 rounded-full" />
              <span className="bg-foreground block h-0.5 w-5 rounded-full" />
              <span className="bg-foreground block h-0.5 w-5 rounded-full" />
            </span>
          </button>
        </div>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Cerrar menu"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/70"
          />

          <aside
            id="mobile-sidebar"
            className="bg-surface border-line absolute right-0 top-0 flex h-full w-72 flex-col border-l px-5 py-6 shadow-lg"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">Menu</p>
                <p className="text-muted text-sm">Frontend Developer</p>
              </div>
              <button
                type="button"
                aria-label="Cerrar sidebar"
                onClick={() => setIsOpen(false)}
                className="border-line bg-base text-foreground flex h-10 w-10 items-center justify-center rounded-2xl border text-lg"
              >
                ×
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavigate(item.href)}
                  className={
                    activeHref === item.href
                      ? "bg-accent rounded-2xl px-4 py-3 text-sm font-semibold text-slate-950"
                      : "bg-base text-foreground border-line rounded-2xl border px-4 py-3 text-sm font-medium"
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contacto"
              onClick={() => handleNavigate("#contacto")}
              className="bg-accent mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Hablemos
            </a>

            <div className="border-line mt-auto rounded-2xl border p-4">
              <p className="text-sm font-semibold text-foreground">
                Carlos David Burbano Cuchala
              </p>
              <p className="text-muted mt-1 text-sm">
                Navegacion movil simple, alineada con el kit modular.
              </p>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
