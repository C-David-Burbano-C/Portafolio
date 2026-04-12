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
          ? "bg-blue-500 rounded-full px-4 py-2 text-sm font-semibold text-slate-950"
          : "rounded-full px-4 py-2 text-sm font-medium text-gray-400"
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

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
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
      <header className="bg-slate-900 border-slate-700 sticky top-3 z-40 rounded-2xl border px-4 py-4 sm:top-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="bg-slate-950 border-slate-700 text-cyan-300 flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-semibold">
              CB
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Carlos David Burbano Cuchala
              </p>
              <p className="hidden text-sm text-gray-400 lg:block">
                Frontend Developer
              </p>
            </div>
          </div>

          <nav className="border-slate-700 bg-slate-950 hidden items-center gap-1 rounded-full border p-1 md:flex">
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

          <div className="hidden lg:block">
            <a
              href="#contacto"
              onClick={() => handleNavigate("#contacto")}
              className="bg-blue-500 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-slate-950"
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
            className="border-slate-700 bg-slate-950 flex h-11 w-11 items-center justify-center rounded-2xl border lg:hidden"
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
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Cerrar menu"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/70"
          />

          <aside
            id="mobile-sidebar"
            className="bg-slate-900 border-slate-700 absolute right-0 top-0 flex h-full w-72 max-w-full flex-col border-l px-5 py-6 shadow-lg"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Menu</p>
                <p className="text-sm text-gray-400">Frontend Developer</p>
              </div>
              <button
                type="button"
                aria-label="Cerrar sidebar"
                onClick={() => setIsOpen(false)}
                className="border-slate-700 bg-slate-950 text-white flex h-10 w-10 items-center justify-center rounded-2xl border text-lg"
              >
                X
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
                      ? "bg-blue-500 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-950"
                      : "bg-slate-950 border-slate-700 rounded-2xl border px-4 py-3 text-sm font-medium text-white"
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contacto"
              onClick={() => handleNavigate("#contacto")}
              className="bg-blue-500 mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Hablemos
            </a>

            <div className="border-slate-700 mt-auto rounded-2xl border p-4">
              <p className="text-sm font-semibold text-white">
                Carlos David Burbano Cuchala
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Navegacion movil simple, alineada con el kit modular.
              </p>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
