import '~/global-styles/globals.css';
import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { useNProgress } from '~/hooks/use-nprogress';
import { Open_Sans, Fira_Code } from 'next/font/google';

const regularFont = Open_Sans({
	weight: '400',
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
	return (
		<>
			<Global
				styles={css({
					'html, body, kbd, button, input, select': {
						fontFamily: regularFont.style.fontFamily
					},
					'code, pre, table.diff': {
						fontFamily: monospaceFont.style.fontFamily
					}
				})}
			/>
			<Component {...pageProps} />
		</>
	);
}
