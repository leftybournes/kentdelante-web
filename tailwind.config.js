/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html"
	],
	theme: {
		fontFamily: {
			"josefin": ["Josefin Sans", "Helvetica", "sans-serif"]
		},
		extend: {
			animation: {
				"spin-slow": "spin 5s linear infinite",
				"spin-slow-reverse": "spin 5s linear infinite reverse"
			}
		},
	},
	plugins: [],
}

