import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { docsLayoutOptions } from '~/app/layout.config';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
	return <DocsLayout {...docsLayoutOptions}>{children}</DocsLayout>
}
