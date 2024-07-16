import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["ff-zwo-web-pro", ...defaultTheme.fontFamily.sans],
			spec: ["Recoleta", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			skew: {
				40: "40deg",
				41: "-40deg",
			},
			animation: {
				float: "float 6s ease-in-out infinite",
				scale: "scale 0.5s ease-in-out",
				dropdown: "dropdown 0.5s ease-in-out",
				opacity: "opacity 0.5s ease-in-out",
			},
			keyframes: {
				float: {
					"0%, 100%": {
						transform: "translate3d(0px, -1px, 0)",
					},
					"50%": {
						transform: "translate3d(0px, 1px, 1px)",
					},
				},
				scale: {
					"0%": {
						transform: "scale(0)",
						opacity: 0,
					},
					"100%": {
						transform: "scale(1)",
						opacity: 1,
					},
				},
				dropdown: {
					"0%": {
						opacity: 0,
						transform: "translateY(-100%)",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0%)",
					},
				},
				opacity: {
					"0%": {
						opacity: 0,
					},
					"100%": {
						opacity: 1,
					},
				},
			},
			boxShadow: {
				sh: "50px 50px 80px 0 rgba(0, 0, 0, 0.3)",
			},
			translate: {
				line1: "translate-y-[4px]",
				line2: "translate-y-[-8px]",
			},
			rotate: {
				line1: "rotate-[135deg]",
				line2: "rotate-[45deg]",
			},
			colors: {
				white: "#ffffff",
				background: "#cecece",
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
