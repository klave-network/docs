import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { Body } from '~/app/layout.client';
import { docsLayoutOptionsWithoutTopbar, docsLayoutOptions } from '~/utils/layout-options';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
	return (
	<>
	    <div className="md:hidden">
			<DocsLayout {...docsLayoutOptionsWithoutTopbar}>{children}</DocsLayout>
	 	</div>
	 	<div className="hidden md:block">
	 		<DocsLayout {...docsLayoutOptions}>{children}</DocsLayout>
	 	</div>
	</>
	);
}
