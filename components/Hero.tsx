import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative min-h-[calc(100svh-68px)] overflow-hidden bg-[#eee7e1]"
    >
      {/* ZDJĘCIE */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Sesja sensualna"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Delikatne rozjaśnienie lewej strony */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7]/80 via-[#faf9f7]/30 to-transparent" />

        {/* Delikatne rozjaśnienie dolnej części */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#faf9f7]/25 to-transparent" />
      </div>

      {/* TREŚĆ */}
      <div className="site-container relative z-10 flex min-h-[calc(100svh-68px)] items-end">
        <div className="max-w-[560px] pt-16 md:pt-20">

          {/* EYEBROW */}
          <div className="opacity-0 animate-fade-up">
            <p className="eyebrow">
              Fotografia sensualna
            </p>
          </div>

          {/* NAGŁÓWEK */}
          <h1 className="mt-7 max-w-[620px] font-serif text-[52px] font-medium leading-[0.94] tracking-[-0.025em] text-[#292725] opacity-0 animate-fade-up animation-delay-100 sm:text-[64px] md:text-[78px] lg:text-[92px]">
            Twoja historia.
            <br />
            <span className="italic">
              Twoje piękno.
            </span>
          </h1>

          {/* OPIS */}
          <p className="mt-8 max-w-[450px] text-[14px] leading-7 text-[#5f5a55] opacity-0 animate-fade-up animation-delay-200 md:text-[15px]">
            Indywidualne sesje sensualne stworzone z myślą o Twojej
            kobiecości, naturalności i pewności siebie.
          </p>

          {/* PRZYCISK */}
          <div className="mt-9 opacity-0 animate-fade-up animation-delay-300">
            <a href="#kontakt" className="btn">
              Umów sesję
            </a>
          </div>
        </div>
      </div>

      {/* DOLNY ZNACZNIK */}
      <a
        href="#o-mnie"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[#5f5a55] md:flex"
      >
        <span>Przewiń</span>
        <span className="h-9 w-px bg-[#8c837c]" />
      </a>
    </section>
  );
}