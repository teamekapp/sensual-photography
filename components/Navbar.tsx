"use client";

import { useState } from "react";

const links = [
  {
    label: "O mnie",
    href: "#o-mnie",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Kontakt",
    href: "#kontakt",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#faf9f7]/95 backdrop-blur-md">
      <div className="site-container">
        <div className="flex h-[68px] items-center justify-between">
          {/* LOGO */}
          <a
            href="#start"
            onClick={closeMenu}
            className="group flex flex-col"
          >
            <span className="font-serif text-[25px] italic leading-none tracking-[-0.02em] text-[#292725] transition-opacity duration-300 group-hover:opacity-60 md:text-[27px]">
              Magdalena Sensual
            </span>

            <span className="mt-[5px] text-[7px] font-medium uppercase tracking-[0.32em] text-[#817a74]">
              Photography
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4d4945] transition-colors duration-300 hover:text-[#292725]"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#b9a294] transition-all duration-300 hover:w-full" />
              </a>
            ))}

            <a
              href="#kontakt"
              className="ml-2 inline-flex min-h-[38px] items-center justify-center border border-[#b9a294] px-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#292725] transition-all duration-300 hover:border-[#292725] hover:bg-[#292725] hover:text-white"
            >
              Umów sesję
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-px w-5 bg-[#292725] transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[7px] block h-px w-5 bg-[#292725] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[14px] block h-px w-5 bg-[#292725] transition-all duration-300 ${
                  menuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            menuOpen
              ? "max-h-[420px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-black/[0.06] py-7">
            <div className="flex flex-col items-center">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="w-full py-4 text-center font-serif text-[27px] italic text-[#292725] transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#kontakt"
                onClick={closeMenu}
                className="mt-5 inline-flex min-h-[46px] items-center justify-center border border-[#b9a294] px-7 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#292725] transition-all duration-300 hover:border-[#292725] hover:bg-[#292725] hover:text-white"
              >
                Umów sesję
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}