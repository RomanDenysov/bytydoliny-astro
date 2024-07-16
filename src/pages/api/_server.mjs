import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const port = 3000; // Можешь выбрать любой свободный порт
app.use(cors());
// Настройка транспорта для nodemailer
const transporter = nodemailer.createTransport({
	host: "smtp.m1.websupport.sk",
	port: 465,
	secure: true,
	auth: {
		user: "makler@bytydoliny.sk",
		pass: "Ct9q;s&p::",
	},
});

// Middleware для разбора JSON-форматированных тел запросов
app.use(bodyParser.json());

// Маршрут для отправки email
app.post("/send-email", async (req, res) => {
	console.log("REQUEST BODY: ", req.body.name);

	const { email, name, surname, phone, apartman } = req.body;

	const mailOptions = {
		from: '"Váš web" <makler@bytydoliny.sk>',
		to: "fedorko@smash.company, info@urbanreal.sk",
		subject: `Nová žiadosť o ponuku od ${email}`,
		html: `
      E-mail: ${email}<br>
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
		const info2 = await transporter.sendMail(mailOptions2);
		console.log("Message sent: %s", info.messageId);
		console.log("Message2 sent: %s", info2.messageId);
		res.status(200).send("Message has been sent");
	} catch (error) {
		console.error("Mailer Error:", error);
		res.status(500).send("Failed to send email");
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
