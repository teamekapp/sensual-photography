export default function Footer() {
    return ( <footer className="border-t border-black/10 bg-[#f3eee9]"> <div className="site-container">
    {/* GŁÓWNA CZĘŚĆ */} <div className="py-20 text-center md:py-28"> <p className="eyebrow justify-center">
    Twoja historia zaczyna się tutaj </p>
    
    ```
          <h2 className="mt-7 font-serif text-[48px] font-medium leading-none tracking-[-0.02em] text-[#292725] md:text-[72px]">
            Gotowa na swoją
            <br />
            <span className="italic">sesję?</span>
          </h2>
    
          <div className="mt-9">
            <a href="#kontakt" className="btn">
              Umów sesję
            </a>
          </div>
        </div>
    
        {/* LINIA */}
        <div className="h-px bg-black/10" />
    
        {/* LINKI */}
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <div className="flex items-center gap-7">
            <a
              href="#portfolio"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68] transition-colors hover:text-[#292725]"
            >
              Portfolio
            </a>
    
            <a
              href="#o-mnie"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68] transition-colors hover:text-[#292725]"
            >
              O mnie
            </a>
    
            <a
              href="#kontakt"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68] transition-colors hover:text-[#292725]"
            >
              Kontakt
            </a>
          </div>
    
          <div className="flex items-center gap-7">
            <a
              href="#"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68] transition-colors hover:text-[#292725]"
            >
              Instagram
            </a>
    
            <a
              href="mailto:hello@sensualmia.com"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68] transition-colors hover:text-[#292725]"
            >
              E-mail
            </a>
          </div>
        </div>
    
        {/* DÓŁ */}
        <div className="border-t border-black/10 py-7">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-serif text-[24px] italic text-[#292725]">
                Magdalena Sensual
              </p>
    
              <p className="mt-1 text-[7px] font-medium uppercase tracking-[0.3em] text-[#817a74]">
                Photography
              </p>
            </div>
    
            <p className="text-[9px] tracking-[0.08em] text-[#918a84]">
              © {new Date().getFullYear()} Magdalena Sensual Photography
            </p>
    
            <a
              href="#start"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68] transition-colors hover:text-[#292725]"
            >
              ↑ Na górę
            </a>
          </div>
        </div>
      </div>
    </footer>

    
    );
    }
    