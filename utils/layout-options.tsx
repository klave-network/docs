import { source } from '~/utils/source';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { Logo } from '~/components/logo';
import { DocsLayoutProps } from 'fumadocs-ui/layout';
import { NavChildren, SidebarBanner } from '~/app/(docs)/layout.client';


export const baseLayoutOptions: HomeLayoutProps = {
	githubUrl: 'https://github.com/klave-network',
	nav: {
		title: <Logo />,
		children: <NavChildren />,
		enableSearch: false
	},
	links: [
        {
            text: 'Platform',
            url: 'https://app.klave.com',
            external: true
        },
		{
			text: 'Website',
			url: 'https://klave.com',
			external: true
		},
		{
			text: 'Discord',
			url: 'https://discord.gg/MkUxsVeqDW',
			external: true
		}
	]
};

export const docsLayoutOptions: DocsLayoutProps = {
	tree: source.pageTree,
	nav: {
		enabled: false
	},
	sidebar: {
		banner: <SidebarBanner />
	}
};
