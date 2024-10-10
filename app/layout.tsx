import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Open_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '~/components/footer';
import { HomeLayout } from 'fumadocs-ui/home-layout';
import { baseLayoutOptions } from '~/utils/layout-options';
import { baseUrl, createMetadata } from '~/utils/metadata';

// const inter = Inter({
// 	subsets: ['latin']
// });

const openSans = Open_Sans({
    subsets: ['latin']
})

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={openSans.className} suppressHydrationWarning>
			<head>
				<link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<meta name="apple-mobile-web-app-title" content="Klave" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="stylesheet" href="https://use.typekit.net/tcp0xtf.css" />
			</head>
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
