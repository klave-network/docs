import '~/global-styles/globals.css';
import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { useNProgress } from '~/hooks/use-nprogress';
import { Open_Sans, Fira_Code } from 'next/font/google';

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
export const monospaceFont = Fira_Code({
	weight: ['400', '500'],
	display: 'swap',
	subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
	useNProgress();
	return <Component {...pageProps} />;
}
