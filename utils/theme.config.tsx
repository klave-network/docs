import { Logo } from '@/components/logo';
import { Footer } from '@/components/footer';

export default {
	logo: (
		<div className="flex">
			<Logo />
			<span className="font-owners font-medium tracking-wide text-2xl  text-black dark:text-white">klave</span>
            <span className="my-auto font-sansBold">docs</span>
		</div>
	),
	footer: {
		component: <Footer />
	},
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
	docsRepositoryBase: 'https://github.com/secretarium/websites/tree/main/apps/fronts/klave.com'
};
