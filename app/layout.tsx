import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '~/components/footer';
import { HomeLayout } from 'fumadocs-ui/home-layout';
import { baseLayoutOptions } from '~/utils/layout-options';
import { baseUrl, createMetadata } from '~/utils/metadata';

const inter = Inter({
	subsets: ['latin']
});

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex min-h-screen flex-col">
				<RootProvider>
					<div className="hidden md:block">
						<HomeLayout {...baseLayoutOptions}>{children}</HomeLayout>
					</div>
					<div className="md:hidden">{children}</div>
					<Footer />
				</RootProvider>
			</body>
		</html>
	);
}

export const metadata = createMetadata({
	title: {
		template: '%s | Klave Docs',
		default: 'Klave Documentation'
	},
	description: 'Klave Documentation',
	metadataBase: baseUrl
});
