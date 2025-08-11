import { DocsLayout } from '~/components/layouts/docs';
import type { ReactElement, ReactNode } from 'react';
import { NavMenu } from '~/components/nav-menu';
import { docsLayoutOptions } from '~/app/layout.config';

export default function Layout({
    children
}: {
    children: ReactNode;
}): ReactElement {
    return (
        <>
            <NavMenu />
            <DocsLayout {...docsLayoutOptions}>{children}</DocsLayout>
        </>
    );
}
