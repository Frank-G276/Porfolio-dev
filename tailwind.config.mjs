import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,,ts,tsx,}',
		'./node_modules/flowbite/**/*.js'	
	],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				primary: '#f6f6f6', // Example primary color
				secondary: '#9333EA', // Example secondary color
			},
			backgroundImage: {
				'gradiente-dark': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))',
				'gradiente-light': 'radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))',
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		typography
	],
}
