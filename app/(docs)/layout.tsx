import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { Body } from './layout.client';
import { docsLayoutOptionsWithoutTopbar } from '~/utils/layout-options';


export default function Layout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<Body>
			<DocsLayout {...docsLayoutOptionsWithoutTopbar}>{children}</DocsLayout>
		</Body>
	);
}