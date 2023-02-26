/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				ruberoid: ['Ruberoid', 'sans-serif'],
			},
			colors: {
				main: '#FD72FF',
				info: '#2080D2',
				plain: ' #02121D',
				'text-dark': ' #02121D',
				grey: '#C7C6CA',
				primary: 'rgba(1, 5, 24, 0.4)',
				section: 'rgba(1, 5, 24, 0.85)',
				light: 'rgba(10, 6, 30, 0.6)',
			},
		},
	},
	plugins: [],
};
