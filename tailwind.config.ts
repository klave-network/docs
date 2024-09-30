import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,md,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,md,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx,md,mdx}'
	],
	darkMode: 'class', // or 'media' or 'class
	theme: {
		extend: {
			screens: {
				xs: '576px',
				sm: '768px',
				md: '1024px',
				lg: '1280px',
				xl: '1600px',
				betterhover: { raw: '(hover: hover)' }
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				background: '#0C1218',
				'klave-dark-blue': '#00021A',
				'klave-light-blue': '#00BFFF',
				'klave-cyan': '#00FFD5',
				'klave-purple': '#B291ED'
			},
			fontFamily: {
				owners: ['owners, var(--font-openSansMedium)'],
				sans: ['var(--font-openSans)'],
				sansMedium: ['var(--font-openSansMedium)'],
				sansBold: ['var(--font-openSansBold)']
			}
		}
	},
	plugins: []
};
export default config;
