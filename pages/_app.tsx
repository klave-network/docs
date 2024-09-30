import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';
import type { AppProps } from 'next/app';

const openSans = Open_Sans({
	weight: '400',
	variable: '--font-openSans',
	display: 'swap',
	subsets: ['latin']
});
const openSansMedium = Open_Sans({
	weight: '500',
	variable: '--font-openSansMedium',
	display: 'swap',
	subsets: ['latin']
});
const openSansBold = Open_Sans({
	weight: '700',
	variable: '--font-openSansBold',
	display: 'swap',
	subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${openSans.variable} ${openSansMedium.variable} ${openSansBold.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
