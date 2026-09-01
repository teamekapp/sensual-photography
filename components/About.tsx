import Image from "next/image";

export default function About() {
  return (
    <section
      id="o-mnie"
      className="section overflow-hidden bg-[#faf9f7]"
    >
      <div className="site-container">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="mb-16 md:mb-24">
          <p className="eyebrow">O mnie</p>
        </div>

        {/* GŁÓWNA CZĘŚĆ */}
        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1fr] md:gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">
          
          {/* ZDJĘCIE */}
          <div className="relative">
            <div className="image-hover relative aspect-[4/5] overflow-hidden bg-[#eee7e1]">
              <Image
                src="/images/o_mnie.jpg"
                alt="Magdalena - fotografia sensualna"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-700"
              />
            </div>

            {/* Mały podpis pod zdjęciem */}
            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-[#8a837d]">
              Magdalena Sensual Photography
            </p>
          </div>

          {/* TEKST */}
          <div className="max-w-[560px]">
            <p className="font-serif text-[42px] leading-[1.05] tracking-[-0.02em] text-[#292725] md:text-[54px] lg:text-[62px]">
              Kobiecość
              <br />
              <span className="italic">
                bez udawania.
              </span>
            </p>

            <div className="mt-9 space-y-5 text-[14px] leading-7 text-[#625d58] md:text-[15px]">
              <p>
                Wierzę, że sensualność nie potrzebuje określonego rozmiaru,
                wieku ani idealnej pozy. Jest w spojrzeniu, geście, sposobie,
                w jaki poruszasz się i patrzysz na siebie.
              </p>

              <p>
                Podczas sesji tworzę spokojną i bezpieczną przestrzeń,
                w której możesz poczuć się naprawdę sobą. Bez presji,
                bez pośpiechu i bez konieczności bycia kimś innym.
              </p>

              <p>
                Chcę, żeby zdjęcia przypominały Ci nie tylko o tym,
                jak wyglądałaś, ale przede wszystkim o tym,
                jak się wtedy czułaś.
              </p>
            </div>

            {/* PODPIS */}
            <div className="mt-10 border-t border-black/10 pt-7">
              <p className="font-serif text-[28px] italic text-[#292725]">
                Magdalena
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#817a74]">
                Fotografka sensualna
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}