import LogoSm from "./LogoSm";
import LogoLg from "./LogoLg";
import "react-toastify/dist/ReactToastify.css";

const DopytBytov = () => {
	const goBack = () => {
		window.history.back();
	};

	return (
		<div className="max-w-screen-xl h-full mx-auto flex flex-col items-center bg-black">
			<div className="container mx-auto max-w-screen-xl h-20 flex items-center justify-between px-4">
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
			<div className="flex px-6 w-full md:w-1/2 flex-col items-center justify-between gap-12 py-20">
				<span className="text-white text-xl font-semibold text-center">
					Ďakujeme za Váš záujem. Náš maklér Vás bude kontaktovať.
				</span>
				<a
					id="button"
					data-message={`Button with title: Naspäť na domovskú stránku`}
					href={"/"}
					className={`group max-h-[55px] border-4 border-primary bg-transparent rounded-2xl py-2 px-4 sm:px-6 sm:py-2 hover:bg-primary transition ease-in-out delay-75`}
				>
					<button
						aria-label={`Button with title: Naspäť na domovskú stránku`}
						tabIndex={1}
						className="w-full z-20 h-full flex items-center justify-center text-center font-sans font-semibold text-lg transition ease-in-out delay-75"
					>
						<span
							className={`text-xl font-sans z-20 truncate w-full text-white transition ease-in-out delay-75`}
						>
							Naspäť na domovskú stránku
						</span>
					</button>
				</a>
			</div>
		</div>
	);
};

export default DopytBytov;
