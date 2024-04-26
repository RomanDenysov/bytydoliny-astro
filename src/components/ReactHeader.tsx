import React, { useState } from "react";
import { Icon } from "astro-icon/components"; // предполагаем, что у тебя есть такой компонент
import Navbar from "./Navbar.astro"; // твой компонент Navbar
import ButtonP from "./ButtonP.astro"; // твой компонент ButtonP
import { TEL_CISLO } from "../config/config";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="h-20 z-50 w-full flex items-center justify-between px-2 my-auto sticky top-0 bg-background">
			<div className="flex-1 flex items-center justify-start"></div>
			<div className="flex-1 flex items-center justify-center">
				<a
					href="/"
					aria-label="Logo. Prejsť na úvodnú stránku"
					data-message="Logo. Prejsť na úvodnú stránku"
				></a>
			</div>
			<div
				className="flex-1 flex items-center justify-end"
				data-message={`Otázky? Zavolajte nám na +421 948 123 456 alebo napíšte na: ${TEL_CISLO}`}
			></div>
			<button
				className="w-10 h-10 bg-white cursor-pointer flex flex-col items-center justify-center gap-2 transition ease-in-out delay-150"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<span
					className={`h-1 w-8 bg-black rounded-lg transition-transform duration-150 ${
						menuOpen ? "rotate-135 translate-y-2" : ""
					}`}
				></span>
				<span
					className={`h-1 w-8 bg-black rounded-lg transition-transform duration-150 ${
						menuOpen ? "rotate-45 -translate-y-2" : ""
					}`}
				></span>
			</button>
			{menuOpen && (
				<ul className="bg-black w-screen h-screen fixed top-0 left-0 z-40 flex flex-col items-center justify-center text-white">
					<li>
						<a href="index">Home</a>
					</li>
					<li>
						<a href="about">About</a>
					</li>
					<li>
						<a href="contact">Contact</a>
					</li>
				</ul>
			)}
		</header>
	);
};

export default Header;
