import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      message,
    } = body;

    // Podstawowa walidacja
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Wypełnij wymagane pola.",
        },
        { status: 400 }
      );
    }

    // Wysyłamy wiadomość
    const { error } = await resend.emails.send({
      from: "Formularz kontaktowy <onboarding@resend.dev>",
      to: ["teamekapp@gmail.com"],
      replyTo: email,
      subject: `Nowe zapytanie od ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #292725;">
          <h2>Nowe zapytanie z formularza</h2>

          <p>
            <strong>Imię:</strong><br />
            ${name}
          </p>

          <p>
            <strong>E-mail:</strong><br />
            ${email}
          </p>

          ${
            phone
              ? `
                <p>
                  <strong>Telefon:</strong><br />
                  ${phone}
                </p>
              `
              : ""
          }

          <p>
            <strong>Wiadomość:</strong><br />
            ${message.replace(/\n/g, "<br />")}
          </p>

          <hr />

          <p style="font-size: 12px; color: #777;">
            Wiadomość wysłana z formularza kontaktowego
            strony sensualmia.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Nie udało się wysłać wiadomości.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Wystąpił błąd podczas wysyłania wiadomości.",
      },
      { status: 500 }
    );
  }
}