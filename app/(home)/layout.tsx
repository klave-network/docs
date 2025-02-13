import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { baseOptions } from '~/app/layout.config';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
	return <HomeLayout {...baseOptions}>{children}</HomeLayout>
}
