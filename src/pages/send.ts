// src/pages/api/sendmail.json.ts
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "smtp.m1.websupport.sk",
	port: 465,
	secure: true,
	auth: {
		user: "makler@bytydoliny.sk",
		pass: "Ct9q;s&p::",
	},
});

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json(); // Try to parse incoming JSON safely
	const { name, surname, email, phone, apartman } = data;

	if (!name || !surname || !email || !phone) {
		return new Response(
			JSON.stringify({ message: "Missing required fields" }),
			{ status: 400, headers: { "Content-Type": "application/json" } }
		);
	}

	const mailOptions = {
		from: '"Váš web" <makler@bytydoliny.sk>',
		to: "fedorko@smash.company, info@urbanreal.sk",
		subject: `Nová žiadosť o ponuku od ${email}`,
		html: `E-mail: ${email}<br>
				Meno: ${name} ${surname}<br>
				Telefónne číslo: ${phone}<br>
				Apartmán: ${apartman}<br>
    `,
	};

	const mailOptions2 = {
		from: '"Byty Doliny" <makler@bytydoliny.sk>',
		to: `${email}`,
		subject: `Ďakujeme za Váš záujem o byt v projekte Byty Doliny`,
		html: `	<h3>Ďakujeme za Váš záujem o byt v projekte Byty Doliny.</h3>
				<p>Náš maklér Vás bude čoskoro kontaktovať.</p>
				<p>Vaše kontaktné údaje:</p>
				<i>
				- emailový kontakt: ${email}
				</i>
				<br>
				<i>
				- telefón: ${phone}
				</i>
				<br>
				<br>
				<span>
				S pozdravom,
				<br>
				Byty Doliny
				</span>`,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log("Message sent: %s", info.messageId);
		// Отправка второго письма
		const info2 = await transporter.sendMail(mailOptions2);
		console.log("Message2 sent: %s", info2.messageId);
		return new Response(
			JSON.stringify({ message: "Success! Emails sent." }),
			{
				status: 200,
			}
		);
	} catch (error: any) {
		console.error("Mailer Error:", error);
		return new Response(JSON.stringify({ message: "Invalid request" }), {
			status: 400,
		});
	}
};
