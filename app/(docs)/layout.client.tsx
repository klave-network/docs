'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { ChevronLeft, Home, Library, type LucideIcon, PlugZap, Sparkles } from 'lucide-react';
import { cn } from '~/lib/utils';
import { modes } from '~/utils/modes';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';

type Mode = 'sdk' | 'connector' | null | undefined;

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
		url: '/sdk',
		icon: Library,
		color: 'bg-gradient-to-b from-muted/50 to-primary/60 text-klave-strong-blue dark:to-secondary/60 dark:text-klave-blue'
	},
	{
		title: 'Connector',
		description: 'Secretarium Connector',
		url: '/connector',
		icon: PlugZap,
		color: 'bg-gradient-to-b from-muted/50 to-secondary/60 text-klave-strong-teal dark:to-primary/60 dark:text-klave-teal'
	}
];

const itemVariants = cva('rounded-md px-2 py-1 transition-colors hover:text-accent-foreground', {
	variants: {
		active: {
			true: 'text-accent-foreground'
		},
		mode: {
			connector: 'bg-[hsl(var(--hiro))]',
			sdk: 'bg-background'
		}
	},
	compoundVariants: [
		{
			active: true,
			mode: 'connector',
			className: 'bg-secondary/60 text-accent-foreground dark:bg-primary/60'
		},
		{
			active: true,
			mode: 'sdk',
			className: 'bg-primary/30 text-accent-foreground dark:bg-secondary/60'
		}
	]
});

export function Body({ children }: { children: ReactNode }): JSX.Element {
	const mode = useMode();
	// might need to remove width styles
	return <div className={cn(mode, 'max-w-container mx-auto size-full')}>{children}</div>;
}

export function NavChildren(): JSX.Element {
	const mode = useMode();

	const filteredModes = modes.filter((m) => m.param !== 'guides');

	return (
		<div className="rounded-md border bg-background p-1 text-sm text-muted-foreground max-md:absolute max-md:left-[50%] max-md:translate-x-[-50%]">
			{filteredModes.map((m) => (
				<Link
					key={m.param}
					href={`/${m.param}`}
					className={cn(
						itemVariants({
							active: mode === m.param,
							mode: mode === m.param ? (m.param as Mode) : undefined
						})
					)}
				>
					<div className="inline-flex items-center gap-2">
						{m.name}
					</div>
				</Link>
			))}
		</div>
	);
}

export function useMode(): string | undefined {
	const { slug } = useParams();
	return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}

export function SidebarBanner() {
	const pathname = usePathname();

	return (
		<>
			<Link
				href="/"
				className={cn(
					'flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 font-medium',
					pathname === '/'
						? 'bg-fd-primary/10 text-fd-primary'
						: 'hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none'
				)}
			>
				<Home />
				Home
			</Link>
			<Link
				href="/vision"
				className={cn(
					'flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 font-medium',
					pathname === '/vision'
						? 'bg-fd-primary/10 text-fd-primary'
						: 'hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none'
				)}
			>
				<Sparkles />
				Vision
			</Link>
			<RootToggle
				options={toggleOptions.map((option) => {
					return {
						title: option.title,
						description: option.description,
						url: option.url,
						icon: (
							<option.icon
								className={cn('size-9 shrink-0 rounded-md p-1.5', option.color)}
								// style={{
								// 	backgroundColor: `hsl(${option.color}/.3)`,
								// 	color: `hsl(${option.color})`
								// }}
							/>
						)
					};
				})}
			/>
		</>
	);
}

// export function SidebarBanner(): JSX.Element {
// 	const pathname = usePathname();
// 	const mode = useMode();
// 	const currentMode = modes.find((item) => item.param === mode) ?? modes[0];

// 	if (
// 		pathname === '/stacks' ||
// 		pathname === '/stacks/get-started' ||
// 		pathname === '/bitcoin' ||
// 		pathname === '/bitcoin/get-started' ||
// 		pathname.startsWith('/guides') ||
// 		pathname === '/stacks/api-keys' ||
// 		pathname === '/stacks/rate-limiting' ||
// 		pathname === '/stacks/contributors-guide' ||
// 		pathname === '/bitcoin/rate-limiting' ||
// 		pathname === '/bitcoin/api-keys' ||
// 		pathname === '/bitcoin/contributors-guide'
// 	) {
// 		return <></>;
// 	}

// 	return (
// 		<Link key={currentMode.param} href={`/${currentMode.param}`}>
// 			<div className="group flex flex-row items-center gap-2 rounded-lg px-2 transition-colors">
// 				<ChevronLeft className="text-muted-foreground size-4 shrink-0 rounded-md group-hover:text-primary" />
// 				<div>
// 					<p className="text-muted-foreground group-hover:text-primary">Back</p>
// 				</div>
// 			</div>
// 		</Link>
// 	);
// }