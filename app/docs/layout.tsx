import { DocsLayout } from 'fumadocs-ui/layout';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import type { ReactNode } from 'react';
import { docsOptions } from '../layout.config';
import { PlugZap, Library, type LucideIcon } from 'lucide-react';

type ToggleOption = {
	title: string;
	description: string;
	url: string;
	icon: LucideIcon;
	color: string;
};

const toggleOptions: ToggleOption[] = [
	{
		title: 'SDK',
		description: 'Klave SDK',
		url: '/docs/sdk',
		icon: Library,
		color: '262, 72%, 75%'
	},
	{
		title: 'Connector',
		description: 'Secretarium Connector',
		url: '/docs/connector',
		icon: PlugZap,
		color: '170, 100%, 50%'
	}
];

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			{...docsOptions}
			sidebar={{
				banner: (
					<RootToggle
						options={toggleOptions.map((option) => {
							return {
								title: option.title,
								description: option.description,
								url: option.url,
								icon: (
									<option.icon
										className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
										style={{
											backgroundColor: `hsl(${option.color}/.3)`,
											color: `hsl(${option.color})`
										}}
									/>
								)
							};
						})}
					/>
				)
			}}
		>
			{children}
		</DocsLayout>
	);
}
