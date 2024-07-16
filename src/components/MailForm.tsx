import { navigate } from "astro:transitions/client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MailForm = () => {
	const [email, setEmail] = useState("");
	const notify = () =>
		toast.success("Váš email bol úspešne odoslaný!", {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Проверка валидности email
		if (!/\S+@\S+\.\S+/.test(email)) {
			alert("Prosím zadajte platný e-mail");
			return;
		}

		const data = new FormData();
		data.append("EMAIL", email);

		// Отправляем данные на Mailchimp
		try {
			await fetch(
				"https://bytydoliny.us8.list-manage.com/subscribe/post?u=7d54817594bc617c92f842c6f&id=06653521a3",
				{
					method: "POST",
					body: data,
					mode: "no-cors",
				}
			);
			navigate("/subscribe");
			// Обработка успешной отправки
		} catch (error) {
			console.error("Error:", error);
			toast.error("Nastala chyba pri odosielaní emailu!", {
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		}
	};

	return (
		<div className="mx-auto">
			<ToastContainer />
			<form
				onSubmit={handleSubmit}
				id="form"
				className="flex w-full h-full items-start justify-start gap-5"
			>
				<input
					id="email"
					placeholder="Sem zadajte Váš email"
					className="flex-2 bg-transparent border-primary border-4 pl-5 py-4 rounded-2xl max-w-full md:min-w-[400px] w-full h-12 text-primary placeholder:text-primary placeholder:text-base placeholder:md:text-xl font-semibold placeholder:font-semibold"
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button
					type="submit"
					id="submit-button"
					className="flex-1 bg-primary group border-4 truncate border-primary text-center rounded-2xl max-w-full min-w-24 h-12 text-black text-base md:text-xl hover:bg-transparent transition ease-in-out delay-75"
				>
					<span className="m-auto text-xl group-hover:text-primary font-semibold transition ease-in-out delay-75">
						Odoslať
					</span>
				</button>
			</form>
		</div>
	);
};

export default MailForm;
