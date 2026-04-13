"use client";

import { useEffect, useMemo, useState } from "react";
import { GitHubIcon } from "../icons";
import LanguageToggle from "../language-toggle";
import ThemeToggle from "../theme-toggle";
import { useLanguageValue } from "../../language";

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
          ? "rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm dark:bg-slate-800 dark:text-slate-100"
          : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      }
    >
      {label}
    </a>
  );
}

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");
  const copy = useLanguageValue({
    es: {
      navItems: [
        { href: "#inicio", label: "Inicio" },
        { href: "#sobre-mi", label: "Sobre mi" },
        { href: "#portafolio", label: "Portafolio" },
        { href: "#experiencia", label: "Experiencia" },
        { href: "#contacto", label: "Contacto" },
      ],
      role: "Frontend Developer",
      cta: "Hablemos",
      openMenu: "Abrir menu",
      closeMenu: "Cerrar menu",
      closeSidebar: "Cerrar sidebar",
      menu: "Menu",
      degree: "Ingenieria de Software",
      github: "GitHub",
      githubProfile: "Ver perfil de GitHub",
    },
    en: {
      navItems: [
        { href: "#inicio", label: "Home" },
        { href: "#sobre-mi", label: "About" },
        { href: "#portafolio", label: "Portfolio" },
        { href: "#experiencia", label: "Experience" },
        { href: "#contacto", label: "Contact" },
      ],
      role: "Frontend Developer",
      cta: "Let's talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      closeSidebar: "Close sidebar",
      menu: "Menu",
      degree: "Software Engineering",
      github: "GitHub",
      githubProfile: "Open GitHub profile",
    },
  });
  const githubUrl = "https://github.com/C-David-Burbano-C";

  const navItems = useMemo(() => copy.navItems, [copy.navItems]);

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
      <header className="sticky top-3 z-40 rounded-2xl border border-white/65 bg-white/70 px-4 py-4 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.32)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 sm:top-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-100 text-sm font-semibold text-sky-700 shadow-sm dark:border-sky-900/50 dark:bg-none dark:bg-slate-900 dark:text-sky-300">
              CB
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                Carlos David Burbano Cuchala
              </p>
              <p className="hidden text-sm text-slate-600 dark:text-slate-400 lg:block">
                {copy.role}
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 rounded-full border border-sky-100 bg-white/80 p-1 shadow-inner dark:border-slate-800 dark:bg-slate-950/80 md:flex">
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

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="hidden lg:block">
            <a
              href="#contacto"
              onClick={() => handleNavigate("#contacto")}
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
            >
              {copy.cta}
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-sidebar"
            aria-label={copy.openMenu}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-100 bg-white/85 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:hidden"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 rounded-full bg-slate-900 dark:bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-slate-900 dark:bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-slate-900 dark:bg-white" />
            </span>
          </button>
        </div>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label={copy.closeMenu}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/70 dark:bg-slate-950/80"
          />

          <aside
            id="mobile-sidebar"
            className="absolute right-0 top-0 flex h-full w-72 max-w-full flex-col border-l border-white/60 bg-gradient-to-b from-white to-sky-50 px-5 py-6 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-none dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {copy.menu}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{copy.role}</p>
              </div>
              <button
                type="button"
                aria-label={copy.closeSidebar}
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-100 bg-white text-lg text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-white"
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
                      ? "rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm dark:bg-slate-800 dark:text-slate-100"
                      : "rounded-2xl border border-sky-100 bg-white/90 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contacto"
              onClick={() => handleNavigate("#contacto")}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 dark:bg-sky-400 dark:text-slate-950"
            >
              {copy.cta}
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              aria-label={copy.githubProfile}
              className="mt-3 inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-900/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-950"
            >
              <GitHubIcon className="h-5 w-5" />
              <span>{copy.github}</span>
            </a>

            <div className="mt-auto rounded-2xl border border-sky-100 bg-white/70 p-4 text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-white">
              <p className="text-sm font-semibold">Carlos David Burbano Cuchala</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {copy.degree}
              </p>
            </div>

            <div className="mt-6 flex gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </aside>
        </div>
      ) : null}

      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.githubProfile}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full border border-slate-900/10 bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.7)] transition-transform hover:-translate-y-1 hover:bg-slate-900 dark:border-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 lg:inline-flex"
      >
        <GitHubIcon className="h-5 w-5" />
        <span>{copy.github}</span>
      </a>
    </>
  );
}
