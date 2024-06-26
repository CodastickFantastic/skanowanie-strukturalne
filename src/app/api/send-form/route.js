import nodemailer from "nodemailer"
export const dynamic = "force-dynamic"

const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_SMTP_HOST,
    port: process.env.NODEMAILER_SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.NODEMAILER_SMTP_USER,
        pass: process.env.NODEMAILER_SMTP_PASS
    }
})

export async function POST(request) {

    const FORM_DATA = await request.formData();

    const name = FORM_DATA.get("name");
    const surname = FORM_DATA.get("surname");
    const phone = FORM_DATA.get("phone");
    const email = FORM_DATA.get("mail");
    const company = FORM_DATA.get("company");
    const message = FORM_DATA.get("message");
    const rodo = FORM_DATA.get("rodo");
    const marketing = FORM_DATA.get("marketing");

    if (!name) return new Response(JSON.stringify({ message: "Imie jest wymagane", status: 400 }), { status: 400 });
    if (!phone) return new Response(JSON.stringify({ message: "Telefon jest wymagany", status: 400 }), { status: 400 });
    if (!email) return new Response(JSON.stringify({ message: "E-mail jest wymagany", status: 400 }), { status: 400 });
    if (!message) return new Response(JSON.stringify({ message: "Wiadomość jest wymagana", status: 400 }), { status: 400 });
    if (!rodo) return new Response(JSON.stringify({ message: "Zgoda na przetwarzanie danych jest wymagana", status: 400 }), { status: 400 });


    try {
        const sendEmail = await transporter.sendMail({
            from: '"Skanowanie Strukturalne" <info@skanowanie.pl>',
            to: "it.jakub.wojtysiak@gmail.com",
            subject: "Skanowanie Strukturalne - Formularz Kontaktowy",
            text: `
                Imie: ${name}\n
                Nazwisko: ${surname}\n
                Telefon: ${phone}\n
                E-mail: ${email}\n
                Firma: ${company}\n
                Wiadomość: ${message}\n
                Zgoda na przetwarzanie danych: ${rodo}\n
                Zgoda na Marketing: ${marketing}
            `
        })

        return new Response(JSON.stringify({ message: "Wiadomość została wysłana", status: 200 }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Problem z SMTP", status: 500 }), { status: 500 });
    }
}