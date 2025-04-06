// tailwind.config.ts
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			},
			colors: {
				// Example custom colors - adjust as needed
				primary: "#0D47A1", // Dark Blue
				secondary: "#1976D2", // Medium Blue
				accent: "#42A5F5", // Light Blue
				lightBg: "#F8F9FA", // Very Light Gray/Off-white
				darkText: "#212529", // Dark Gray
				mediumText: "#495057",
				lightText: "#6C757D"
			},
			animation: {
				fadeInUp: "fadeInUp 0.5s ease-out forwards",
				fadeIn: "fadeIn 0.5s ease-out forwards",
				animationDelay: {
					"100": "100ms",
					"200": "200ms"
				}
			},
			keyframes: {
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				}
			}
		}
	},
	plugins: []
};
