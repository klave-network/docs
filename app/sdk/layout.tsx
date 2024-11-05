import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { docsLayoutOptions } from '~/app/layout.config';
import { NavMenu } from '~/components/nav-menu';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
	return <DocsLayout {...docsLayoutOptions}>
	<NavMenu />
	{children}
	</DocsLayout>
}
