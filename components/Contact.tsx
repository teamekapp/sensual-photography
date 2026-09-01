"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
event.preventDefault();
setSubmitted(true);
};

return ( <section id="kontakt" className="section bg-[#faf9f7]"> <div className="site-container">
{/* NAGŁÓWEK */} <div className="mx-auto max-w-[720px] text-center"> <p className="eyebrow justify-center">
Kontakt </p>

```
      <h2 className="mt-7 font-serif text-[58px] font-medium leading-[0.95] tracking-[-0.025em] text-[#292725] md:text-[82px]">
        Porozmawiajmy.
      </h2>

      <p className="mx-auto mt-7 max-w-[540px] text-[14px] leading-7 text-[#716d68] md:text-[15px]">
        Masz pomysł na swoją sesję? Napisz do mnie.
        Opowiedz mi trochę o sobie i o tym, czego
        szukasz. Wspólnie stworzymy coś wyjątkowego.
      </p>
    </div>

    {/* KONTAKT + FORMULARZ */}
    <div className="mt-16 grid gap-16 md:mt-20 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
      {/* DANE */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#716d68]">
          Skontaktuj się ze mną
        </p>

        <div className="mt-8 space-y-7">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#918a84]">
              E-mail
            </p>

            <a
              href="mailto:hello@sensualmia.com"
              className="mt-2 inline-block font-serif text-[23px] text-[#292725] transition-opacity hover:opacity-60"
            >
              hello@sensualmia.com
            </a>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#918a84]">
              Telefon
            </p>

            <a
              href="tel:+48123456789"
              className="mt-2 inline-block font-serif text-[23px] text-[#292725] transition-opacity hover:opacity-60"
            >
              +48 123 456 789
            </a>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#918a84]">
              Instagram
            </p>

            <a
              href="#"
              className="mt-2 inline-block font-serif text-[23px] text-[#292725] transition-opacity hover:opacity-60"
            >
              @sensualmia
            </a>
          </div>
        </div>

        <div className="mt-12 h-px w-16 bg-[#b9a294]" />

        <p className="mt-5 max-w-[280px] text-[12px] leading-6 text-[#817a74]">
          Sesje odbywają się w spokojnej i komfortowej
          atmosferze. Nie musisz mieć doświadczenia
          przed obiektywem.
        </p>
      </div>

      {/* FORMULARZ */}
      <div>
        {submitted ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center border border-black/10 px-8 text-center">
            <span className="font-serif text-[42px] italic text-[#292725]">
              Dziękuję.
            </span>

            <p className="mt-5 max-w-[360px] text-[13px] leading-6 text-[#716d68]">
              Twoja wiadomość została przygotowana.
              Wkrótce się z Tobą skontaktuję.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4d4945] underline underline-offset-8"
            >
              Wyślij kolejną wiadomość
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68]"
                >
                  Imię
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Twoje imię"
                  className="form-input mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68]"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Twój e-mail"
                  className="form-input mt-1"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68]"
              >
                Telefon
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Opcjonalnie"
                className="form-input mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716d68]"
              >
                Wiadomość
              </label>

              <textarea
                id="message"
                name="message"
                required
                placeholder="Opowiedz mi o swojej sesji..."
                className="form-input form-textarea mt-1"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn"
              >
                Wyślij zapytanie
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  </div>
</section>

);
}
