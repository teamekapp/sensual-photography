"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  {
    src: "/images/portfolio1.jpg",
    alt: "Sesja sensualna - fotografia kobieca",
    className: "md:col-span-7",
  },
  {
    src: "/images/portfolio2.jpg",
    alt: "Sesja sensualna - portret",
    className: "md:col-span-5 md:mt-32",
  },
  {
    src: "/images/portfolio3.jpg",
    alt: "Sesja sensualna - fotografia kobieca",
    className: "md:col-span-5",
  },
  {
    src: "/images/portfolio4.jpg",
    alt: "Sesja sensualna - portret kobiecy",
    className: "md:col-span-7 md:mt-20",
  },
  {
    src: "/images/portfolio5.jpg",
    alt: "Sesja sensualna - fotografia artystyczna",
    className: "md:col-span-7",
  },
  {
    src: "/images/portfolio6.jpg",
    alt: "Sesja sensualna - fotografia kobieca",
    className: "md:col-span-5 md:mt-28",
  },
  {
    src: "/images/portfolio7.jpg",
    alt: "Sesja sensualna - fotografia kobieca",
    className: "md:col-span-5 md:mt-28",
  },
  {
    src: "/images/portfolio8.jpg",
    alt: "Sesja sensualna - fotografia kobieca",
    className: "md:col-span-7 md:mt-20",
  }, 
  {
    src: "/images/portfolio9.jpg",
    alt: "Sesja sensualna - fotografia kobieca",
    className: "md:col-span-5 md:mt-28",
  },
  {
    src: "/images/portfolio10.jpg",
    alt: "Sesja sensualna - fotografia kobieca",
    className: "md:col-span-7 md:mt-20",
  },


];

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto =
    selectedIndex !== null ? photos[selectedIndex] : null;

  // Zamknięcie klawiszem ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight" && selectedIndex !== null) {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current + 1) % photos.length
        );
      }

      if (event.key === "ArrowLeft" && selectedIndex !== null) {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + photos.length) % photos.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  // Blokowanie przewijania strony przy otwartej galerii
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <section
        id="portfolio"
        className="section bg-[#f3eee9]"
      >
        <div className="site-container">

          {/* NAGŁÓWEK */}
          <div className="mb-16 max-w-[700px] md:mb-24">
            <p className="eyebrow">
              Portfolio
            </p>

            <h2 className="mt-7 font-serif text-[48px] leading-[0.98] tracking-[-0.025em] text-[#292725] sm:text-[58px] md:text-[76px]">
              Historie
              <br />
              <span className="italic">
                opowiedziane obrazem.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[14px] leading-7 text-[#6b655f] md:text-[15px]">
              Każda sesja jest inna. Tworzę naturalne, kobiece kadry,
              w których najważniejsze jesteś Ty i emocje, które chcesz
              zachować na dłużej.
            </p>
          </div>

          {/* GALERIA */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-7">
            {photos.map((photo, index) => (
              <div
                key={photo.src}
                className={`group ${photo.className}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="block w-full cursor-zoom-in text-left"
                  aria-label={`Otwórz zdjęcie ${index + 1}`}
                >
                  <div className="image-hover relative aspect-[4/5] overflow-hidden bg-[#e8ded6]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    {/* DELIKATNA IKONA POWIĘKSZENIA */}
                    <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M9 21H3v-6" />
                        <path d="M21 3l-7 7" />
                        <path d="M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#8a837d]">
                    Sesja sensualna
                  </span>

                  <span className="font-serif text-[14px] italic text-[#8a837d]">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* DOLNY TEKST */}
          <div className="mt-20 flex flex-col items-start justify-between gap-7 border-t border-black/10 pt-8 md:mt-28 md:flex-row md:items-center">
            <p className="max-w-[460px] font-serif text-[26px] leading-tight text-[#292725] md:text-[32px]">
              Twoje ciało.
              <br />
              <span className="italic">
                Twoja historia.
              </span>
            </p>

            <a
              href="#kontakt"
              className="btn"
            >
              Umów sesję
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX - DUŻE ZDJĘCIE
      ===================================================== */}

      {selectedPhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#171514]/95 p-4 md:p-10"
          onClick={() => setSelectedIndex(null)}
        >

          {/* ZAMKNIĘCIE */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 md:right-8 md:top-8"
            aria-label="Zamknij galerię"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>

          {/* LICZNIK */}
          <div className="absolute left-5 top-6 text-[9px] uppercase tracking-[0.2em] text-white/60 md:left-8 md:top-8">
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(photos.length).padStart(2, "0")}
          </div>

          {/* POPRZEDNIE */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();

              setSelectedIndex(
                (selectedIndex - 1 + photos.length) % photos.length
              );
            }}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 md:left-8"
            aria-label="Poprzednie zdjęcie"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* NASTĘPNE */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();

              setSelectedIndex(
                (selectedIndex + 1) % photos.length
              );
            }}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 md:right-8"
            aria-label="Następne zdjęcie"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* DUŻE ZDJĘCIE */}
          <div
            className="relative h-[85vh] w-full max-w-[1400px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}