export default {
	logo: (
		<>
			<span className="hidden sm:block font-owners font-medium tracking-wide text-4xl">
				klave
			</span>
		</>
	),
	project: {
		link: 'https://github.com/klave-network'
	},
	chat: {
		link: 'https://discord.gg/MkUxsVeqDW'
	},
	useNextSeoProps() {
		return {
			titleTemplate: '%s – Klave Documentation'
		};
	},
	darkMode: true,
	primaryHue: {
		dark: 165,
		light: 225
	},
	nextThemes: {
		defaultTheme: 'dark'
	},
	// footer: {
	// 	component: <Footer />
	// },
	docsRepositoryBase:
		'https://github.com/secretarium/websites/tree/main/apps/fronts/klave.com'
};
