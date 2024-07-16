import { useEffect, useState } from "react";
import { NAVBAR_ITEMS } from "../config/config";
import FB from "./FB";
import Inst from "./Inst";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { navigate } from "astro:transitions/client";

type NavProps = {
	isOpen: boolean;
	toggle: () => void;
};

const Nav = ({ isOpen, toggle }: NavProps) => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const line1 = isOpen
		? "bg-white translate-y-[4px] rotate-[135deg]"
		: "bg-black";
	const line2 = isOpen
		? "bg-white translate-y-[-8px] rotate-[45deg]"
		: "bg-black";

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

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		// Проверка валидности email
		if (!/\S+@\S+\.\S+/.test(email)) {
			alert("Prosím zadajte platný e-mail");
			setLoading(false);
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
			setLoading(false);
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

	return (
		<nav className="w-10 h-10 ">
			<button
				aria-label="Toggle Navigation Menu"
				onClick={toggle}
				id="nav-button"
				className="group outline-none z-50 cursor-pointer group w-10 h-10 flex flex-col items-center justify-center gap-2 transition ease-in-out delay-75"
			>
				<span
					id="nav-button-line-1"
					className={`h-1 w-8 z-50 ${line1} rounded-lg transition ease-in-out delay-75`}
				></span>
				<span
					id="nav-button-line-2"
					className={`h-1 w-8 z-50 ${line2} rounded-lg transition ease-in-out delay-75`}
				></span>
			</button>
			{isOpen ? (
				<div
					id="nav-links"
					className="w-screen h-full bg-black fixed top-20 left-0 z-40 pb-40 transition ease-in-out delay-75"
				>
					<div className="container mx-auto max-w-6xl scroll-mb-40 w-full max-h-full flex flex-col md:flex-row items-start justify-start md:justify-center gap-16 md:gap-x-24 lg:gap-x-60 xl:gap-80 px-10 py-5 sm:py-10 md:px-10 md:py-10 xl:px-20 xl:py-20 overflow-auto">
						<ul className=" text-2xl md:text-3xl font-medium flex flex-col items-start justify-start gap-4">
							{NAVBAR_ITEMS.map((item) => (
								<li
									key={item.id}
									id="nav-link"
									aria-label={`Navigate to ${item.name}`}
									className={`w-full h-full md:h-10 text-white truncate`}
								>
									<a
										href={item.link}
										className="w-full h-full font-spec truncate hover:text-primary hover:translate-x-4 transition ease-in-out delay-75 "
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
						<div>
							<div className="flex flex-col items-start justify-start gap-16 md:gap-20">
								<div className="flex flex-col items-start justify-start gap-7">
									<span className="text-white max-w-full md:max-w-[350px] font-semibold text-base md:text-xl">
										Aktuálne informácie o projekte Byty Doliny do Vášho emailu
									</span>
									<form
										onSubmit={handleSubmit}
										className="flex w-full h-full flex-col items-start justify-start gap-5"
									>
										<input
											id="email"
											placeholder="Sem zadajte Váš email"
											className="bg-transparent border-4 border-primary pl-5 py-4 rounded-2xl max-w-full md:max-w-[350px] w-full h-12 text-primary placeholder:text-primary placeholder:text-base placeholder:md:text-xl font-semibold placeholder:font-semibold"
											type="email"
											name="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
										<button
											type="submit"
											id="submit-button"
											disabled={loading}
											className="bg-primary group border-4 truncate border-primary text-center rounded-2xl max-w-full md:max-w-[350px] w-full h-12 text-black text-base md:text-xl hover:bg-transparent transition ease-in-out delay-75 "
										>
											<span className="m-auto text-xl group-hover:text-primary font-semibold transition ease-in-out delay-75 ">
												{loading ? (
													<div className="flex justify-center items-center">
														<div className="animate-spin rounded-full h-5 w-5 border-b-[4px] border-primary"></div>
													</div>
												) : (
													"Odoslať"
												)}
											</span>
										</button>
									</form>
								</div>
								<div className="flex flex-col items-start justify-start gap-5">
									<span className="text-white max-w-full md:max-w-[350px] font-semibold text-base md:text-xl">
										Aktuálne informácie o projekte Byty Doliny na sociálnych
										sieťach
									</span>
									<div className="flex items-start justify-center gap-5">
										<a
											href="https://www.facebook.com/bytydoliny "
											className="flex items-center justify-center"
											target="_blank"
										>
											<FB width={30} height={30} color="#BE996D" />
										</a>
										{/* <a href="#inst">
											<Inst width={30} height={30} color="#BE996D" />
										</a> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</nav>
	);
};

export default Nav;
