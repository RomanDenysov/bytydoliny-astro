import { useEffect, useState } from "react";
import LogoSm from "./LogoSm";
import LogoLg from "./LogoLg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { navigate } from "astro:transitions/client";

const DopytBytov = () => {
	const [form, setForm] = useState({
		name: "",
		surname: "",
		email: "",
		phone: "",
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (loading) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	});

	const url = new URL(window.location.href.toString());
	const apartman = url.searchParams.get("byt");

	const handleApartman = (): string => {
		return apartman || "bez apartmanu";
	};
	const notify = () =>
		toast.success("Váš email bol úspešne odoslaný!", {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		// Проверка валидности email
		if (!/\S+@\S+\.\S+/.test(form.email)) {
			alert("Prosím zadajte platný e-mail");
			setLoading(false);
			return;
		}

		const apartmanValue = handleApartman();

		const templateParams = {
			name: form.name,
			surname: form.surname,
			email: form.email,
			phone: form.phone,
			apartman: apartmanValue,
		};

		console.log("Apartman2: ", templateParams.apartman);

		try {
			await emailjs.send(
				"service_3b6g2zo", // Замени на свой serviceID
				"template_zwei3bw", // Замени на свой templateID
				templateParams,
				"3BusKWbndfPh1BbGw" // Замени на свой userID
			);

			await emailjs.send(
				"service_3b6g2zo", // Замени на свой serviceID
				"template_vqdfuam", // Замени на свой templateID
				templateParams,
				"3BusKWbndfPh1BbGw" // Замени на свой userID
			);
			navigate("/dakujeme");
		} catch (error) {
			console.error("Failed to send the email: ", error);
			toast.error("Nastala chyba pri odosielaní emailu!", {
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} finally {
			setLoading(false);
		}
	};

	const goBack = () => {
		window.history.back();
	};

	return (
		<div className="max-w-screen-xl min-h-full h-full mx-auto flex flex-1 flex-col items-center bg-black">
			<div className="container mx-auto max-w-screen-xl h-20 flex items-center justify-start px-4">
				<button
					aria-label="Toggle Navigation Menu"
					onClick={goBack}
					id="nav-button"
					className="group outline-none z-50 cursor-pointer group w-10 h-10 flex flex-col items-center justify-center gap-2 transition ease-in-out delay-75"
				>
					<span
						id="nav-button-line-1"
						className={`h-1 w-8 z-50 bg-white translate-y-[4px] rotate-[135deg] rounded-lg transition ease-in-out delay-75`}
					></span>
					<span
						id="nav-button-line-2"
						className={`h-1 w-8 z-50 bg-white translate-y-[-8px] rotate-[45deg] rounded-lg transition ease-in-out delay-75`}
					></span>
				</button>
				<div className="flex-1 flex z-50 items-center justify-center">
					<a
						href="/"
						aria-label="Logo. Prejsť na úvodnú stránku"
						data-message="Logo. Prejsť na úvodnú stránku"
						className="mr-10"
					>
						<LogoSm width={42} height={40} color={"white"} />
						<LogoLg width={220} height={38} color={"white"} />
					</a>
				</div>
			</div>
			<div className="flex flex-1 px-6 w-full max-h-full h-full md:w-1/2 flex-col items-center justify-between gap-12 py-12">
				<span className="text-white text-xl font-semibold fotn-sans px-2">
					Vyplňte prosím tento formulár a nechajte si vypracovať
					cenovú ponuku na mieru. Zároveň tak získate možnosť
					rezervovať si byt ako prvý.
				</span>
				<form
					onSubmit={handleSubmit}
					id="form"
					className="flex flex-col flex-1 h-full w-full items-center justify-start gap-5"
				>
					<input
						id="name"
						placeholder="Meno"
						className="flex-1 bg-transparent active:bg-transparent border-primary border-4 pl-5 py-4 rounded-2xl max-w-full md:min-w-[400px] w-full h-12 text-primary placeholder:text-primary placeholder:text-base placeholder:md:text-xl font-semibold placeholder:font-semibold"
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
					/>
					<input
						id="surname"
						placeholder="Priezvisko"
						className="flex-1 bg-transparent active:bg-transparent border-primary border-4 pl-5 py-4 rounded-2xl max-w-full md:min-w-[400px] w-full h-12 text-primary placeholder:text-primary placeholder:text-base placeholder:md:text-xl font-semibold placeholder:font-semibold"
						type="text"
						name="surname"
						value={form.surname}
						onChange={handleChange}
					/>
					<input
						id="email"
						placeholder="Emailový kontakt"
						className="flex-1 bg-transparent active:bg-transparent border-primary border-4 pl-5 py-4 rounded-2xl max-w-full md:min-w-[400px] w-full h-12 text-primary placeholder:text-primary placeholder:text-base placeholder:md:text-xl font-semibold placeholder:font-semibold"
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
					/>
					<input
						id="phone"
						placeholder="Telefonický kontakt"
						className="flex-1 bg-transparent active:bg-transparent border-primary border-4 pl-5 py-4 rounded-2xl max-w-full md:min-w-[400px] w-full h-12 text-primary placeholder:text-primary placeholder:text-base placeholder:md:text-xl font-semibold placeholder:font-semibold"
						type="phone"
						name="phone"
						value={form.phone}
						onChange={handleChange}
					/>
					<input
						type="hidden"
						name="apartman"
						value={handleApartman()}
					/>
					<button
						type="submit"
						id="submit-button"
						disabled={loading}
						className={`flex-1 mt-4 w-full ${
							loading ? "bg-black" : "bg-primary"
						} group border-4 truncate border-primary py-3 text-center rounded-2xl max-w-full md:min-w-[400px] h-12 text-black text-base md:text-xl hover:bg-transparent transition ease-in-out delay-75`}
					>
						<span className="m-auto text-xl group-hover:text-primary font-semibold transition ease-in-out delay-75">
							{loading ? (
								<div className="flex justify-center items-center py-1">
									<div className="animate-spin rounded-full h-5 w-5 border-b-[4px] border-primary"></div>
								</div>
							) : (
								"Odoslať"
							)}
						</span>
					</button>
				</form>
				<span className="text-white text-xl font-semibold fotn-sans px-2">
					Odoslaním formulára súhlasíte so{" "}
					<a href="/gdpr" className="underline">
						spracovaním osobných údajov
					</a>
					.
				</span>
			</div>
			<div className=" bg-black w-full h-screen"></div>
		</div>
	);
};

export default DopytBytov;
