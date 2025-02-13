import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Open_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { baseUrl, createMetadata } from '~/utils/metadata';
import { Body } from '~/app/layout.client';
import { NavMenu } from '~/components/nav-menu';

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: 'variable'
});

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={openSans.className} suppressHydrationWarning>
			<head>
				<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<meta name="apple-mobile-web-app-title" content="Klave" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="stylesheet" href="https://use.typekit.net/tcp0xtf.css" />
			</head>
			<body>
				<RootProvider>
					<Body>
						{children}
					</Body>
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
	description:
		'Access Klave\'s comprehensive documentation to streamline your development process. Find resources to streamline your development process and maximise your use of our privacy-enhancing technology.',
	metadataBase: baseUrl
});
