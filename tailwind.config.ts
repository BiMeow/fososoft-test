import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				Raleway: `"Raleway", sans-serif`,
			},
			screens: {
				'dt-exl': { min: '1660px' },
				'dt-l-min': { min: '1366px' },
				'dt-xl': { max: '1660px' },
				'dt-l': { max: '1440px' },
				'dt-sm': { max: '1366px' },
				'tl-l': { max: '1280px' },
				'tl-p': { max: '1000px' },
				mb: { max: '767px' },
			},
			colors: {
				red: '#ED1C24',
				orange: '#F58220',
				green: '#A3EED6',
				darkGreen: '#052B1E',
			},
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
