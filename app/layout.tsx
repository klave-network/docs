import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '~/components/footer';
// import { HomeLayout } from 'fumadocs-ui/home-layout';
// import { baseLayoutOptions } from '~/utils/layout-options';

const inter = Inter({
	subsets: ['latin']
});

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex min-h-screen flex-col">
				<RootProvider>
					{/* <HomeLayout {...baseLayoutOptions}>{children}</HomeLayout> */}
                    {children}
					<Footer />
				</RootProvider>
			</body>
		</html>
	);
}
