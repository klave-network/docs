import { source } from '~/lib/source';
import { DocsLayout } from '~/components/layouts/docs';
import type { ReactElement, ReactNode } from 'react';
import { NavMenu } from '~/components/nav-menu';

export default function Layout({
    children
}: {
    children: ReactNode;
}): ReactElement {
    return (
        <>
            <NavMenu />
            <DocsLayout
                tree={source.pageTree}
                githubUrl="https://github.com/klave-network"
                containerProps={{
                    className: 'md:pt-[48px]'
                }}
            >
                {children}
            </DocsLayout>
        </>
    );
}
