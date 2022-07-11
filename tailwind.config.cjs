/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte}"],
	theme: {
		extend: {
			fontFamily: {
				"pt-sans": ["PT Sans", "sans-serif"],
				raleway: ["Raleway", "sans-serif"]
			}
		}
	},
	plugins: []
};
