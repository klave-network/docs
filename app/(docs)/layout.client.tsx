'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { ChevronLeft, Home, Library, type LucideIcon, PlugZap, GraduationCap, BookOpen, BookText } from 'lucide-react';
import { cn } from '~/lib/utils';
import { modes } from '~/utils/modes';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { ApiVersionSelect } from '~/utils/api-version-select';

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
		url: '/versions/sdk/latest',
		icon: Library,
		color: 'bg-gradient-to-b from-muted/50 to-primary/60 text-klave-strong-blue dark:to-klave-blue/60 dark:text-klave-blue'
	},
	{
		title: 'Connector',
		description: 'Secretarium Connector',
		url: '/versions/connector/latest',
		icon: PlugZap,
		color: 'bg-gradient-to-b from-muted/50 to-accent/60 text-klave-strong-teal dark:to-klave-teal/60 dark:text-klave-teal'
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
	// might need to remove width styles max-w-container mx-auto
	return <div className={cn(mode, 'size-full')}>{children}</div>;
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
					<div className="inline-flex items-center gap-2">{m.name}</div>
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

	// Add -mx-4 md:-mx-3 px-4 md:px-3 to styles if topbar from <HomeLayout/> is present
	return (
		<>
			<div className={cn('border-b border-border pb-3 pt-2', pathname.includes('/versions') ? '' : 'mb-2')}>
				<Link
					href="/"
					className={cn(
						'flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 font-medium',
						pathname === '/'
							? 'text-fd-primary'
							: 'hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none'
					)}
				>
					<Home />
					Home
				</Link>
				<Link
					href="/learn"
					className={cn(
						'flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 font-medium',
						pathname.includes('/learn') && !pathname.includes('/whitepaper')
							? 'text-fd-primary'
							: 'hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none'
					)}
				>
					<GraduationCap />
					Learn
				</Link>
				<Link
					href="/versions/sdk/latest"
					className={cn(
						'flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 font-medium',
						pathname.includes('/versions')
							? 'text-fd-primary'
							: 'hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none'
					)}
				>
					<BookOpen />
					Reference
				</Link>
				<Link
					href="/learn/whitepaper"
					className={cn(
						'flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 font-medium',
						pathname.includes('/whitepaper')
							? 'text-fd-primary'
							: 'hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none'
					)}
				>
					<BookText />
					Whitepaper
				</Link>
			</div>
			{pathname.includes('versions') ? (
				<RootToggle
					options={toggleOptions.map((option) => {
						return {
							title: option.title,
							description: option.description,
							url: option.url,
							icon: <option.icon className={cn('size-9 shrink-0 rounded-md p-1.5', option.color)} />
						};
					})}
				/>
			) : null}
			{pathname.includes('sdk') ? <ApiVersionSelect /> : null}
		</>
	);
}
