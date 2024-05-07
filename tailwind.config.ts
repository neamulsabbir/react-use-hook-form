import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontSize: {
				sm: "0.75rem",
				base: "0.875rem",
				xl: "1.25rem",
				lg: "1.42857rem",
				"2xl": "1.563rem",
				"3xl": "1.953rem",
				"4xl": "2.25rem",
			},
			colors: {
				primary: "#2E9899",
				secondary: "#11233A",
				lightGreen: "#008080",
				default: "#F6F9F9",
				deepGrey: "#5F5F5F",
				border: "#E4E4E4",
			},
		},
	},
	plugins: [],
});
export default config;
