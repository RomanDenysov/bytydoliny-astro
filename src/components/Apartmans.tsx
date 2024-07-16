import { useState } from "react";
import { Byty, filtertHint } from "../data/ponuka-bytov.ts";
const filterButtons = [
	"Všetky byty",
	"Iba garsoniéry",
	"Iba 1,5 - izbové byty",
	"Iba 2 - izbové byty",
	"Iba 3 - izbové byty",
];

const Apartmans = () => {
	const [currentFilter, setCurrentFilter] = useState<string>("Všetky byty");

	const handleFilterChange = (filter: string) => {
		setCurrentFilter(filter);
	};

	const getButtonClasses = (button: string) => {
		return `group max-w-fit z-20 w-full h-full min-h-[55px] border-4 ${
			currentFilter === button
				? "border-primary bg-primary"
				: "border-primary bg-transparent"
		} rounded-2xl hover:bg-primary whitespace-nowrap px-4 transition ease-in-out delay-75`;
	};

	const filteredApartments = Byty.filter((apartment) => {
		if (currentFilter === "Všetky byty") return true;
		if (
			currentFilter === "Iba garsoniéry" &&
			apartment.filter === "1-izbovy"
		)
			return true;
		if (
			currentFilter === "Iba 1,5 - izbové byty" &&
			apartment.filter === "1.5-izbovy"
		)
			return true;
		if (
			currentFilter === "Iba 2 - izbové byty" &&
			apartment.filter === "2-izbovy"
		)
			return true;
		if (
			currentFilter === "Iba 3 - izbové byty" &&
			apartment.filter === "3-izbovy"
		)
			return true;
		return false;
	});

	return (
		<section className="flex flex-col items-center justify-center">
			<div
				data-message={filtertHint}
				className="flex items-center flex-wrap justify-center py-16 px-8 gap-6"
				id="shadow"
			>
				<div aria-hidden="true" className="hidden">
					<span aria-label="Rozdel filtracie pre ponuku bytov">
						{filtertHint}
					</span>
				</div>
				{filterButtons.map((button, index) => (
					<button
						onClick={() => handleFilterChange(button)}
						key={index + 1}
						className={getButtonClasses(button)}
						// className="group max-w-fit z-20 w-full h-full min-h-[55px] border-4 border-primary bg-transparent rounded-2xl focus:bg-primary whitespace-nowrap px-4 transition ease-in-out bg-background delay-75"
						aria-label={`Filter: ${button.toLowerCase()}`}
					>
						<span className="w-full text-xl font-semibold text-center rounded-2xl transition ease-in-out bg-transparent group-focus:bg-primary delay-75">
							{button}
						</span>
					</button>
				))}
			</div>
			<div
				key={currentFilter}
				data-message="Byty v ponuke"
				className="grid place-items-center justify-between place-content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative"
			>
				{filteredApartments.map((item) => {
					const { id, title1, title2, badges, hrefPDF, styler } =
						item;
					const PDF_BUTTON = "Pôdorys bytu";
					const PRICE_BUTTON = "Vyžiadať cenu";
					const DISABLE_PRICE_BUTTON = "Byt je rezervovaný";

					const priceButtonText = styler
						? DISABLE_PRICE_BUTTON
						: PRICE_BUTTON;

					const stylex = styler
						? "bg-black text-gray-100"
						: "bg-background text-black";

					const badgeStyle = styler
						? "bg-accentDark text-gray-100"
						: "bg-accentLight text-black";

					const hrefPrice = `/dopyt?byt=${encodeURIComponent(
						title1.toLocaleLowerCase().trim().replace(/ /g, "-")
					)}&id=${id}`;

					const zindex = `z-[${id}]`;

					return (
						<>
							<div
								key={id + 1}
								id="shadow"
								data-message={`Byt v ponuke: ${title1} ${title2}`}
								className={`shadow-sh w-full h-fit flex flex-col items-start justify-between ${zindex} gap-6 px-5 py-12 rounded-xl ${stylex} flex-1 sm:max-w-[350px] max-w-full min-w-[300px] sm:min-w-[330px] max-h-[450px] min-h-[400px] transition ease-in-out bg-background delay-75`}
							>
								<h3 className="text-2xl font-spec md:text-3xl font-bold">
									{title1}
									<br />
									{title2}
								</h3>
								<div className="flex flex-col items-start justify-center gap-2">
									{badges.map((badge, index) => (
										<span
											key={index + 1}
											aria-label={badge.toLowerCase()}
											className={`${badgeStyle} px-2 py-1 rounded-lg text-xl font-semibold cursor-pointer`}
										>
											{badge}
										</span>
									))}
								</div>
								<div className="flex flex-col w-full items-center  justify-between gap-4">
									<a
										className="group max-w-full z-20 w-full h-full max-h-[55px] border-4 border-primary bg-transparent rounded-2xl py-2 px-2 sm:px-6 sm:py-2 hover:bg-primary transition ease-in-out bg-background delay-75"
										href={hrefPDF}
										aria-label={`Otvorit plan bytu ${title1.toLowerCase()} ${title2.toLowerCase()}`}
										target="_blank"
										data-message={`Open PDF for ${title1} ${title2}`}
									>
										<button
											className="w-full text-xl font-semibold text-center rounded-2xl transition ease-in-out bg-transparent hover:bg-primary delay-75"
											tabIndex={1}
										>
											{PDF_BUTTON}
										</button>
									</a>
									<a
										className={`group max-w-full z-20 w-full h-full max-h-[55px] border-4 ${
											styler
												? "border-accentDark"
												: "border-primary"
										}  bg-transparent rounded-2xl py-2 px-2 sm:px-6 sm:py-2 ${
											styler
												? "cursor-default"
												: "hover:bg-primary transition ease-in-out bg-background delay-75"
										}`}
										href={hrefPrice}
										data-message={`Open form for PRICE asking for ${title1} ${title2}`}
									>
										<button
											className={`w-full ${
												styler ? "text-accentDark" : ""
											} text-xl font-semibold text-center rounded-2xl transition ease-in-out bg-transparent ${
												styler
													? ""
													: "hover:bg-primary delay-75"
											}`}
											disabled={styler}
											aria-label={`Vyziadat cenu bytu ${title1.toLowerCase()} ${title2.toLowerCase()}`}
											tabIndex={1}
										>
											{priceButtonText}
										</button>
									</a>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</section>
	);
};

export default Apartmans;
