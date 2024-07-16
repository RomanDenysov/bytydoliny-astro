import { useState } from "react";
import { TEL_CISLO } from "../config/config";
import Nav from "./Nav";
import LogoSm from "./LogoSm";
import LogoLg from "./LogoLg";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
		console.log("Click");
	};

	return (
		<header
			className={`h-20 z-50 w-full my-auto sticky top-0 ${
				isOpen ? "bg-black" : "bg-background"
			}`}
		>
			<div className="container mx-auto max-w-screen-xl h-full flex items-center justify-between px-6">
				<div className="flex-1 flex items-center justify-start">
					<Nav toggle={toggle} isOpen={isOpen} />
				</div>
				<div className="flex-1 flex z-50 items-center justify-center">
					<a
						href="/"
						aria-label="Logo. Prejsť na úvodnú stránku"
						data-message="Logo. Prejsť na úvodnú stránku"
					>
						<LogoSm width={42} height={40} color={isOpen ? "white" : "black"} />
						<LogoLg
							width={220}
							height={38}
							color={isOpen ? "white" : "black"}
						/>
					</a>
				</div>
				<div
					className="flex-1 flex items-center justify-end"
					data-message={`Otázky? Zavolajte nám na +421 948 123 456 alebo napíšte na: ${TEL_CISLO}`}
				>
					<a
						aria-label={`Button with title: "Mám záujem o byt", and forward to page with URL: contact form`}
						href="/dopyt"
						className="group z-50 max-w-fit w-full h-full max-h-[55px] border-4 border-primary bg-transparent rounded-2xl py-2 px-2 sm:px-6 sm:py-2 hover:bg-primary transition ease-in-out delay-75"
					>
						<button
							className="z-50 w-full h-full flex items-center justify-center text-center font-sans font-semibold text-lg transition ease-in-out delay-75"
							data-message={`Button with title: "Mám záujem o byt" and forward to: contact form`}
						>
							<span
								className={`${
									isOpen ? "text-white" : "text-black"
								} z-50 hidden md:inline-block truncate w-full group-hover:text-black transition ease-in-out delay-75`}
							>
								Mám záujem o byt
							</span>
							<span
								className={`${
									isOpen ? "text-white" : "text-black"
								} z-50 md:hidden truncate w-full group-hover:text-black transition ease-in-out delay-75`}
							>
								Mám záujem
							</span>
						</button>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
