/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Zwo Pro", "sans-serif"],
			spec: ["Recoleta", "sans-serif"],
		},
		extend: {
			skew: {
				40: "40deg",
				41: "-40deg",
			},
			animation: {
				float: "float 6s ease-in-out infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translate3d(0px, -8px, 0)" },
					"50%": { transform: "translate3d(0px, 8px, 0)" },
				},
			},
			boxShadow: {
				sh: "50px 50px 80px 0 rgba(0, 0, 0, 0.3)",
			},
			colors: {
				white: "#ffffff",
				background: "#cecece;",
				primary: "#BE996D",
				accentLight: "#BBBBBB",
				accentDark: "#4E4E4E",
				accentBlack: "#232323",
			},
			gridTemplateColumns: {
				lokalita: "repeat(2, auto)",
			},
		},
	},
	plugins: [],
};
