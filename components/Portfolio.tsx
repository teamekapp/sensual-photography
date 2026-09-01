import Image from "next/image";

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
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section bg-[#f3eee9]"
    >
      <div className="site-container">
        {/* NAGŁÓWEK */}
        <div className="mb-16 max-w-[700px] md:mb-24">
          <p className="eyebrow">Portfolio</p>

          <h2 className="mt-7 font-serif text-[48px] leading-[0.98] tracking-[-0.025em] text-[#292725] sm:text-[58px] md:text-[76px]">
            Historie
            <br />
            <span className="italic">opowiedziane obrazem.</span>
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
              <div className="image-hover relative aspect-[4/5] overflow-hidden bg-[#e8ded6]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>

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
            <span className="italic">Twoja historia.</span>
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
  );
}